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
import UploadSuccess from "./_components/UploadSuccess";
import { useUser } from "@clerk/nextjs";
import ShortUrl from "../../../_utils/ShortUrl";
import { useRouter } from "next/navigation";
import turl from "turl";
import toast from "react-hot-toast";
import Loading from "../../loading"

function Uploads() {
  const router = useRouter();
  const { user } = useUser();
  const storage = getStorage(app);
  const db = getFirestore(app);
  const [progress, setProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [uploadCompleted, setUploadCompleted] = useState(false);
  const [fileId, setFileId] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", setIsLoading(false));
    return () => window.removeEventListener("load", setIsLoading(false));
  }, [isLoading]);

  const uploadFile = (file) => {
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
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        console.log(error);
      },
      () => {
        // setShowSuccess(true);
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          saveToStore(file, downloadURL);
        });
      }
    );
  };

  const saveToStore = async (file, fileUrl) => {
    const docId = Date.now().toString();
    const turlRef = turl;
    // const shortUrl = "http://" + window.location.host + "/s/" + ShortUrl();
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
          position: "top-right",
          autoClose: 5000,
        });
      })
      .catch((err) => {
        console.log(err);
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
      console.log(docData);

      await updateDoc(userLogRef, {
        log: docData.log,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      fileObj &&
        setDoc(userLogRef, {
          log: [userLogObj],
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
    }
  };

  useEffect(() => {
    uploadCompleted &&
      fileId &&
      setTimeout(() => {
        setUploadCompleted(false);
        setShowSuccess(false);
        router.push("/file-preview/" + fileId);
      }, 3000);
  }, [uploadCompleted == true]);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <div
        className="fixed"
        style={{ display: `${showSuccess == true ? "" : "none"}` }}
      >
        {/* {showSuccess == true ? (
          // <UploadSuccess msg={"Uploaded succcessfully!"} />
          
        ) : null} */}
        {/* <UploadSuccess msg={"Uploaded succcessfully!"} /> */}
        {/* {setTimeout(() => {
          setShowSuccess(false);
        }, 3000)} */}
      </div>
      <UploadForm
        uploadSelectedFile={(data) => uploadFile(data)}
        progress={progress}
      />
    </div>
  );
}

export default Uploads;
