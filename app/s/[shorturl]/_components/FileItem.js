import React, { useEffect, useRef, useState } from "react";
// Icons
import { BsFileEarmarkArrowDownFill } from "react-icons/bs";
import { FaLock, FaLockOpen } from "react-icons/fa";
import HashApi from "../../../_utils/HashApi";

function FileItem({ file }) {
	const [isPasswordProtect, setIsPasswordProtect] = useState(true);
	const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

	useEffect(() => {
		file && setIsPasswordProtect(file?.IsPasswordProtected);
	}, [file]);

	const checkPasswordInput = async (value) => {
		await HashApi.comparePassword(value, file?.Password).then((res) => {
			console.log(res);
			setIsPasswordCorrect(res);
		});
	};

	return (
		<div className="relative py-4 flex flex-col justify-center items-center text-center rounded-lg shadow-md bg-white m-4 w-[80%] sm:w-[60%]">
			<div className="m-2 mb-4">
				<h2 className="my-2">
					<strong className="text-primary font-bold text-2xl ">
						{file.UserName}
					</strong>{" "}
					shared a file with you
				</h2>
				<p className="text-xs text-gray-400">
					Please find below details
				</p>
				<p className="text-xs text-gray-400">
					Click the icon to download
				</p>
			</div>

			<div className="group w-[80%] sm:w-[60%] grid place-items-center">
				<div className="bg-black mb-4 rounded-xl max-h-[50vh]">
					<img
						alt="File Preview"
						src="/download-file.gif"
						className="max-h-[40vh] -z-10 object-cover transition-opacity group-hover:opacity-30 rounded-xl"
					/>
				</div>

				<div className="absolute">
					<div
						className={`translate-y-8 flex flex-col gap-4 transform opacity-0 transition-all
           group-hover:translate-y-0 group-hover:opacity-100
           border border-gray-300 rounded-lg p-4 ${
				isPasswordProtect
					? !isPasswordCorrect
						? "bg-gray-400"
						: "bg-green-500"
					: "bg-green-500"
			}`}
					>
						{isPasswordProtect && !isPasswordCorrect ? (
							<div className="flex text-gray-100 gap-2 justify-center items-center z-10">
								<FaLock size={25} />
								<p className="">File is protected</p>
							</div>
						) : (
							isPasswordProtect && (
								<div className="flex text-gray-100 gap-2 justify-center items-center z-10">
									<FaLockOpen size={25} />
									<p className="">File Unlocked</p>
								</div>
							)
						)}
						{isPasswordProtect && (
							<input
								type="password"
								placeholder="Enter Password"
								className="p-2 rounded-md"
								onChange={(event) =>
									checkPasswordInput(event.target.value)
								}
							/>
						)}
						<button
							disabled={isPasswordProtect && !isPasswordCorrect}
							className="bg-primary px-4 py-2 text-white rounded-lg flex flex-row items-center justify-center gap-1 disabled:bg-gray-500"
							onClick={() => {
								window.open(file?.FileUrl);
							}}
						>
							<BsFileEarmarkArrowDownFill size={25} />
							Download
						</button>
					</div>
				</div>
			</div>

			<div className="flex flex-col justify-center items-center p-6 text-left sm:p-4">
				<div className="flex flex-row gap-2 flex-wrap justify-center">
					{/* <p className="text-sm tracking-widest text-primary">File Name:</p> */}
					<p className="text-md font-bold text-primary">
						{file.FileName}
					</p>
				</div>
				<div className="flex flex-row gap-2">
					<p className="text-sm font-normal text-gray-500">
						⚡{file.FileType}
					</p>
					<p className="text-sm font-normal text-gray-500">
						⚡{(file.FileSize / 1024 / 1024).toFixed(2)}MB
					</p>
				</div>
			</div>
		</div>
	);
}

export default FileItem;
