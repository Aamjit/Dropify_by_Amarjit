"use client";
import React, { useEffect, useState } from "react";
import UploadForm from "./_components/UploadForm";
import { app } from "../../../../FirebaseConfig";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { useUser } from "@clerk/nextjs";
import ShortUrl from "../../../_utils/ShortUrl";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Loading from "../../loading";

function Uploads() {
  const router = useRouter();
  const { user } = useUser();
  const storage = getStorage(app);
  const db = getFirestore(app);
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadCompleted, setUploadCompleted] = useState(false);
  const [fileId, setFileId] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", setIsLoading(false));
    return () => window.removeEventListener("load", setIsLoading(false));
  }, [isLoading]);

  const uploadFile = (file) => {
    setIsUploading(true);
    const metadata = {
      contentType: file.type,
    };

    const fileRef = ref(storage, "User_Files/" + file?.name);
    const uploadTask = uploadBytesResumable(fileRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        errorOccured(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          saveToStore(file, downloadURL);
        });
      }
    );
  };

  const saveToStore = async (file, fileUrl) => {
    const docId = Date.now().toString();
    const { shortUrl, urlId } = ShortUrl();

    const fileObj = {
      FileId: docId,
      FileName: file.name,
      FileType: file.type,
      FileSize: file.size,
      UserEmail: user.primaryEmailAddress.emailAddress,
      UserName: user.username,
      UserFullName: user.fullName,
      FileUrl: fileUrl,
      UserId: user.id,
      UserImageUrl: user.imageUrl,
      UserPhone: user.primaryPhoneNumber.phoneNumber,
      Password: "",
      IsPasswordProtected: false,
      ShortUrl: shortUrl,
      ShortUrlId: urlId,
    };

    setDoc(doc(db, "Uploaded_Files", docId), fileObj)
      .then((res) => {
        setUploadCompleted(true);
        setFileId(docId);
        addFileToUserLog(fileObj);
        toast.success("File uploaded successfully.", {
          position: "top-center",
          autoClose: 5000,
        });
      })
      .catch((err) => {
        errorOccured(err);
      });
  };

  const addFileToUserLog = async (fileObj) => {
    const userLogRef = doc(db, "User_Log", fileObj.UserId);
    const docSnap = await getDoc(userLogRef);

    const userLogObj = {
      FileId: fileObj.FileId,
      FileName: fileObj.FileName,
      FileUrl: fileObj.FileUrl,
      FileType: fileObj.FileType,
      FileSize: (fileObj.FileSize / 1024 / 1024).toFixed(2) + " MB", //
      UploadedDate: new Date().toDateString(),
      UploadedTime: new Date().getTime(),
    };

    if (docSnap.exists()) {
      const docData = docSnap.data();
      docData.log.push(userLogObj);

      await updateDoc(userLogRef, {
        log: docData.log,
      }).catch((err) => errorOccured(err));
    } else {
      fileObj &&
        setDoc(userLogRef, {
          log: [userLogObj],
        }).catch((err) => {
          errorOccured(err);
        });
    }
  };

  const errorOccured = (err) => {
    setUploadCompleted(false);
    setIsUploading(false);
    toast.error(err, {
      position: "top-center",
      autoClose: 5000,
    });
  };

  useEffect(() => {
    if (uploadCompleted) {
      setUploadCompleted(false);
      setIsUploading(false);
      router.push("/file-preview/" + fileId);
    }
  }, [uploadCompleted]);

  return isLoading ? (
    Loading("Loading")
  ) : (
    <div>
      {isUploading && (
        <div
          className="absolute text-center w-screen md:w-[calc(100%-16rem)] 
        h-[calc(100%-12%)] z-20 mx-auto text-xl text-white font-semibold
         bg-black bg-opacity-20"
        >
          <div className="relative animate-pulse top-40">
            {" "}
            <img src="/loading-ring.gif" width={80} alt="Loading" className=" mx-auto" />
            Uploading...
          </div>
        </div>
      )}
      <UploadForm
        uploadSelectedFile={(data) => uploadFile(data)}
        progress={progress}
      />
    </div>
  );
}

export default Uploads;
