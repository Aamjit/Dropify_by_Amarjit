import React from "react";
import TopHeader from "./_components/TopHeader.js";
import SideNav from "./_components/SideNav.js";

function layout({ children }) {
	return (
		<div>
			<div className="h-full w-64 flex-col fixed inset-y-0 z-50 hidden md:flex">
				{<SideNav />}
			</div>
			<div className="md:ml-64">
				<TopHeader />
				{children}
			</div>
		</div>
	);
}

export default layout;
