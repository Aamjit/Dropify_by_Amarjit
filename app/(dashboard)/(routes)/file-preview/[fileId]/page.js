"use client";
// import { app } from "@/FirebaseConfig";
import { app } from "../../../../../FirebaseConfig";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import FileInfo from "./_components/FileInfo";
import FileForm from "./_components/FileForm";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import Loading from "../../../_components/loading";
import EmptyData from "../../../../_components/EmptyData";
import GlobalApi from "../../../../_utils/GlobalApi";
import toast from "react-hot-toast";
// Icons
import { FaArrowAltCircleLeft } from "react-icons/fa";

function FilePreview({ params }) {
	const [file, setFile] = useState(null);
	const db = getFirestore(app);
	const User = useUser().user;
	const [isLoading, setIsLoading] = useState(false);
	const [isSending, setIsSending] = useState(false);

	useEffect(() => {
		!file && getFileInfo(params?.fileId);
		window.addEventListener("load", setIsLoading(false));
		return () => window.removeEventListener("load", setIsLoading(false));
	}, [!file]);

	const getFileInfo = async (id) => {
		const docRef = doc(db, "Uploaded_Files", id);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			setFile(docSnap.data());
		} else {
			console.log("No such document!");
		}
	};

	const updatePassword = async (password) => {
		const fileRef = doc(db, "Uploaded_Files", file?.FileId);
		const checkPassword = checkPasswordValidity(password);
		if (!checkPassword?.state) {
			showErrorToast(checkPassword?.msg);
		} else {
			fileRef &&
				password &&
				(await updateDoc(fileRef, {
					IsPasswordProtected: true,
					Password: password,
				})
					.then(() => {
						file?.IsPasswordProtected
							? showSuccessToast("Password updated successfully")
							: showSuccessToast("Password added successfully");
						getFileInfo(file?.FileId);
					})
					.catch((err) => {
						showErrorToast("Failed to add/update password");
					}));
		}
	};

	const checkPasswordValidity = (password) => {
		if (password.length < 8) {
			return { state: false, msg: "Password length is too short" };
		} else {
			if (file?.IsPasswordProtected && file?.Password === password) {
				return { state: false, msg: "Password already in use" };
			}
			return { state: true, msg: "" };
		}
	};

	const sendEmail = (targetEmail) => {
		const data = {
			targetEmail: targetEmail,
			userName: User?.username,
			UserfullName: file?.UserFullName,
			fileId: file?.FileId,
			fileName: file?.FileName,
			fileSize: (file?.FileSize / 1024 / 1024).toFixed(2) + "MB",
			fileType: file?.FileType,
			shortUrl: file?.ShortUrl,
			senderImage: file?.UserImageUrl,
			senderEmail: file?.UserEmail,
		};

		setIsSending(true);

		// send email to the recipient with the details of the shared file
		GlobalApi.SendEmail(data)
			.then((res) => {
				if (res?.status === 200) {
					showSuccessToast("Email sent successfully.");
				} else {
					showErrorToast(`Error sending the mail!`);
				}
				setIsSending(false);
			})
			.catch((err) => {
				console.log(err);
				showErrorToast(`Error sending the mail!`);
				setIsSending(false);
			});
	};

	const showSuccessToast = (msg) => {
		toast.success(msg, {
			position: "top-center",
			autoClose: 5000,
		});
	};

	const showErrorToast = (msg) => {
		toast.error(msg, {
			position: "top-center",
			autoClose: 5000,
		});
	};

	return isLoading ? (
		Loading("Loading")
	) : file ? (
		<div className="py-4 px-10">
			<Link
				href="/uploads"
				className="flex items-center my-4 gap-4 w-fit"
			>
				<FaArrowAltCircleLeft size={25} /> Go Back
			</Link>
			<div className="flex gap-5 flex-col md:flex-row flex-grow">
				<FileInfo file={file} />
				{isSending
					? Loading("Sending mail")
					: file?.FileId &&
					  User && (
							<FileForm
								file={file}
								updatePassword={updatePassword}
								sendEmail={sendEmail}
							/>
					  )}
			</div>
		</div>
	) : (
		<EmptyData />
	);
}

export default FilePreview;
