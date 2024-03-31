import { app } from "../../../../../../FirebaseConfig";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { CopyCheck, CopyIcon } from "lucide-react";
import React, { useState } from "react";
import GlobalApi from "./../../../../../_utils/GlobalApi";

function FileForm({ file, user }) {
  const db = getFirestore(app);
  const [showPass, setShowPass] = useState();
  const [passCheck, setPassCheck] = useState();
  const [newPassword, setNewPassword] = useState();
  const [copied, setCopied] = useState(false);
  const [targetEmail, setTargetEmail] = useState();
  // const resend = new Resend(process.env.RESEND_API_KEY);

  const updatePassword = async () => {
    const passwordValid = checkPasswordValidity(newPassword);
    if (!passwordValid) {
      console.log("Password is not valid/strong.");
      return;
    }
    if (passCheck) {
      console.log("Password checked");
      const fileRef = doc(db, "Uploaded_Files", file.FileId);
      await updateDoc(fileRef, {
        IsPasswordProtected: passCheck,
        Password: newPassword,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      console.log("Password check is not done!");
    }
  };

  const checkPasswordValidity = (password) => {
    if (password.length < 8) {
      return false;
    } else {
      return true;
    }
  };

  const sendEmail = () => {
    const data = {
      targetEmail: targetEmail,
      userName: user.username,
      UserfullName: file.UserFullName,
      fileName: file.FileId,
      fileSize: (file.FileSize / 1024 / 1024).toFixed(2) + "MB",
      fileType: file.FileType,
      shortUrl: file.ShortUrl,
      senderImage: file.UserImageUrl,
      senderEmail: file.UserEmail,
    };
    GlobalApi.SendEmail(data).then((res) => console.log(res));
  };

  return (
    file && (
      <div className="border-gray-400 md:p-4 w-full">
        <form action="#" className="mt-8 grid grid-cols-6 gap-6 ">
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
                <CopyIcon
                  className="absolute text-gray-500 ml-2.5 cursor-pointer"
                  onClick={() => {
                    // alert("Copied");
                    navigator.clipboard.writeText(file?.ShortUrl);
                    setCopied(true);
                  }}
                />
              ) : (
                <CopyCheck className="absolute text-green-500 ml-2.5" />
              )}
            </div>
          </div>

          <div className="col-span-12">
            <div className="flex flex-row items-center justify-start">
              <input
                type="checkbox"
                id="passwordCheck"
                onChange={(value) => {
                  setPassCheck(value?.target.checked);
                  setShowPass(value?.target.checked);
                }}
              />
              <label
                htmlFor="Password"
                className="block text-sm ml-2 font-medium text-gray-700"
              >
                {" "}
                Enable Password?{" "}
              </label>
            </div>

            {showPass && (
              <div className="flex flex-row items-center">
                <input
                  type="password"
                  id="Password"
                  name="password"
                  placeholder="Password"
                  onChange={(event) => {
                    setNewPassword(event.target.value);
                  }}
                  className="p-2 mt-1 w-full rounded-md border-gray-400 bg-gray-50 text-sm text-gray-700 shadow-md"
                />
                <button
                  className="ml-2.5 bg-primary text-white px-4 py-1 rounded-md"
                  onClick={() => updatePassword()}
                >
                  {" "}
                  Save{" "}
                </button>
              </div>
            )}
          </div>

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
                onChange={(event) => setTargetEmail(event.target.value)}
                className="p-2 mt-1 w-full rounded-md border-gray-400 bg-gray-50 text-sm text-gray-700 shadow-md"
              />
            </div>

            <button
              className="w-full bg-primary text-white rounded-lg py-1.5 my-2.5"
              onClick={() => sendEmail()}
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
