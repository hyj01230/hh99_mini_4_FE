import axios from "axios";
import React, { useEffect, useState } from "react";
import { getTokenFromCookie } from "../../auth/cookie";
import { serverUrl } from "../../common/common";
import Activity from "./Activity";
import Follow from "./Follow";
import MyInfomation from "./MyInfomation";
import SupportComment from "./SupportComment";
import TodayComment_C from "./TodayComment_C";
import TodayComment_P from "./TodayComment_P";
import profileImage from "../../img/기본프로필사진.png"

function MypageForm() {
  // 사이드바 state
  const [sideTabPage, setSideTabPage] = useState(<MyInfomation />);

  // 클릭했을때 컴퍼넌트 변경!
  const onClickMyInfoHandler = () => {
    setSideTabPage(<MyInfomation />);
  };
  const onClickFollow_ActivityHandler = () => {
    if (myInfoData.length > 0) {
      const role = myInfoData[0].role;
      setSideTabPage(role === "voterUser" ? <Follow /> : <Activity />);
    }
  };
  const onClickTodayCommentHandler = () => {
    if (myInfoData.length > 0) {
      const role = myInfoData[0].role;
      setSideTabPage(
        role === "voterUser" ? <TodayComment_C /> : <TodayComment_P />
      );
    }
  };
  const onClickSupportCommentHandler = () => {
    setSideTabPage(<SupportComment />);
  };

  // 토큰가져오기
  const token = getTokenFromCookie();

  // 내정보 가져오기
  useEffect(() => {
    myInfoGetHandler();
  }, []);

  // get으로 가져온 활동모음 데이터 state에 저장하기 -------------------------------------------------------
  const [myInfoData, setMyInfoData] = useState([]); // 데이터'들' 들어올거니까 []

  // GET - 내정보 가져오기
  const myInfoGetHandler = async () => {
    try {
      const token = getTokenFromCookie();
      const response = await axios.get(`${serverUrl}/api/user/userInfo`, {
        headers: {
          Authorization: `Bearer ${token}`, // Bearer 토큰 방식 사용
        },
      });

      setMyInfoData(response.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full mx-auto flex justify-center">
      <div className="w-[300px] h-screen ">
        <div className="flex flex-col justify-center items-center fixed w-[300px]">
          <img
            className="inline-block h-[200px] w-[200px] rounded-full mt-[50px] border border-gray-200"
            src={`${!myInfoData.imageUrl ? profileImage : myInfoData.imageUrl}`}
            alt=""
          />

          <button
            type="button"
            onClick={onClickMyInfoHandler}
            className="flex items-center w-[180px] h-[50px] bg-[#65451F] hover:bg-[#564024] mt-8 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm "
          >
            내 정보
          </button>
          <button
            type="button"
            onClick={onClickFollow_ActivityHandler}
            className="flex items-center w-[180px] h-[50px] bg-[#65451F] hover:bg-[#564024] mt-8 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm "
          >
            {myInfoData.length > 0 && myInfoData[0].role === "voterUser"
              ? "팔로우 관리"
              : "활동모음"}
          </button>
          <button
            type="button"
            onClick={onClickTodayCommentHandler}
            className="flex items-center w-[180px] h-[50px] bg-[#65451F] hover:bg-[#564024] mt-8 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm "
          >
            {myInfoData.length > 0 && myInfoData[0].role === "voterUser"
              ? "오늘의 한마디 댓글"
              : "오늘의 한마디"}
          </button>
          <button
            type="button"
            onClick={onClickSupportCommentHandler}
            className="flex items-center w-[180px] h-[50px] bg-[#65451F] hover:bg-[#564024] mt-8 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm "
          >
            응원 댓글
          </button>
        </div>
      </div>
      {sideTabPage}
    </div>
  );
}

export default MypageForm;
