import React from "react";
// Icons
import {
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaGithub,
	FaLinkedin,
} from "react-icons/fa";

function Footer() {
	const navLink = [
		{ id: 1, name: "Home", url: "#home" },
		{ id: 2, name: "Upload", url: "/uploads" },
		{ id: 3, name: "About", url: "#about" },
	];
	const socialLink = [
		{
			id: 1,
			name: "Facebook",
			url: "https://www.facebook.com/profile.php?id=100086537497823",
			icon: FaFacebook,
		},
		{ id: 2, name: "Instagram", url: "/", icon: FaInstagram },
		{
			id: 3,
			name: "Twitter",
			url: "https://twitter.com/AamjitY",
			icon: FaTwitter,
		},
		{
			id: 3,
			name: "Github",
			url: "https://github.com/Aamjit",
			icon: FaGithub,
		},
		{
			id: 4,
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/amarjit-yanglem/",
			icon: FaLinkedin,
		},
	];
	return (
		<footer className="bg-gray-900 mt-16">
			<div className=" border-t mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="flex justify-center text-teal-600">
					<img src="/logo.svg" alt="Dropify" width={100} />
				</div>

				<p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
					Dropify is developed using NextJS, ReactJS as client
					components, Clerk to provide user authentication and account
					handling, Resend to send notification as emails, Firebase as
					cloud storage for our uploaded files.
				</p>

				<ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
					{navLink.map((item) => (
						<li key={item?.id}>
							<a
								className="text-gray-700 transition hover:text-gray-700/75"
								href={item.url}
							>
								{" "}
								{item.name}{" "}
							</a>
						</li>
					))}
				</ul>

				<ul className="mt-12 flex justify-center gap-6 md:gap-8">
					{socialLink.map((item) => (
						<li key={item?.name}>
							<a
								href={item.url}
								rel="noreferrer"
								target="_blank"
								className="text-gray-700 transition hover:text-gray-700/75"
							>
								<span className="sr-only">{item.name}</span>
								<item.icon size={25} />
							</a>
						</li>
					))}
				</ul>

				<div className="mt-16 border-t border-gray-100 pt-8">
					<p className="text-center text-xs/relaxed text-gray-500">
						© Dropify 2024. All rights reserved.
						<br />
						Created with{" "}
						<a
							href="https://nextjs.org/"
							className="text-gray-700 underline transition hover:text-gray-700/75"
						>
							NextJS
						</a>
						.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
