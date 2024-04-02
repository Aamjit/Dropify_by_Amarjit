import React from "react";

function EmptyData() {
  return (
    <div>
      <div className="flex h-screen flex-col bg-white">
        <img
          //   src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
          src="https://images.unsplash.com/photo-1581068466660-e6585b8afa97?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Empty"
          className="h-56 w-full object-cover"
        />

        <div className="flex flex-1 items-center justify-center">
          <div className="mx-auto max-w-xl px-4 py-8 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              We couldn't find any data🙁
            </h1>

            <p className="mt-4 text-gray-500">Return home to start sharing.</p>

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
