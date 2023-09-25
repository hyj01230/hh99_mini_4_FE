import React, { useRef, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Activity from './Activity'
import Follow from './Follow'
import MyInfomation from './MyInfomation';
import SupportComment from './SupportComment'
import TodayComment_C from './TodayComment_C'
import TodayComment_P from './TodayComment_P'
import { getTokenFromCookie } from "../../auth/cookie"
import axios from 'axios';
import { serverUrl } from '../../common/common';


function MypageForm() {

  // 사이드바 state
  const [sideTabPage, setSideTabPage] = useState(<MyInfomation />);

  // 클릭했을때 컴퍼넌트 변경!
  const onClickMyInfoHandler = () => { setSideTabPage(<MyInfomation />) }
  const onClickFollow_ActivityHandler = () => {
    if (myInfoData.length > 0) {
      const role = myInfoData[0].role;
      setSideTabPage(role === "voterUser" ? <Follow /> : <Activity />);
    }
  };
  const onClickTodayCommentHandler = () => {
    if (myInfoData.length > 0) {
      const role = myInfoData[0].role;
      setSideTabPage(role === "voterUser" ? <TodayComment_C /> : <TodayComment_P />);
    }
  };
  const onClickSupportCommentHandler = () => { setSideTabPage(<SupportComment />) }


  // 파일업로드-버튼(프로필 사진 수정) 연결하기 ---------------------------------------------------
  const fileInputRef = useRef(null);
  const handleUploadButtonClick = () => {
    // 파일 업로드 input 클릭
    fileInputRef.current.click();
  };


  // 업로드 프로필이미지 state ---------------------------------------------------
  const [uploadProFile, setUploadProFile] = useState(null);


  // 업로드 프로필이미지 onchange ---------------------------------------------------
  const uploadImageHandler = (e) => {
    const image = e.target.files[0]; // 선택된 파일 가져오기
    console.log(`선택된 파일 이름: ${image.name}`);
    console.log(`선택된 파일 크기: ${image.size} bytes`);

    setUploadProFile(image)
    console.log('파일정보', image)
  }


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
      const response = await axios.get(`${serverUrl}/api/profile/modify`, {
        headers: { Authorization: `Bearer ${token}` } // 로그인 여부 확인(토큰을 헤더에 추가)
      });
      setMyInfoData(response.data.data)
      console.log('내정보', response.data.data[0].role);
    }

    catch (error) {
      alert(`${error}`);
      console.error(error);
    }
  }


 


  return (
    <div className="w-full mx-auto flex justify-center">
      <div className="w-[300px] h-screen ">
        <div className="flex flex-col justify-center items-center fixed w-[300px]">
          <img
            className="inline-block h-[200px] w-[200px] rounded-full mt-[50px] border border-gray-200"
            src="https://i.namu.wiki/i/HfPaXJ6qhoBdHtpSh_ivra2eGF8z04V9kmd93toYyzhxaQoKvBfXF6VZ5-zcTLRYFpcT8aS_IjhBtdntFeHP-eHdcWYJQHIUQxCB3fzTvokwitrLW9Y4P2jWWRc4P9mMjvkoZFJno3slsPX8cZMCvg.webp"
            alt=""
          />
          <div className='w-[180px] flex flex-row justify-between'>
            <button
              type="button"
              onClick={handleUploadButtonClick}
              className="flex items-center w-[85px] h-[50px] text-[#65451F] bg-[#F9F5EB] hover:bg-[#F2EAD3] mt-8 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm "
            >
              사진 선택
            </button>

            <input
              type="file"
              ref={fileInputRef}
              // 화면에서 안보이게!
              style={{ display: 'none' }}
              onChange={uploadImageHandler}
            />

            <button
              type="button"
              className="flex items-center w-[85px] h-[50px] text-[#65451F] bg-[#F9F5EB] hover:bg-[#F2EAD3] mt-8 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm "
            >
              사진 저장
            </button>
          </div>

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
            {myInfoData.length > 0 && myInfoData[0].role === "voterUser" ? '팔로우 관리' : '활동모음'}
          </button>
          <button
            type="button"
            onClick={onClickTodayCommentHandler}
            className="flex items-center w-[180px] h-[50px] bg-[#65451F] hover:bg-[#564024] mt-8 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm "
          >
            {myInfoData.length > 0 && myInfoData[0].role === "voterUser" ? '오늘의 한마디 댓글' : '오늘의 한마디'}
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
  )
}

export default MypageForm