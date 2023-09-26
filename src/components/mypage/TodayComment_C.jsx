import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getTokenFromCookie } from "../../auth/cookie";
import { useNavigate } from 'react-router-dom';
import { serverUrl } from '../../common/common';

// 시민 - 댓글관리 양식

function TodayComment_C() {

  const navigate = useNavigate();

  // 제목/내용 state ---------------------------------------------------
  const [opinionReplyTitle, setOpinionReplyTitle] = useState("");
  const [opinionReplyContent, setOpinionReplyContent] = useState("");

  // 제목/내용 onchange ---------------------------------------------------
  const uploadTitleHandler = (e) => { setOpinionReplyTitle(e.target.value) };
  const uploadContentHandler = (e) => { setOpinionReplyContent(e.target.value) };
  // console.log('파일정보', image)
}

// 토큰가져오기
const token = getTokenFromCookie();

// 오늘의 한마디 가져오기
useEffect(() => {
  TodayCommentgethandler();
}, []);


  // get으로 가져온 한마디 댓글 데이터 state에 저장 --------------------------------------
  const [opinionReplyData, setOpinionReplyData] = useState([]);

  // GET - 한마디 댓글 가져오기 ------------------------------------
  const getOpinionReply = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/comments`, {
        headers: { Authorization: `Bearer ${token}` } // 로그인 여부 확인(토큰을 헤더에 추가)
      });
      console.log('오늘의 한마디 댓글 가져오기', response.data.data);
      setOpinionReplyData(response.data.data); // 가져온 데이터 set에 저장
    }
    catch (error) {
      alert(`${error}`);
      console.error(error);
    }
  }


return (
  <div className=' h-full w-[1000px]'>
    <p className='mt-[50px] ml-7 text-2xl font-black'>오늘의 한마디 댓글</p>

    {/* 맵으로 돌려서 뽑기!!! */}
    {opinionReplyData && opinionReplyData.map((item) => (
      <div key={item.id} className='bg-[#F9F5EB] rounded-md my-6 mx-7 p-7 shadow-lg' >
        <div className='flex flex-row pb-4'>
          <p className='text-lg font-bold'>제목</p>
          <input
            placeholder='제목'
            type="text"
            className='rounded-md mx-3 flex-grow h-8 px-2'
          />
        </div>
        <div className='flex flex-row pb-4'>
          <p className='text-lg font-bold'>내용</p>
          <input
            placeholder='내용'
            type="text"
            className='rounded-md mx-3 flex-grow h-20 p-2'
          />
        </div>
        <div className='flex justify-end'>
          <button
            type="submit"
            className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-[#65451F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#564024] "
          >
            삭제
          </button>
          <button
            type="submit"
            className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-[#65451F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#564024] "
          >
            수정
          </button>
          <button
            type="submit"
            className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-[#65451F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#564024] "
          >
            저장
          </button>
        </div>
      </div>
    ))}
  </div>
)

export default TodayComment_C