"use client";
import React, { useEffect, useState } from "react";
import {
	getFirestore,
	getDocs,
	query,
	collection,
	orderBy,
	where,
} from "firebase/firestore";
import { app } from "../../FirebaseConfig";

function Announcement() {
	const db = getFirestore(app);
	const [isLoading, setIsLoading] = useState(true);
	const [announcements, setAnnouncements] = useState([]);
	const [showAnnounce, setShowAnnounce] = useState(true);

	useEffect(() => {
		// announcements.length == 0 && getAnnouncements();
		getAnnouncements();
		return () => {};
	}, []);

	const getAnnouncements = async () => {
		const queryRef = query(
			collection(db, `Announcements`),
			where("Active", "==", true),
			orderBy("Order")
		);
		const postSnap = await getDocs(queryRef);
		if (!postSnap?.docs.empty) {
			const data = postSnap.docs.map((doc) => {
				if (doc?.data().Active == true) {
					return {
						id: doc.id,
						...doc.data(),
					};
				} else {
					return null;
				}
			});
			console.log(data);
			setAnnouncements(data);
			setIsLoading(false);
		} else {
			toast.error("No data!");
			setIsLoading(false);
		}
	};

	return !isLoading
		? showAnnounce && (
				<div>
					<div className="flex items-center justify-between gap-2 bg-indigo-600 px-4 py-3 mb-2 text-white">
						<ul>
							{announcements?.map(
								(item) =>
									item && (
										<li className="block" key={item?.id}>
											<p className="inline-block text-sm font-mono my-2 border-b">
												{item?.Message}
											</p>
										</li>
									)
							)}
						</ul>

						<button
							aria-label="Dismiss"
							className="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
							onClick={(e) => {
								e.preventDefault();
								setShowAnnounce(false);
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
					</div>
				</div>
		  )
		: "";
}

export default Announcement;
