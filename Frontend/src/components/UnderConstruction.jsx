import React from "react";

function UnderConstruction() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl my-10 font-semibold">This Page Is Under Construction!</h1>

        <img
          src="/logo.png"
          alt="Magnifying glass and graduation hat hovering over book"
          className="rounded-3xl"
         ></img>
      </div>
    </>
  );
}

export default UnderConstruction;
