import React, { useCallback, useState } from "react";
import ErrorCard from "./ErrorCard";
import FilePreview from "./FilePreview";
import ProgressBar from "./ProgressBar";
import { useDropzone } from "react-dropzone";
// Icons
import { FaFileUpload, FaFileMedical } from "react-icons/fa";

function UploadForm({ uploadSelectedFile, progress }) {
	const [File, setFile] = useState([]);
	let TempFile;
	const [errorMsg, setErrorMsg] = useState();

	const onDrop = useCallback((acceptedFiles) => {
		// Do something with the files
		setFile(acceptedFiles);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
	});

	const onFileSelect = (File) => {
		if (File && File.size > 5000000) {
			setErrorMsg("Maximum file size is 5MB");
			setFile(null);
			return;
		}
		setErrorMsg(null);
		setFile(File);
	};

	return (
		<div>
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-lg">
					<h1 className="text-center text-2xl font-bold text-primary sm:text-3xl">
						Start uploading files
					</h1>

					<p className="mx-auto mt-4 max-w-md text-center text-gray-500">
						Uploading files might take some time, based on the type
						and size of your files. Please be patient and let it
						complete!
					</p>

					<div className="flex flex-col items-center justify-center w-full mt-8">
						{File?.length == 0 && (
							<label
								htmlFor="dropzone-file"
								{...getRootProps()}
								className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300
										border-dashed rounded-lg cursor-pointer bg-gray-50 
										hover:bg-gray-200"
							>
								<div className="flex flex-col items-center justify-center pt-5 pb-6">
									{isDragActive ? (
										<FaFileMedical
											size={50}
											className="mb-4 text-primary animate-pulse"
										/>
									) : (
										<FaFileUpload
											size={50}
											className="mb-4 text-primary" //	dark:text-gray-400
										/>
									)}
									{isDragActive ? (
										<p className="mb-2 text-sm text-blue-400 animate-pulse">
											Drop the files here ...
										</p>
									) : (
										<>
											<p className="mb-2 text-sm text-blue-400 ">
												<span className="font-semibold">
													Click to upload
												</span>{" "}
												or drag and drop
											</p>
											<p className="text-xs text-gray-500 ">
												SVG, PNG, JPG or GIF (MAX FILES:
												5, MAX TOTAL SIZE: 10MB)
											</p>
										</>
									)}
								</div>
								<input
									id="dropzone-file"
									type="file"
									className="hidden"
									{...getInputProps()}
									onChange={(event) => {
										onFileSelect(event.target.files[0]);
									}}
								/>
							</label>
						)}
						{errorMsg ? <ErrorCard Msg="Error" /> : null}
						{File?.length !== 0
							? File?.map((item, index) => (
									<FilePreview
										key={index}
										index={index}
										File={item}
										removeFile={(e) => {
											TempFile = [...File];
											TempFile.splice(e, 1);
											setFile(TempFile);
										}}
									/>
							  ))
							: null}
						{progress?.progress != 0 ? (
							<ProgressBar progress={progress} />
						) : (
							<button
								disabled={File?.length == 0}
								className="my-4 bg-primary text-white rounded-full w-[40%] px-6 py-2
           disabled:bg-gray-500"
								onClick={(e) => {
									e.preventDefault();
									uploadSelectedFile(File);
								}}
							>
								Upload
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default UploadForm;
