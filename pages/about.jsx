import React from "react";
import Tri from "../components/Tri";
const about = () => {
  return (
    <div className="grid grid-cols-3 h-[100vh] bg-black ">
      <div className="col-span-2 ">
        <Tri />
      </div>
      <div className=" h-full flex justify-center items-center border-2 border-white ">
        <h1  className="mt-[50%] relative w-max text-center border-2 border-white  text-4xl text-white font-bold   ">THE SQUAD 69</h1>
      </div>
    </div>
  );
};

export default about;
