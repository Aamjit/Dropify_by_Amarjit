import Image from "next/image";
import React from "react";
// Icons
import { MdCancel } from "react-icons/md";

function FilePreview({ File, removeFile, index }) {
	return (
		<div className="w-full bg-blue-50 flex flex-col gap-2 mt-3 p-4 border rounded-md">
			<div className="w-full flex justify-center">
				<Image src="/documents.png" width={50} height={50} alt="File" />
			</div>
			<div className="flex flex-col text-center">
				<h2>{File.name}</h2>
				<h2 className="text-[12px] text-gray-500">
					{File.type} - {(File.size / 1024 / 1024).toFixed(2)}MB
				</h2>
			</div>
			<button
				className="absolute hover:cursor-pointer text-red-500"
				id={index}
				onClick={(e) => {
					e.preventDefault();
					removeFile(e?.currentTarget.id);
				}}
			>
				<MdCancel size={30} type="button" key={index} id={index} />
			</button>
		</div>
	);
}

export default FilePreview;
