import { app } from "@/FirebaseConfig";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { CopyIcon } from "lucide-react";
import React, { useState } from "react";

function FileForm({ file }) {
  const db = getFirestore(app);
  const [passCheck, setPassCheck] = useState();
  const [newPassword, setNewPassword] = useState();

  // const updatePasswordCheck = (check) => {
  //   file.IsPasswordProtected = check;
  // };

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

  return (
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
            <CopyIcon className="absolute text-gray-500 ml-2.5 cursor-pointer" />
          </div>
        </div>

        <div className="col-span-12">
          <div className="flex flex-row items-center justify-start">
            <input
              type="checkbox"
              id="passwordCheck"
              onChange={(value) => {
                setPassCheck(value?.target.checked);
                // updatePasswordCheck(value?.target.checked);
              }}
            />
            <label
              htmlFor="Password"
              className="block text-sm ml-2 font-medium text-gray-700"
            >
              {" "}
              Password{" "}
            </label>
          </div>

          <div className="flex flex-row items-center">
            <input
              type="password"
              id="Password"
              name="password"
              placeholder="Password!"
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
              className="p-2 mt-1 w-full rounded-md border-gray-400 bg-gray-50 text-sm text-gray-700 shadow-md"
            />
          </div>

          <button className="w-full bg-primary text-white rounded-lg py-1.5 my-2.5">
            {" "}
            Send Email{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FileForm;
