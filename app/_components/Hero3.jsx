import React from "react";
// Icons
import { MdUploadFile } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { GrView } from "react-icons/gr";
import { BsFileEarmarkLockFill } from "react-icons/bs";

function Hero3() {
	const howList = [
		{
			id: 1,
			title: "Upload",
			desc: "Simply drag and drop your files or select them from your device.",
			icon: MdUploadFile,
		},
		{
			id: 2,
			title: "Share",
			desc: "Share your files instantly with anyone you choose, using a unique link or email invitation.",
			icon: IoIosMail,
		},
		{
			id: 2,
			title: "Protect",
			desc: "Add password to your file to secure it between only to your connection.",
			icon: BsFileEarmarkLockFill,
		},
		{
			id: 4,
			title: "Access Anywhere",
			desc: "Access your files from anywhere at any time. With cloud storage integration, your files are always within reach.",
			icon: GrView,
		},
	];
	return (
		<div>
			<section>
				<div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
					<div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
						<div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
							<h2 className="text-3xl font-bold sm:text-4xl">
								How it works?
							</h2>

							<p className="mt-4 text-gray-500 text-pretty">
								Let's see how you can use our platform. Using
								our easy to follow steps, you will be able to
								upload any file type in no time! Upload your
								documents in a few simple steps.
							</p>
						</div>

						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							{howList?.map((list) => (
								<a
									className="rounded-xl flex gap-4 items-center sm:items-start sm:flex-col border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
									href="#"
									key={list?.id}
								>
									<span className="w-fit h-fit rounded-lg bg-gray-800 p-3">
										<list.icon size={20} />
									</span>
									<div>
										<h2 className="mt-2 font-bold">
											{list.title}
										</h2>

										<p className="sm:mt-1 sm:block sm:text-sm text-gray-500">
											{list.desc}
										</p>
									</div>
								</a>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Hero3;
