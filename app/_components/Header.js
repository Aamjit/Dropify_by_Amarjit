import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
	const navLink = [
		{ name: "Home", url: "#home" },
		{ name: "Upload", url: "/uploads" },
		{ name: "About", url: "#about" },
	];

	return (
		<div>
			<header id="home">
				<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
					<div
						className="flex h-16 items-center justify-between
                    border-b"
					>
						<Image
							src="./logo.svg"
							width={50}
							height={50}
							alt="logo"
						/>

						<div className="md:flex md:items-center md:gap-12">
							<nav
								aria-label="Global"
								className="hidden md:block"
							>
								<ul className="flex items-center gap-6 text-sm">
									{navLink?.map((elem) => (
										<li key={elem?.name}>
											<Link
												className="text-gray-200 transition hover:text-gray-500/75"
												href={elem.url}
												scroll={true}
											>
												{" "}
												{elem.name}{" "}
											</Link>
										</li>
									))}
								</ul>
							</nav>

							<div className="flex items-center gap-4">
								<div className="sm:flex sm:gap-4">
									<a
										className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow
                            transition hover:bg-blue-800"
										href="/sign-up" // Development
										// href="/uploads" // Production
									>
										Get Started
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Header;
