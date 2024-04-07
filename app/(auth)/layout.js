import React from "react";
import { auth, SignedIn, SignedOut, RedirectToSignUp } from "@clerk/nextjs";
import { redirect } from "next/navigation";

function layout({ children }) {
	// Get the userId from auth() -- if null, the user is not signed in
	const { userId } = auth();

	return <div>{userId ? redirect("/uploads") : children}</div>;
}

export default layout;
