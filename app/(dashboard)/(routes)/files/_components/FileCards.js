import React from "react";

function FileCards({userLog}) {
  return (
    <div className=" m-2 p-2">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        <div className="h-40 rounded-lg bg-gray-200">
            {/* <h2>{userLog.log[0].FileName}</h2> */}
            { console.log(userLog) }
        </div>
        {/* <div className="h-32 rounded-lg bg-gray-200"></div>
        <div className="h-32 rounded-lg bg-gray-200"></div>
        <div className="h-32 rounded-lg bg-gray-200"></div> */}
      </div>
    </div>
  );
}

export default FileCards;
