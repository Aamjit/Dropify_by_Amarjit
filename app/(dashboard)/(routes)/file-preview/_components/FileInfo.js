import Image from "next/image";
import React, { useEffect, useState } from "react";

function FileInfo({ file }) {
	const [fileType, setFileType] = useState();

	useEffect(() => {
		file && setFileType(file?.FileType.split("/")[0]);
		// console.log(file);
	}, []);

	return (
		file && (
			<div
				className="text-center border flex justify-center flex-col items-center
        p-4 rounded-md border-blue-300 md:w-2/3"
			>
				<Image
					src={fileType == "image" ? file?.FileUrl : "/documents.png"}
					width={300}
					height={300}
					alt="Preview"
				/>
				<h2 className="my-4 break-words max-w-36 min-w-36">
					{file?.FileName}
				</h2>
				<p className="mb-2 text-xs text-blue-400 dark:text-gray-400">
					<span className="w-fit text-wrap">{file?.FileType}</span>
				</p>
				<p className="text-sm text-gray-400 dark:text-gray-200">
					<span className="font-semibold">
						{(file?.FileSize / 1024 / 1024).toFixed(2)} MB
					</span>
				</p>
			</div>
		)
	);
}

export default FileInfo;
