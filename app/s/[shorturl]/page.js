"use client";
import {
	collection,
	getDoc,
	getDocs,
	getFirestore,
	limit,
	query,
	where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { app } from "../../../FirebaseConfig";
import FileItem from "./_components/FileItem";
import Link from "next/link";

function ShortView({ params }) {
	const [file, setFile] = useState();
	const db = getFirestore(app);

	useEffect(() => {
		!file && getFIleInfo(params?.shorturl);
	}, []);

	const getFIleInfo = async (shorturlId) => {
		const queryRef = query(
			collection(db, "Uploaded_Files"),
			where("ShortUrlId", "==", shorturlId),
			limit(1)
		);

		const docSnap = await getDocs(queryRef);
		if (docSnap) {
			docSnap.forEach((doc) => {
				setFile(doc.data());
			});
		} else {
			console.log("No such document!");
		}
	};

	return (
		<div className="w-full h-screen bg-gray-100 flex justify-center items-center flex-col gap-2">
			<Link href="">
				<img src="/logo.svg" alt="logo" width={100} />
			</Link>
			{file && <FileItem file={file} />}
		</div>
	);
}

export default ShortView;
