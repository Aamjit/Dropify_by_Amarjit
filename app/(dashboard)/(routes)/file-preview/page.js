"use client";
// import { app } from "@/FirebaseConfig";
import { app } from "../../../../FirebaseConfig";
import {
	doc,
	getDoc,
	getDocs,
	query,
	collection,
	getFirestore,
	updateDoc,
	where,
	documentId,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import FileInfo from "./_components/FileInfo";
import FileForm from "./_components/FileForm";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Loading from "../../_components/loading";
import LoadingRing from "../../_components/loadingRing";
import EmptyData from "../../../_components/EmptyData";
import GlobalApi from "../../../_utils/GlobalApi";
import HashApi from "../../../_utils/HashApi";
import toast from "react-hot-toast";
import Constant from "../../../_utils/Constant";
// Icons
import { FaArrowAltCircleLeft } from "react-icons/fa";

function FilePreview({ params }) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [files, setFiles] = useState([]);
	const db = getFirestore(app);
	const User = useUser().user;
	const [isLoading, setIsLoading] = useState(true);
	const [isSending, setIsSending] = useState(false);
	const fileId = searchParams.get("fileId").split(",");

	// console.log(params, searchParams.get("fileId"));

	useEffect(() => {
		files.length == 0 && getFileInfo(fileId);
	}, [fileId]);

	const getFileInfo = async (ids) => {
		const q = query(
			collection(db, Constant?.fs_uploaded_files),
			where(documentId(), "in", [...ids])
		);

		// Promise.all();
		// const docRef = ids.map((id) =>
		// 	doc(db, Constant?.fs_uploaded_files, id)
		// );
		const docSnap = await getDocs(q);

		if (docSnap) {
			// console.log(docSnap);
			let docDatas = [];
			docSnap.forEach((doc) => {
				docDatas.push(doc.data());
			});
			setFiles(docDatas);

			// setFile(docSnap.data());
			setIsLoading(false);
		} else {
			setIsLoading(false);
			toast.error("No such document!");
		}
	};

	const updatePassword = async (password) => {
		const fileRef = doc(db, Constant?.fs_uploaded_files, file?.FileId);
		const checkPassword = checkPasswordValidity(password);

		if (!checkPassword?.state) {
			toast.error(checkPassword?.msg);
		} else {
			HashApi.hashPassword(password).then((res) => {
				fileRef &&
					res &&
					updateDoc(fileRef, {
						IsPasswordProtected: true,
						Password: res,
					})
						.then(() => {
							file?.IsPasswordProtected
								? toast.success("Password updated successfully")
								: toast.success("Password added successfully");
							getFileInfo(file?.FileId);
						})
						.catch((err) => {
							toast.error("Failed to add/update password");
						});
			});
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

	const sendEmail = (targetEmail, file) => {
		if (!targetEmail) {
			toast.error(`Email Id is empty.`);
			return;
		}
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
				console.log(data, res);
				if (res?.status === 200) {
					toast.success("Email sent successfully.");
				} else {
					toast.error(`Error sending the mail!`);
				}
				setIsSending(false);
			})
			.catch(() => {
				toast.error(`Error sending the mail!`);
				setIsSending(false);
			});
	};

	return isLoading ? (
		Loading("Loading")
	) : (
		<>
			<Link
				href={""}
				onClick={() => router.back()}
				className="flex items-center m-4 gap-4 w-fit"
			>
				<FaArrowAltCircleLeft size={25} /> Go Back
			</Link>
			{files.length > 0 ? (
				files.map((file) => (
					<div key={file?.FileId}>
						{isSending && LoadingRing("Sending File Details...")}
						<div className="py-4 px-10">
							{/* <Link
								href={""}
								onClick={() => router.back()}
								className="flex items-center my-4 gap-4 w-fit"
							>
								<FaArrowAltCircleLeft size={25} /> Go Back
							</Link> */}
							<div className="flex gap-5 flex-col md:flex-row flex-grow">
								<FileInfo file={file} />
								{file?.FileId && User && (
									<FileForm
										file={file}
										updatePassword={updatePassword}
										sendEmail={sendEmail}
									/>
								)}
							</div>
						</div>
					</div>
				))
			) : (
				<EmptyData />
			)}
		</>
	);
}

export default FilePreview;
