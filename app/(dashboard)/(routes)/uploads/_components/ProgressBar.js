import React from "react";

function ProgressBar({ progress }) {
  return (
    <>
      <div className="border-gray-400 border-2 w-full mt-3 rounded-full">
        <div
          className="bg-primary rounded-full text-xs text-center text-white"
          style={{ width: `${progress}%` }}
        >
          {`${Number(progress).toFixed(1)}%`}
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
