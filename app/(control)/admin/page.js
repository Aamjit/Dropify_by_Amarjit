"use client";
import React, { useEffect, useState } from "react";
import Header from "./_components/Header";
import ControlPanel from "./_components/ControlPanel";
import { getFirestore, getDocs, query, collection } from "firebase/firestore";
import { app } from "../../../FirebaseConfig";

function Admin() {
	const db = getFirestore(app);
	const [isLoading, setIsLoading] = useState(true);
	const [announcements, setAnnouncements] = useState([]);

	useEffect(() => {
		// announcements.length == 0 && getAnnouncements();
		getAnnouncements();
		return () => {};
	}, []);

	//  Function to handle getting the users logs.
	const getAnnouncements = async () => {
		setAnnouncements([]);
		const queryRef = query(collection(db, `Announcements`));
		const postSnap = await getDocs(queryRef);
		console.log(postSnap);
		if (!postSnap?.docs.empty) {
			const data = postSnap.docs.map((doc) => {
				return {
					id: doc.id,
					...doc.data(),
				};
			});
			setAnnouncements(data);
			setIsLoading(false);
		} else {
			toast.error("No data!");
			setIsLoading(false);
		}
	};

	return (
		<div>
			<Header />
			{!isLoading && <ControlPanel announcements={announcements} />}
		</div>
	);
}

export default Admin;
