import { FileType } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function FileInfo({ file }) {
  const [fileType, setFileType] = useState();

  useEffect(() => {
    file && setFileType(file?.FileType.split("/")[0]);
  }, [file]);

  return (
    <div
      className="text-center border flex justify-center flex-col items-center
        p-4 rounded-md border-blue-300 md:w-[40%]"
    >
      <Image
        src={fileType == "imageS" ? file?.FileUrl_ : "/documents.png"}
        width={250}
        height={250}
      />
      <h2 className="my-4">{file?.FileName}</h2>
      <p className="mb-2 text-xs text-blue-400 dark:text-gray-400">
        <span className="w-fit text-wrap">{file?.FileType}</span>
      </p>
      <p className="text-sm text-gray-400 dark:text-gray-200">
        <span className="font-semibold">{(file?.FileSize / 1024 / 1024).toFixed(2)} MB</span>
      </p>
    </div>
  );
}

export default FileInfo;
