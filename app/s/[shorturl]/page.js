"use client";
import {
	collection,
	getDocs,
	getFirestore,
	limit,
	query,
	where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { app } from "../../../FirebaseConfig";
import FileItem from "./_components/FileItem";
import EmptyData from "../../_components/EmptyData";
import Loading from "./_components/loading";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import Constant from "../../_utils/Constant";

function ShortView({ params }) {
	const [file, setFile] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const db = getFirestore(app);

	useEffect(() => {
		!file && getFIleInfo(params?.shorturl);
	}, []);

	const getFIleInfo = async (shorturlId) => {
		const queryRef = query(
			collection(db, Constant?.fs_uploaded_files),
			where("ShortUrlId", "==", shorturlId),
			limit(1)
		);

		await getDocs(queryRef).then((res) => {
			if (!res?.empty) {
				res.forEach((doc) => {
					setFile(doc.data());
					setIsLoading(false);
				});
			} else {
				toast.error("No such document!");
				setIsLoading(false);
			}
		});
	};

	return !isLoading ? (
		<div className="w-full h-screen bg-gray-100 flex justify-center items-center flex-col gap-8">
			<Toaster
				position="top-center"
				reverseOrder={false}
				gutter={8}
				containerClassName=""
				toastOptions={{
					className: "",
					duration: 3000,
					style: {
						background: "#363636",
						color: "#fff",
					},
				}}
			/>

			{file ? (
				<>
					<Link href="">
						<img src="/logo.svg" alt="logo" width={60} />
					</Link>
					<FileItem file={file} />
				</>
			) : (
				<EmptyData />
			)}
		</div>
	) : (
		Loading("Fetching data")
	);
}

export default ShortView;
