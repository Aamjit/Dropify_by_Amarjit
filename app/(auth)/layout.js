import React from "react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

function layout({ children }) {
	const { userId } = auth();

	return <div>{userId ? redirect("/uploads") : children}</div>;
}

export default layout;
