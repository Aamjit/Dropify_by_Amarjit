import React from "react";

function AboutIntro() {
  return (
    <div className="flex gap-4 flex-col px-6 md:px-12 text-balance">
      <div className="text-center text-transparent font-bold text-2xl animate-pulse bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text ">
        Welcome to Dropify, where sharing files seamlessly is just a click away.
      </div>
      <p className="font-light text-pretty">
        Dropify is not just another file-sharing platform; it's your go-to
        destination for hassle-free, secure, and lightning-fast file transfers.
        Whether you're a student sharing assignments, a professional
        collaborating on projects, or just someone who needs to send large files
        quickly, Dropify has got you covered.
      </p>
    </div>
  );
}

export default AboutIntro;
