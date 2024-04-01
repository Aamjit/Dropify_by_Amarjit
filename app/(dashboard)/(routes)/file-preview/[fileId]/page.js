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

function FilePreview({ params }) {
  const [file, setFile] = useState();
  const db = getFirestore(app);
  const User = useUser().user;

  useEffect(() => {
    getFIleInfo(params?.fileId);
  }, [!file]);

  const getFIleInfo = async (id) => {
    const docRef = doc(db, "Uploaded_Files", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setFile(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  return (
    <div className="py-4 px-10">
      <Link href="/uploads" className="flex my-4 gap-4 ">
        <ArrowLeftSquare /> Go Back
      </Link>
      <div className="flex gap-5 flex-col md:flex-row flex-grow">
        <FileInfo file={file} />
        <FileForm file={file} user={User} />
      </div>
    </div>
  );
}

export default FilePreview;
