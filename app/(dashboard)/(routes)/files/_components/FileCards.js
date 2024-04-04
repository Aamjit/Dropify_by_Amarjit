import React, { useEffect, useState } from "react";
import FileList from "./FileList";
import { HiDocumentSearch } from "react-icons/hi";

function FileCards({ userLog }) {
  const [logData, setLogData] = useState();

  useEffect(() => {
    setLogData(userLog?.log);
  }, [!logData]);

  const filterLog = (fileNameSearch) => {
    setLogData(userLog.log);
    if (fileNameSearch) {
      setLogData(
        logData.filter(
          (elem) =>
            elem?.FileName.toLowerCase().indexOf(
              fileNameSearch.toLowerCase()
            ) >= 0
        )
      );
    }
  };

  return (
    <div className="m-2 p-2 grid grid-cols-1 gap-4">
      {/* <div className=""> */}
      <div className="rounded-md bg-gray-100 shadow-md px-2 py-4 my-2">
        <h2 className="font-semibold">Search for file</h2>
        <div className="flex w-full gap-2 bg-white p-1.5 my-4 rounded-lg">
          <input
            type="text"
            placeholder="Enter filename..."
            className="w-full"
            onChange={(e) => {
              filterLog(e.target.value);
            }}
          />
          <HiDocumentSearch size={25} className="text-gray-400 m-auto" />
        </div>
      </div>

      {logData && <FileList userLog={logData} />}
    </div>
  );
}

export default FileCards;
