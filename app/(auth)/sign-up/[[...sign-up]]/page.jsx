import { SignUp } from "@clerk/nextjs";
import Constant from "../../../_utils/Constant";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            // src={Constant.authPageImage}
            src="/sign-up.svg"
            className="absolute inset-0 h-full w-full object-contain"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <span className="flex gap-4 my-6 items-center">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Dropify
              </h1>
              <a className="block text-blue-600" href="/">
                <img src="/logo.svg" />
              </a>
            </span>
            <p className="my-4 leading-relaxed text-gray-500">
              {Constant.signUpBanner}
            </p>
            <SignUp />;
          </div>
        </main>
      </div>
    </section>
  );
}
