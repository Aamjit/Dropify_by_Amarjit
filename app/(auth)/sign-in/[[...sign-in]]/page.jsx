import Constant from "../../../_utils/Constant";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
	return (
		<section className="bg-gray-900 min-h-screen">
			<div className="lg:grid lg:min-h-screen lg:grid-cols-12">
				<aside className="hidden relative lg:block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
					<img
						alt="sign in"
						src="/sign-in.svg"
						className="absolute inset-0 h-full w-full object-contain bg-white"
					/>
				</aside>

				<main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
					<div className="max-w-xl lg:max-w-3xl text-pretty px-4">
						<span className="flex flex-col gap-4 my-2 justify-center">
							<h1 className="text-4xl font-bold text-white">
								Welcome
							</h1>
							<div className="flex gap-2 items-center text-2xl font-bold text-white sm:text-3xl md:text-4xl">
								<h1 className="text-2xl font-bold text-white">
									<strong className="text-emerald-500">
										Sign in
									</strong>{" "}
									to Dropify
								</h1>
								<a className="block text-blue-600" href="/">
									<img src="/logo.svg" alt="logo" />
								</a>
							</div>
						</span>
						<p className="mb-4 leading-relaxed text-gray-400">
							{Constant.signInBanner}
						</p>
						<div className="mt-8">
							<SignIn />
						</div>
					</div>
				</main>
			</div>
		</section>
	);
}
