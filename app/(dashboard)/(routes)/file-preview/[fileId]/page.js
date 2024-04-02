"use client";
// import { app } from "@/FirebaseConfig";
import { app } from "../../../../../FirebaseConfig";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import FileInfo from "./_components/FileInfo";
import FileForm from "./_components/FileForm";
import Link from "next/link";
import { ArrowLeftSquare } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import Loading from "../../../loading";
import EmptyData from "../../../../_components/EmptyData";

function FilePreview({ params }) {
  const [file, setFile] = useState(null);
  const db = getFirestore(app);
  const User = useUser().user;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", setIsLoading(false));
    return () => window.removeEventListener("load", setIsLoading(false));
  }, []);

  useEffect(() => {
    getFIleInfo(params?.fileId);
  }, [!file]);

  const getFIleInfo = async (id) => {
    const docRef = doc(db, "Uploaded_Files", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setFile(docSnap.data());
      console.log(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  return isLoading ? (
    <Loading />
  ) : file ? (
    <div className="py-4 px-10">
      <Link href="/uploads" className="flex my-4 gap-4 ">
        <ArrowLeftSquare /> Go Back
      </Link>
      <div className="flex gap-5 flex-col md:flex-row flex-grow">
        <FileInfo file={file} />
        <FileForm file={file} user={User} />
      </div>
    </div>
  ) : (
    <EmptyData />
  );
}

export default FilePreview;
