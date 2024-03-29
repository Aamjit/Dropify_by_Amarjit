import React, { useState } from "react";
import ErrorCard from "./ErrorCard";
import FilePreview from "./FilePreview";
import ProgressBar from "./ProgressBar";
import UploadSuccess from "./UploadSuccess";

function UploadForm({ uploadSelectedFile, progress }) {
  const [File, setFile] = useState(0);
  const [errorMsg, setErrorMsg] = useState();

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
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-primary sm:text-3xl">
            Start uploading files
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Uploading files might take some time, based on the type and size of
            your files. Please be patient and let it complete!
          </p>

          <div className="flex flex-col items-center justify-center w-full mt-8">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300
               border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700
                hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 
                dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-10 h-8 mb-4 text-primary dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-blue-400 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX SIZE: 5MB)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={(event) => {
                  onFileSelect(event.target.files[0]);
                }}
              />
            </label>
            {errorMsg ? <ErrorCard Msg="Error" /> : null}
            {File ? (
              <FilePreview File={File} removeFile={() => setFile(null)} />
            ) : null}
            {progress != 0 ? (
              <ProgressBar progress={progress} />
            ) : (
              <button
                //   disabled
                disabled={!File}
                className="my-4 bg-primary text-white rounded-full w-[40%] px-6 py-2
           disabled:bg-gray-500"
                onClick={() => uploadSelectedFile(File)}
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
