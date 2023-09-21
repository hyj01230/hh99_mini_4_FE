import React, { useRef, useState } from 'react'
import Mypage_Info from './Mypage_Info'
import Mypage_P_Content from './Mypage_P_Content'
import Mypage_C_Comment from './Mypage_C_Comment'
import Mypage_C_Follow from './Mypage_C_Follow'

// Mypage 틀 - 시민/정치인 별로 사이드바 버튼명, 페이지 구성 달라짐

function MypageForm() {

  // 사이드탭 state(초기값:<Mypage_Info />???)
  const [sideTab, setSideTab] = useState(<Mypage_Info />);

  // 클릭했을때 컴퍼넌트 변경!
  const onClickMyInfoHandler = () => { setSideTab(<Mypage_Info />) }
  // 유권자와 정치인 별로 다르게 state 변경(id)받기!
  const onClickMyCommentHandler = () => { setSideTab(1 === 1 ? <Mypage_C_Comment /> : <Mypage_P_Content title1={'주요활동 업로드'} title2={'주요활동 목록(최대 0개)'} />) }
  const onClickMyFollowHandler = () => { setSideTab(1 === 1 ? <Mypage_C_Follow /> : <Mypage_P_Content title3={'오늘의 한마디 업로드'} title4={'오늘의 한마디 목록(최대 0개)'} />) }

  // 파일업로드
  const fileInputRef = useRef(null);

  const handleUploadButtonClick = () => {
    // 파일 업로드 input 클릭
    fileInputRef.current.click();
  };

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      console.log(`선택된 파일 이름: ${selectedFile.name}`);
      console.log(`선택된 파일 크기: ${selectedFile.size} bytes`);
      // 파일 업로드 또는 처리 로직을 이곳에 추가
    }
  };





  return (
    <div className="w-full mx-auto bg-[#F9F5EB] flex justify-center">
      <div className="w-[300px] h-screen">
        <div className="flex flex-col justify-center items-center">
          <label className="block text-2xl mt-10 font-black leading-10 text-gray-900">
            마이페이지
          </label>
          <img
            className="inline-block h-[230px] w-[230px] rounded-full mt-5 border border-zinc-300"
            src="https://i.namu.wiki/i/HfPaXJ6qhoBdHtpSh_ivra2eGF8z04V9kmd93toYyzhxaQoKvBfXF6VZ5-zcTLRYFpcT8aS_IjhBtdntFeHP-eHdcWYJQHIUQxCB3fzTvokwitrLW9Y4P2jWWRc4P9mMjvkoZFJno3slsPX8cZMCvg.webp"
            alt=""
          />
          <button
            type="button"
            onClick={handleUploadButtonClick}
            className="rounded-md mt-5 bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            수정하기
          </button>

          <input
            type="file"
            // 
            ref={fileInputRef}
            // 화면에서 안보이게!
            style={{ display: 'none' }}
            onChange={handleFileUpload}
          />

          <button
            type="button"
            onClick={onClickMyInfoHandler}
            className="flex items-center w-[200px] h-[50px] mt-8 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            내 정보
          </button>
          <button
            type="button"
            onClick={onClickMyCommentHandler}
            className="flex items-center w-[200px] h-[50px] mt-8 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {1 === 1 ? '댓글관리' : '주요활동'}
          </button>
          <button
            type="button"
            onClick={onClickMyFollowHandler}
            className="flex items-center w-[200px] h-[50px] mt-8 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {1 === 1 ? '팔로우 관리' : '오늘의 한마디'}
          </button>
        </div>
      </div>

      {sideTab}

      {/* 시민 - 조건 걸어서 렌더링 할 예정 */}
      {/* <Mypage_Info /> */}
      {/* <Mypage_C_Comment /> */}
      {/* <Mypage_C_Follow /> */}

      {/* 정치인 - 조건 걸어서 렌더링 할 예정 */}
      {/* <Mypage_Info /> */}
      {/* <Mypage_P_Content /> */}



    </div>
  )
}

export default MypageForm