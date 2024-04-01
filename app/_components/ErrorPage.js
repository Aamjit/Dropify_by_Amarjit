import React from "react";

function ErrorPage() {
  return (
    <div className="mt-20 grid place-items-center bg-white px-4">
      <div className="text-center">
        <img src="./error.svg" className="h-auto" alt="Error Icon" />

        <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </h1>

        <p className="mt-4 text-gray-500">We are working on this feature.</p>
      </div>
    </div>
  );
}

export default ErrorPage;
