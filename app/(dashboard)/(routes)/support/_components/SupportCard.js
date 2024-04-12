"use client";
import React, { useState } from "react";
import ErrorPage from "../../../../_components/ErrorPage";
import "../../../../globals.css";
//  Icons
import { MdEmail } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import { IoChatboxEllipses } from "react-icons/io5";

function SupportCard({ submitSupportForm }) {
	const [supportForm, setSupportForm] = useState({
		email: "",
		name: "",
		message: "",
	});

	return (
		// <div>
		<section className="flex flex-wrap lg:items-center flex-col-reverse lg:flex-row h-full">
			<div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
				<div className="mx-auto max-w-lg text-center">
					<h1 className="text-2xl font-bold sm:text-3xl">
						Need some support?
					</h1>

					<p className="mt-4 text-gray-500">
						Please send us your query and we will get back to you as
						soon as possible.
					</p>
				</div>

				<form
					action="#"
					className="mx-auto mb-0 mt-8 max-w-md space-y-4"
				>
					<div>
						<label htmlFor="email" className="sr-only">
							Email
						</label>

						<div className="relative">
							<input
								type="email"
								id="email"
								required
								className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-lg"
								placeholder="Enter email"
								onChange={(e) =>
									setSupportForm((prev) => ({
										...prev,
										email: e?.target.value,
									}))
								}
							/>

							<span className="absolute inset-y-0 end-0 grid place-content-center px-4">
								<MdEmail size={20} className="text-gray-400" />
							</span>
						</div>
					</div>

					<div>
						<label htmlFor="name" className="sr-only">
							Full Name
						</label>

						<div className="relative">
							<input
								type="text"
								id="name"
								required={true}
								className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-lg required:border-red-500"
								placeholder="Enter Full Name"
								onChange={(e) =>
									setSupportForm((prev) => ({
										...prev,
										name: e?.target.value,
									}))
								}
							/>

							<span className="absolute inset-y-0 end-0 grid place-content-center px-4">
								<BsPencilSquare
									size={20}
									className="text-gray-400"
								/>
							</span>
						</div>
					</div>

					<div>
						<label
							htmlFor="message"
							className=" text-gray-500 mx-4 my-2"
						>
							Message
						</label>

						<div className="relative">
							<span
								id="message"
								contentEditable="true"
								className="block text-wrap w-full max-w-md rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-lg h-fit badge alert-info"
								data-placeholder="Describe your issue..."
								data-focused-advice="Start typing"
								onInput={(e) =>
									setSupportForm((prev) => ({
										...prev,
										message: e?.target.textContent,
									}))
								}
							/>

							<span className="absolute inset-y-0 end-0 grid place-content-center px-4">
								<IoChatboxEllipses
									size={20}
									className="text-gray-400"
								/>
							</span>
						</div>
					</div>

					<div className="flex items-center justify-center md:justify-end">
						<button
							type="submit"
							// disabled
							className="inline-block rounded-lg bg-blue-500 px-8 py-3 text-sm font-medium text-white disabled:bg-gray-400"
							onClick={(e) => {
								e.preventDefault();
								submitSupportForm(supportForm);
							}}
						>
							Submit
						</button>
					</div>
				</form>
			</div>

			<div className="w-full h-full lg:w-1/2">
				<img
					alt=""
					src="./support.svg"
					className="mx-auto max-h-64 mt-10 lg:mt-0 lg:h-[calc(100vh-4.55rem)] lg:max-h-max object-cover object-center"
				/>
			</div>
		</section>
		// </div>
	);
}

export default SupportCard;
