import React from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
// Icons
import { AiFillEye } from "react-icons/ai";
import { FaShareNodes } from "react-icons/fa6";

function FileList({ userLog }) {
	const router = useRouter();

	const previewSelectedFile = (e) => {
		const url = readSelectedRow(e);
	};

	const readSelectedRow = (e) => {
		const fileId = e?.target.id;
		console.log(fileId);
		if (!fileId) {
			toast.error("Please try again!");
			return;
		}
		const selectedLog = userLog?.find((log) => {
			return log.FileId == e?.target.id;
		});

		router.push("/file-preview/" + selectedLog?.FileId);
		console.log(selectedLog);
	};

	return (
		userLog && (
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
						{userLog.map((log) => (
							<tr key={log?.FileId}>
								<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-pretty overflow-x-auto max-w-48">
									{log?.FileName}
								</td>
								<td className="whitespace-nowrap px-4 py-2 text-gray-700">
									{new Date(
										log?.UploadedTime
									).toLocaleString()}
								</td>
								<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-pretty overflow-x-auto max-w-48">
									{log?.FileType}
								</td>
								<td className="whitespace-nowrap px-4 py-2 text-gray-700">
									{log?.FileSize}
								</td>
								<td className="whitespace-nowrap px-2 py-2">
									<a
										href={log?.FileUrl}
										target="#"
										className="flex gap-1 w-fit items-center rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
									>
										<AiFillEye size={16} />
										View
									</a>
								</td>
								<td className="whitespace-nowrap px-2 py-2">
									<button
										className="flex gap-1 w-fit items-center rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
										id={log?.FileId}
										onClick={(e) => {
											e.preventDefault();
											previewSelectedFile(e);
										}}
									>
										<FaShareNodes size={16} />
										Preview
									</button>
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
