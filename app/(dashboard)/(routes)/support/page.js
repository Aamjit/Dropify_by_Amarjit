"use client";
import React, { useEffect, useState } from "react";
import SupportCard from "./_components/SupportCard";
import { app } from "../../../../FirebaseConfig";
import Constant from "../../../_utils/Constant";
import { addDoc, collection, doc, getFirestore } from "firebase/firestore";
import Loading from "../../_components/loading";
import LoadingRing from "../../_components/loadingRing";
import toast from "react-hot-toast";

function Support() {
	const db = getFirestore(app);
	const [isLoading, setIsLoading] = useState(true);
	const [isUploading, setIsUploading] = useState(false);

	useEffect(() => {
		window.addEventListener("load", setIsLoading(false));
		return () => window.removeEventListener("load", setIsLoading(false));
	}, []);

	const submitSupportForm = (form) => {
		setIsUploading(true);
		addDoc(
			collection(
				doc(
					db,
					Constant.fs_support_tickets,
					`${
						new Date().getUTCMonth() + 1
					}:${new Date().getUTCFullYear()}`
				),
				Date.now().toString()
			),
			form
		)
			.then((res) => {
				toast.success("Your support ticket has been submitted.");
				setIsUploading(false);
			})
			.catch(() => {
				toast.error("Something went wrong. Please try again."),
					setIsUploading(false);
			});
	};

	return !isLoading ? (
		isUploading ? (
			LoadingRing("Submitting...")
		) : (
			<div>
				<SupportCard submitSupportForm={submitSupportForm} />
			</div>
		)
	) : (
		Loading("Loading")
	);
}

export default Support;
