"use client";
import React, { useState } from "react";

function Announcement() {
	const [showAnnounce, setShowAnnounce] = useState(true);
	const announcements = [
		{
			id: 1,
			msg: "📢 Please be advised that this apllication is a work in progress and you might run into few issues.",
		},
		{
			id: 2,
			msg: "📢 We are working on providing the most secure ways for you to access your information.",
		},
	];

	return (
		showAnnounce && (
			<div>
				<div className="flex items-center justify-between gap-4 bg-indigo-600 px-4 py-3 mb-2 text-white">
					<ul>
						{announcements?.map((item) => (
							<li className="block" key={item?.id}>
								<p className="inline-block text-sm font-mono my-2 border-b">
									{item?.msg}
								</p>
							</li>
						))}
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
	);
}

export default Announcement;
