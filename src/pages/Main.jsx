import React from "react";
import NationalMember from "../components/NationalMember";
import Navbar from "../components/Navbar";

function Main() {
  return (
    <>
      <Navbar />
      <div className="pt-10">
        <NationalMember />
      </div>
      
    </>
  );
}

export default Main;
