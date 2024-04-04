import React, { useState } from "react";
import toast from "react-hot-toast";
// Icons
import { LuCopy, LuCopyCheck } from "react-icons/lu";

function FileForm({ file, updatePassword, sendEmail }) {
  const [showPass, setShowPass] = useState(false);
  const [newPassword, setNewPassword] = useState();
  const [copied, setCopied] = useState(false);
  const [targetEmail, setTargetEmail] = useState();

  return (
    file && (
      <div className="border-gray-400 md:p-4 w-full">
        <form className="mt-8 grid grid-cols-12 gap-6 ">
          <div className="col-span-12">
            <label
              htmlFor="ShortURL"
              className="block text-sm font-medium text-gray-700"
            >
              Short URL
            </label>

            <div className="flex flex-row justify-between items-center">
              <input
                type="text"
                id="ShortURL"
                name="first_name"
                disabled
                value={file?.ShortUrl}
                className="p-2 pl-10 m-1 w-full rounded-md bg-gray-100 border-gray-400 text-sm text-gray-700 shadow-md"
              />
              {!copied ? (
                <LuCopy
                  className="absolute text-gray-500 ml-2.5 cursor-pointer"
                  onClick={() => {
                    {
                      toast.success("Copied");
                    }
                    navigator.clipboard.writeText(file?.ShortUrl);
                    setCopied(true);
                  }}
                />
              ) : (
                <LuCopyCheck className="absolute text-green-500 ml-2.5" />
              )}
            </div>
          </div>

          {
            <div className="col-span-12">
              <div className="flex flex-row items-center justify-start">
                <input
                  type="checkbox"
                  id="passwordCheck"
                  onChange={(value) => {
                    setShowPass(value?.target.checked);
                  }}
                />
                {!file?.IsPasswordProtected ? (
                  <label
                    htmlFor="Password"
                    className="block text-sm ml-2 font-medium text-gray-700"
                  >
                    {" "}
                    Enable Password?{" "}
                  </label>
                ) : (
                  <label
                    htmlFor="Password"
                    className="block text-sm ml-2 font-medium text-gray-700"
                  >
                    {" "}
                    Update Password?{" "}
                  </label>
                )}
              </div>

              {showPass && (
                <div className="flex flex-row items-center">
                  <input
                    type="password"
                    id="Password"
                    name="password"
                    placeholder="Password"
                    onChange={(event) => {
                      setNewPassword(event?.target.value);
                    }}
                    className="p-2 mt-1 w-full rounded-md border-gray-400 bg-gray-50 text-sm text-gray-700 shadow-md"
                  />
                  <button
                    className="ml-2.5 bg-primary text-white px-4 py-1 rounded-md"
                    onClick={(e) => {
                      e.preventDefault();
                      newPassword && updatePassword(newPassword);
                    }}
                  >
                    {" "}
                    Save{" "}
                  </button>
                </div>
              )}
            </div>
          }

          <div className="col-span-12 border border-gray-200 rounded-md p-4">
            <div className="flex flex-row items-center justify-start">
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-gray-700"
              >
                {" "}
                Send to Email{" "}
              </label>
            </div>

            <div className="flex flex-row items-center">
              <input
                type="text"
                id="Email"
                name="Email"
                placeholder="john.doe@mail.com"
                autoComplete="email"
                onChange={(event) => setTargetEmail(event.target.value)}
                className="p-2 mt-1 w-full rounded-md border-gray-400 bg-gray-50 text-sm text-gray-700 shadow-md"
              />
            </div>

            <button
              className="w-full bg-primary text-white rounded-lg py-1.5 my-2.5"
              onClick={(e) => {
                e.preventDefault();
                sendEmail(targetEmail);
              }}
            >
              {" "}
              Send Email{" "}
            </button>
          </div>
        </form>
      </div>
    )
  );
}

export default FileForm;
