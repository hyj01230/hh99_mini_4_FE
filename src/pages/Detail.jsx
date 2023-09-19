import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/detail/Carousel";
import Chatting from "../components/detail/Chatting";
import ContentsBox from "../components/detail/ContentsBox";
import Modal from "../components/detail/Modal";

function Detail() {
  const [follow, setFollow] = useState(true);

  const toggleFollow = () => {
    setFollow(!follow);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      {/* 사진 + 약력 */}
      <div className="pl-20 pr-20">
        <div className="flex justify-center mt-10 items-center flex-grow mb-5">
          <div className="w-40 relative">
            <img
              src="https://place-hold.it/150x150"
              alt=""
              className="w-full h-auto"
            />
            <div
              className="absolute bottom-[-20px] p-1 left-1/2 transform -translate-x-1/2 bg-black rounded-full"
              onClick={toggleFollow}
            >
              {follow ? (
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffc436", fontSize: "1.5em" }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "white", fontSize: "1.5em" }}
                />
              )}
            </div>
          </div>

          <div className="w-full p-5 pl-20">
            약력이 작성될 곳이에요 <br />
            약력이 작성될 곳이에요 <br />
            약력이 작성될 곳이에요 <br />
            약력이 작성될 곳이에요 <br />
            약력이 작성될 곳이에요 <br />
            약력이 작성될 곳이에요 <br />
            약력이 작성될 곳이에요 <br />
          </div>
        </div>

        <div className="bg-slate-200 pt-5 pb-5 pl-10 pr-10 w-[65%]">
          <p className="font-semibold text-[20px]">활동모음</p>
          <Carousel />
          <p className="font-semibold text-[20px]">게시글</p>
          <ContentsBox onOpenModal={openModal}/>
        </div>

        <div className="fixed bottom-10 right-[2%] bg-slate-100 w-[30%] h-[85%]">
          <Chatting />
        </div>
        {
          isModalOpen && <Modal onCloseModal={closeModal}/>
        }
        
      </div>
    </>
  );
}

export default Detail;
