import React from "react";
// Icons
import { FaShareAlt } from "react-icons/fa";
import { PiLightningFill, PiDevicesDuotone } from "react-icons/pi";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";

function Hero2() {
	const specialList = [
		{
			key: 1,
			icon: FaShareAlt,
			title: "Effortless Sharing.",
			desc: `Say goodbye to cumbersome file-sharing methods. With Dropify,
  sharing files is as simple as drag-and-drop.`,
		},
		{
			key: 2,
			icon: PiLightningFill,
			title: "Lightning-Fast Speed.",
			desc: `We understand the importance of time. Dropify ensures your files reach their destination in the blink of an eye, so you can focus on what matters.`,
		},
		{
			key: 3,
			icon: RiGitRepositoryPrivateFill,
			title: "Secure and Private.",
			desc: `Your privacy is our top priority. With end-to-end encryption and robust security measures, rest assured that your files are in safe hands.`,
		},
		{
			key: 4,
			icon: PiDevicesDuotone,
			title: "Cross-Platform Compatibility.",
			desc: `Whether you're on your desktop, tablet, or smartphone, Dropify works seamlessly across all devices and platforms.`,
		},
	];
	return (
		<div>
			<section className="bg-gray-900 text-white mt-4 w-full" id="about">
				<div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
					<div className="max-w-2xl mx-auto text-center">
						<h2 className="text-3xl font-bold sm:text-4xl">
							What is Dropify?
						</h2>

						<p className="mt-4 text-gray-500 text-pretty">
							Dropify is not just another file-sharing platform;
							it's your go-to destination for hassle-free, secure,
							and lightning-fast file transfers. Whether you're a
							student sharing assignments, a professional
							collaborating on projects, or just someone who needs
							to send large files quickly, Dropify has got you
							covered.
						</p>
						<div className="max-w-xl border-t mt-8 mx-auto text-center p-8">
							<h2 className="text-3xl font-bold sm:text-4xl">
								What makes us special
							</h2>
						</div>
					</div>

					<div className="mt-4 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
						{specialList?.map((list) => (
							<div
								className="flex flex-col items-start gap-4"
								key={list?.id}
							>
								<div className="w-full text-wrap flex gap-4 items-center">
									<span className="shrink-0 rounded-lg bg-gray-800 p-4">
										<list.icon size={20} />
									</span>
									<h2 className="text-lg font-bold">
										{list.title}
									</h2>
								</div>

								<div>
									<p className="mt-1 text-sm text-gray-300 text-pretty">
										{list.desc}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Hero2;
