"use client";
import { app } from "@/FirebaseConfig";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import FileInfo from "./_components/FileInfo";
import FileForm from "./_components/FileForm";
import Link from "next/link";
import { ArrowLeftSquare } from "lucide-react";

function FilePreview({ params }) {
  const [file, setFile] = useState();
  useEffect(() => {
    getFIleInfo(params.fileId);
  }, []);

  const db = getFirestore(app);

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
      <Link href="/uploads" className="flex my-2 ">
        <ArrowLeftSquare /> Go Back
      </Link>
      <div className="flex gap-5 flex-col md:flex-row flex-grow">
        <FileInfo file={file} />
        <FileForm file={file} />
      </div>
    </div>
  );
}

export default FilePreview;
