"use client";
import React, { useEffect, useState } from "react";
import FileCards from "./_components/FileCards";
import EmptyData from "../../../_components/EmptyData";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useUser } from "@clerk/nextjs";
import { app } from "../../../../FirebaseConfig";
import Loading from "../../loading";

function Files() {
  const db = getFirestore(app);
  const { user } = useUser();
  const [userLog, setUserLog] = useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    !userLog && user && getUserLogs(user);
  }, [user]);

  useEffect(() => {
    window.addEventListener("load", handleLoading());
    return () => window.removeEventListener("load", handleLoading());
  }, []);

  const getUserLogs = async (user) => {
    const docSnap = await getDoc(doc(db, "User_Log", user?.id));
    if (docSnap?.exists()) {
      setUserLog(docSnap?.data());
    }
  };

  return !isLoading ? (
    <div>{userLog ? <FileCards userLog={userLog} /> : <EmptyData />}</div>
  ) : (
    <Loading />
  );
}

export default Files;
