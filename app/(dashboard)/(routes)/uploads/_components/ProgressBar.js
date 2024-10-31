import React from "react";

function ProgressBar({ progress }) {
	return (
		<>
			<div className="border-gray-400 border-2 w-full mt-3 rounded-full">
				<div
					className="bg-primary rounded-full text-xs text-center text-white"
					style={{ width: `${progress?.progress}%` }}
				>
					{`${Number(progress?.progress).toFixed(1)}%`}
				</div>
			</div>
			<span className="text-gray-400 mt-2">{progress?.fileName}</span>
		</>
	);
}

export default ProgressBar;
