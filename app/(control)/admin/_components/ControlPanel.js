import React from "react";

function ControlPanel({ announcements }) {
	console.log(announcements);
	return (
		<div className="w-[90%] px-8 py-6 mx-auto mt-8 bg-gray-100 shadow-md rounded-lg">
			<p className="text-xl font-bold">Control Panel</p>
			<div className="flex gap-4 mt-6 flex-wrap">
				<button>Show Announcements</button>
				<button>Create new Announcements</button>
			</div>
		</div>
	);
}

export default ControlPanel;
