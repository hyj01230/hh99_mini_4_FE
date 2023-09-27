import axios from "axios";
import React, { useEffect, useState } from "react";
import { getTokenFromCookie } from "../../auth/cookie";
import { serverUrl } from "../../common/common";
import MyActivity from "./MyActivity";
import MyInfomation from "./MyInfomation";
import MyReply from "./MyReply";
import MyTodayComment from "./MyTodayComment";
import profileImage from "../../img/기본프로필사진.png"

function MypageForm() {
  // 사이드바 state
  const [sideTabPage, setSideTabPage] = useState(<MyInfomation />);

  // 클릭했을때 컴퍼넌트 변경!
  const onClickMyInfoHandler = () => { setSideTabPage(<MyInfomation />) };
  const onClickMyReplyHandler = () => { setSideTabPage(<MyReply />) };
  const onClickActivityHandler = () => { setSideTabPage(<MyActivity />) };
  const onClickTodayCommentHandler = () => { setSideTabPage(<MyTodayComment />) };


  // 토큰가져오기
  const token = getTokenFromCookie();

  // 내정보 가져오기
  useEffect(() => {
    myInfoGetHandler();
  }, []);

  // get으로 가져온 활동모음 데이터 state에 저장하기 -------------------------------------------------------
  const [myInfoData, setMyInfoData] = useState({}); // 데이터'들' 들어올거니까 []
  console.log('myInfoData', myInfoData)

  // GET - 내정보 가져오기
  const myInfoGetHandler = async () => {
    try {
      const token = getTokenFromCookie();
      const response = await axios.get(`${serverUrl}/api/profile/modify`, {
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
            className="inline-block h-[200px] w-[200px] rounded-full mt-[60px] border border-gray-200"
            src={`${!myInfoData.imageUrl ? profileImage : myInfoData.imageUrl}`}
            alt=""
          />

          <button
            type="button"
            onClick={onClickMyInfoHandler}
            className="flex items-center w-[180px] h-[60px] bg-[#65451F] hover:bg-[#564024] mt-8 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm "
          >
            내 정보
          </button>
          <button
            type="button"
            onClick={onClickMyReplyHandler}
            className="flex items-center w-[180px] h-[60px] bg-[#65451F] hover:bg-[#564024] mt-8 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm "
          >
            내 댓글 관리
          </button>
          {myInfoData.role === "USER" ? (
            <div>
              <button
                type="button"
                onClick={onClickActivityHandler}
                className="flex items-center w-[180px] h-[60px] bg-[#65451F] hover:bg-[#564024] mt-8 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm "
              >
                활동모음
              </button>
              <button
                type="button"
                onClick={onClickTodayCommentHandler}
                className="flex items-center w-[180px] h-[60px] bg-[#65451F] hover:bg-[#564024] mt-8 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm "
              >
                오늘의 한마디
              </button>
            </div>
          ) : null}


        </div>
      </div>
      {sideTabPage}
    </div>
  );
}

export default MypageForm;
