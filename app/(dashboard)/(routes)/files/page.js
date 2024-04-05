"use client";
import React, { useEffect, useState } from "react";
import FileCards from "./_components/FileCards";
import EmptyData from "../../../_components/EmptyData";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useUser } from "@clerk/nextjs";
import { app } from "../../../../FirebaseConfig";
import Loading from "../../_components/loading";

function Files() {
	const db = getFirestore(app);
	const { user } = useUser();
	const [userLog, setUserLog] = useState();
	const [isLoading, setIsLoading] = useState(true);

	// Get the User Logs.
	useEffect(() => {
		user && !userLog && getUserLogs(user);
	}, [user]);

	const getUserLogs = async (user) => {
		const docSnap = await getDoc(doc(db, "User_Log", user?.id));
		if (docSnap?.exists()) {
			setUserLog(docSnap?.data());
			setIsLoading(false);
		}
	};

	return !isLoading ? (
		<div>{userLog ? <FileCards userLog={userLog} /> : <EmptyData />}</div>
	) : (
		Loading("Fetching data")
	);
}

export default Files;
