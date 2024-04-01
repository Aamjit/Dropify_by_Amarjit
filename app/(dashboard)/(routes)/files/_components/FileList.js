import React, { useEffect, useState } from "react";

function FileList({ userLog }) {
  const [log, setLog] = useState([]);

  useEffect(() => {
    setLog(userLog);
  }, [userLog]);

  return (
    log && (
      <div className="overflow-x-auto h-full">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="w-full h-full text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                File Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Uploaded Date/Time
              </th>
              <th className="whitespace-nowrap  px-4 py-2 font-medium text-gray-900">
                Type
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Size
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {log.map((log) => (
              <tr key={log.FileId}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-pretty overflow-x-auto max-w-48">
                  {log?.FileName}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {new Date(log?.UploadedTime).toLocaleString()}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-pretty overflow-x-auto max-w-48">
                  {log?.FileType}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {log?.FileSize}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <a
                    href={log?.FileUrl}
                    target="#"
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
}

export default FileList;
