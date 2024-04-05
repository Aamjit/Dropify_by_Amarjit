import React from "react";

function EmptyData() {
	return (
		<div>
			<div className="flex h-fit flex-col bg-white py-4">
				<img
					src="/box.png"
					alt="Empty"
					className="h-56 object-contain object-center"
				/>

				<div className="flex flex-1 items-center justify-center">
					<div className="mx-auto max-w-xl px-4 py-2 text-center">
						<h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							We couldn't find any data🙁
						</h1>

						<p className="mt-4 text-gray-500">
							Start uploading some?
						</p>

						<a
							href="/uploads"
							className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
						>
							Go to Upload
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EmptyData;
