import { faCommentDots, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/detail/Carousel";
import Chatting from "../components/detail/Chatting";
import ContentsBox from "../components/detail/ContentsBox";
import Info from "../components/detail/Info";
import Modal from "../components/detail/Modal";

function Detail2() {
  const [follow, setFollow] = useState(false);

  const toggleFollow = () => {
    setFollow(!follow);
  };

  const [chat, setChat] = useState(false);
  const toggleChat = () => {
    setChat(!chat);
  };
  console.log(chat);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="fixed top-0 w-full z-30">
        <Navbar />
      </div>
      <div className="flex bg-gray-100 text-gray-900">
        <aside className="fixed top-0 h-screen w-20 flex flex-col items-center border-r border-gray-200 bg-white pt-[50px]">
          <nav className="flex flex-1 flex-col gap-y-4 pt-10">
            <a
              href="#"
              className="group relative rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50 flex items-center justify-center w-10 h-10"
              onClick={toggleFollow}
            >
              {follow ? (
                <>
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FFC436" }} />
                  <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
                    <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                      <div className="absolute inset-0 -left-1 flex items-center">
                        <div className="h-2 w-2 rotate-45 bg-white"></div>
                      </div>
                      <p>
                        팔로우 <span className="text-gray-400">(Y)</span>
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faStar} style={{ color: "#C8C6C6" }} />
                  <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
                    <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                      <div className="absolute inset-0 -left-1 flex items-center">
                        <div className="h-2 w-2 rotate-45 bg-white"></div>
                      </div>
                      <p>
                        언팔로우 <span className="text-gray-400">(N)</span>
                      </p>
                    </div>
                  </div>
                </>
              )}
            </a>
            <a
              href="#"
              className="group relative rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50 flex items-center justify-center w-10 h-10"
              onClick={toggleChat}
            >
              <FontAwesomeIcon icon={faCommentDots} className="w-full h-full" />
              <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
                <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                  <div className="absolute inset-0 -left-1 flex items-center">
                    <div className="h-2 w-2 rotate-45 bg-white"></div>
                  </div>
                  채팅 <span className="text-gray-400">(Y)</span>
                </div>
              </div>
            </a>
          </nav>

          <div className="flex flex-col items-center gap-y-4 py-10">
            <button className="mt-2 rounded-full bg-gray-100">
              <img
                className="h-10 w-10 rounded-full"
                src="https://avatars.githubusercontent.com/u/35387401?v=4"
                alt="User Avatar"
              />
            </button>
          </div>
        </aside>
      </div>
      {chat && <Chatting style={{ zIndex: 100 }} />}
      <div className="max-w-[1200px] bg-slate-200 ml-auto mr-auto mt-20 text-black">
        <div className="p-6">
          <Info /> 
        </div>
        
        <div className="p-6">
          <p>활동모음</p>
          <Carousel />
        </div>

        <div className="p-6">
          <p>활동모음</p>
          <ContentsBox onOpenModal={openModal}/>
        </div>
        
      </div>
      {
          isModalOpen && <Modal onCloseModal={closeModal}/>
        }
    </div>
  );
}

export default Detail2;
