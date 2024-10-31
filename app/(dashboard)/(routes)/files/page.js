"use client";
import React, { useState, useMemo } from "react";
import FileCards from "./_components/FileCards";
import EmptyData from "../../../_components/EmptyData";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useUser } from "@clerk/nextjs";
import { app } from "../../../../FirebaseConfig";
import Loading from "../../_components/loading";
import toast from "react-hot-toast";
import Constant from "../../../_utils/Constant";

function Files() {
	const db = getFirestore(app);
	const { user } = useUser();
	const [userLog, setUserLog] = useState();
	const [isLoading, setIsLoading] = useState(true);

	//  Function to handle getting the users logs.
	const getUserLogs = async (user) => {
		const docSnap = await getDoc(doc(db, Constant?.fs_user_log, user?.id));
		if (docSnap?.exists()) {
			setUserLog(docSnap?.data());
			setIsLoading(false);
		} else {
			setIsLoading(false);
			toast.error("No logs found for this account.");
		}
	};

	useMemo(() => user && getUserLogs(user), [user?.id]);

	return !isLoading ? (
		<div>{userLog ? <FileCards userLog={userLog} /> : <EmptyData />}</div>
	) : (
		Loading("Fetching data")
	);
}

export default Files;
