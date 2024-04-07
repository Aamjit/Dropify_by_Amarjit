import React from "react";

function Hero4() {
	return (
		<div>
			<section className="max-w-screen-xl mx-auto px-4 text-white mt-4 w-full overflow-hidden bg-gray-900 sm:grid sm:grid-cols-2 sm:items-center">
				<div className="p-8 md:p-12 lg:px-16 lg:py-24">
					<div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
						<h2 className="text-2xl font-bold md:text-3xl">
							What are you waiting for? <br />
							Start your journey with us.
							<p className="text-gray-400 text-xl">
								Let's get you started. ⭐
							</p>
						</h2>

						<p className="hidden text-gray-500 md:mt-4 md:block">
							Start joining the race to upscale your productivity
							and drop the need for poor ways of sorting things
							out.
						</p>

						<div className="mt-4 md:mt-8">
							<a
								href="/sign-up" // Development
								// href="/uploads" // Production
								className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-800 focus:outline-none focus:ring focus:ring-yellow-400"
							>
								Get Started Today
							</a>
						</div>
					</div>
				</div>

				<img
					alt=""
					src="/start-journey.svg"
					loading="lazy"
					className="object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
				/>
			</section>
		</div>
	);
}

export default Hero4;
