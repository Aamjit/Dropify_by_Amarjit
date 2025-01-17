import React from "react";
import Constant from "../_utils/Constant";

function Hero1() {
	return (
		<section>
			<div className="mx-auto mb-40 md:mb-16 max-w-screen-xl px-4 pt-28 lg:flex">
				<div className="mx-auto max-w-3xl text-center">
					<h1
						className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl
          				animate-slidein300 opacity-0"
					>
						Sharing Files Made Easy.
						<span className="sm:block">
							{" "}
							Dropify Is Here To Save The Day.{" "}
						</span>
					</h1>

					<p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed animate-slidein500 opacity-0">
						{Constant.bannerDesc}
					</p>

					<div className="mt-8 flex flex-wrap justify-center gap-4 animate-slidein700 opacity-0">
						<a
							className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
							href="/sign-up"
						>
							Get Started
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero1;
