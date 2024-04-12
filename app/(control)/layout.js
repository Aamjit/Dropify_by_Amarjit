import React from "react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

function layout({ children }) {
	// Get the userId from auth() -- if null, the user is not signed in
	const { userId } = auth();
	return (
		<div>
			{userId == process.env.NEXT_PUBLIC_ADMIN_ID
				? children
				: redirect("/uploads")}
		</div>
	);
}

export default layout;
