"use client";
import React, { useEffect, useState } from "react";
import UploadForm from "./_components/UploadForm";
import { app } from "../../../../FirebaseConfig";
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from "firebase/storage";
import {
	getFirestore,
	doc,
	setDoc,
	getDoc,
	updateDoc,
} from "firebase/firestore";
import { useUser } from "@clerk/nextjs";
import ShortUrl from "../../../_utils/ShortUrl";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Loading from "../../_components/loading";
import LoadingRing from "../../_components/loadingRing";
import Constant from "../../../_utils/Constant";
import { useDropzone } from "react-dropzone";

function Uploads() {
	const router = useRouter();
	const { user } = useUser();
	const storage = getStorage(app);
	const db = getFirestore(app);
	const [progress, setProgress] = useState(0);
	const [currentUploadingFile, setCurrentUploadingFile] = useState();
	const [isUploading, setIsUploading] = useState(false);
	const [uploadCompleted, setUploadCompleted] = useState(false);
	const [fileId, setFileId] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [FileIdArr, setFileIdArr] = useState([]);

	useEffect(() => {
		window.addEventListener("load", setIsLoading(false));
		return () => window.removeEventListener("load", setIsLoading(false));
	}, []);

	useEffect(() => {
		if (uploadCompleted) {
			setUploadCompleted(false);
			setIsUploading(false);
			// router.push("/file-preview/" + fileId);

			console.log(JSON.stringify(FileIdArr));
			console.log(FileIdArr);
		}
	}, [uploadCompleted]);

	const processAndUpload = async (data) => {
		setIsUploading(true);

		// Wait for all uploadFile promises to resolve
		const uploadPromises = data.map(async (element) => {
			setProgress(0);
			setCurrentUploadingFile(element);
			let status = await uploadFile(element);
			return status;
		});

		// Wait for all promises to resolve
		await Promise.all(uploadPromises).then(() => {
			setIsUploading(false);
			setUploadCompleted(true);
		});
	};

	const uploadFile = async (file) => {
		const metadata = {
			contentType: file.type,
		};

		const fileRef = ref(storage, `${user.id}/` + file?.name);
		const uploadTask = uploadBytesResumable(fileRef, file, metadata);

		// Listen for state changes, errors, and completion of the upload.
		return new Promise((resolve, reject) => {
			uploadTask.on(
				"state_changed",
				(snapshot) => {
					// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					setProgress(progress);
				},
				(error) => {
					reject(error);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then(
						(downloadURL) => {
							saveToStore(file, downloadURL).then((res, err) => {
								console.log(res, err);
								resolve();
								// if (res) return true;
								// else return false;
							});
						}
					);
				}
			);
		});
	};

	const saveToStore = async (file, fileUrl) => {
		const docId = Date.now().toString();
		setFileIdArr((prev) => ({ ...prev, docId }));
		const { shortUrl, urlId } = ShortUrl();

		const fileObj = {
			FileId: docId,
			FileName: file.name,
			FileType: file.type,
			FileSize: file.size,
			UserEmail: `${user?.primaryEmailAddress.emailAddress}`,
			UserName: `${user?.username}`,
			UserFullName: `${user?.fullName}`,
			FileUrl: fileUrl,
			UserId: `${user?.id}`,
			UserImageUrl: `${user?.imageUrl}`,
			UserPhone: `${user?.primaryPhoneNumber?.phoneNumber}`,
			Password: "",
			IsPasswordProtected: false,
			ShortUrl: shortUrl,
			ShortUrlId: urlId,
		};

		return new Promise((resolve, reject) => {
			setDoc(doc(db, Constant?.fs_uploaded_files, docId), fileObj)
				.then((res) => {
					setFileId(docId);
					addFileToUserLog(fileObj);
					toast.success("File uploaded successfully.");
				})
				.catch((err) => {
					errorOccured(
						"Failed to upload file. Please try again later."
					);
					reject(err);
				});
		});
	};

	const addFileToUserLog = async (fileObj) => {
		const userLogRef = doc(db, Constant?.fs_user_log, fileObj.UserId);
		const docSnap = await getDoc(userLogRef);

		const userLogObj = {
			FileId: fileObj.FileId,
			FileName: fileObj.FileName,
			FileUrl: fileObj.FileUrl,
			FileType: fileObj.FileType,
			FileSize: (fileObj.FileSize / 1024 / 1024).toFixed(2) + " MB", //
			UploadedDate: new Date().toDateString(),
			UploadedTime: new Date().getTime(),
		};

		if (docSnap.exists()) {
			const docData = docSnap.data();
			docData.log.push(userLogObj);

			await updateDoc(userLogRef, {
				log: docData.log,
			})
				.then(() => {
					// setIsUploading(false);
					// setUploadCompleted(true);
				})
				.catch(() =>
					errorOccured("Failed to log the file in User Log.")
				);
		} else {
			fileObj &&
				setDoc(userLogRef, {
					log: [userLogObj],
				}).catch(() => {
					errorOccured("Failed to create a new entry for User Log.");
				});
		}
	};

	const errorOccured = (err) => {
		setUploadCompleted(false);
		setIsUploading(false);
		toast.error(err);
	};

	return isLoading ? (
		Loading("Loading")
	) : (
		<div>
			{isUploading && LoadingRing("Uploading...")}
			<UploadForm
				uploadSelectedFile={(data) => processAndUpload(data)}
				progress={{
					progress: progress,
					fileName: currentUploadingFile?.name,
				}}
			/>
		</div>
	);
}

export default Uploads;
