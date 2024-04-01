"use client";
import React, { useEffect, useState } from "react";
import FileCards from "./_components/FileCards";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useUser } from "@clerk/nextjs";
import { app } from "../../../../FirebaseConfig";

function Files() {
  const db = getFirestore(app);
  const { user } = useUser();
  const [userLog, setUserLog] = useState(null);
  const [userData, setUserData] = useState();

  useEffect(() => {
    user && setUserData(user);
    !userLog && user && getUserLogs(user);
  }, [user]);

  const getUserLogs = async (user) => {
    const docSnap = await getDoc(doc(db, "User_Log", user?.id));
    if (docSnap.exists()) {
      const docData = docSnap.data();
      setUserLog(docData);
    }
  };

  return (
    <div>
      {/* {userData && getUserLogs()} */}
      {userLog && <FileCards userLog={userLog} />}
    </div>
  );
}

export default Files;
