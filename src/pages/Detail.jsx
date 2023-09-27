import { faCommentDots, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getTokenFromCookie } from "../auth/cookie";
import { serverUrl } from "../common/common";
import Carousel from "../components/detail/Carousel";
import Chatting from "../components/detail/Chatting";
import ContentsBox from "../components/detail/ContentsBox";
import Info from "../components/detail/Info";

function Detail() {
  const token = getTokenFromCookie();
  const [chat, setChat] = useState(false);
  const { id } = useParams();

  const toggleChat = () => {
    setChat(!chat);
  };

  const followHandler = async () => {
    const data = { userId: id };
    try {
      const response = await axios.post(`${serverUrl}/api/user/follow`, data, {
        headers: {
          Authorization: `Bearer ${token}`, // Bearer 토큰 방식 사용
        },
      });
      console.log(response);
      getUserInfo();
    } catch (error) {
      console.error(error);
    }
  };
  const [userInfo, setUserInfo] = useState({
    followStat: false,
    selectedUserIntro: null,
    selectedUserNickname: "",
    selectedUserProfile: "",
  });

  // 프로필 사진 및 약력 조회
  const getUserInfo = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Bearer 토큰 방식 사용
        },
      });
      console.log(response);
      setUserInfo(response.data.data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="">
      <div className="fixed top-0 w-full z-30">{/* <Navbar /> */}</div>
      {/* 사이드바 */}
      <div className="flex bg-gray-200 text-gray-900">
        <aside className="fixed top-0 h-screen w-20 flex flex-col items-center border-r border-gray-200 bg-white pt-[50px]">
          <nav className="flex flex-1 flex-col gap-y-4 pt-10">
            <div
              className="group relative rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50 flex items-center justify-center w-10 h-10"
              onClick={() => {
                console.log("버튼 눌림");
                followHandler();
              }}
            >
              {userInfo.followStat ? (
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
            </div>
            <div
              className="group relative rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50 flex items-center justify-center w-10 h-10"
              onClick={toggleChat}
            >
              <FontAwesomeIcon
                icon={faCommentDots}
                className="w-full h-full"
                style={{ color: "#65451F" }}
              />
              <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
                <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                  <div className="absolute inset-0 -left-1 flex items-center">
                    <div className="h-2 w-2 rotate-45 bg-white"></div>
                  </div>
                  채팅 <span className="text-gray-400">(Y)</span>
                </div>
              </div>
            </div>
          </nav>
        </aside>
      </div>
      {chat && <Chatting style={{ zIndex: 100 }} id={id} />}
      <div className="max-w-[1200px] ml-auto mr-auto mt-20 text-black pl-20">
        <div className="p-6">
          <Info userInfo={userInfo} />
        </div>

        <div className="p-6">
          <p>활동모음</p>
          <Carousel />
        </div>

        <div className="p-6">
          <p>오늘의 한마디</p>
          <ContentsBox />
        </div>
      </div>
    </div>
  );
}

export default Detail;
