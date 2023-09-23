import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getTokenFromCookie, setCookie } from "../../auth/cookie";
import { useNavigate } from 'react-router-dom';


function TodayComment_P() {
  const serverUrl = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();

  // 업로드 제목/내용 state ---------------------------------------------------
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadContent, setUploadContent] = useState("");

  const uploadTitleHandler = (e) => { setUploadTitle(e.target.value) };
  const uploadContentHandler = (e) => { setUploadContent(e.target.value) };
  // console.log(uploadContent)

  // 토큰가져오기
  const token = getTokenFromCookie();

  // 오늘의 한마디 가져오기
  useEffect(() => {
    TodayCommentgethandler();
  }, []);


  // POST - 오늘의 한마디 업로드 저장버튼 ---------------------------------------------
  const todayCommentSaveHandler = async (e) => {
    e.preventDefault();  // 리프레시 막아주기

    try {
      if (!token) {
        // 토큰이 없는 경우 처리
        alert('로그인이 필요합니다.');
        // 뒤로가기
        navigate(-1)
        return;
      }

      // 서버로 제목, 내용 보냄
      const response = await axios.post(`${serverUrl}/api/opinion`, {
        title: uploadTitle,
        content: uploadContent
      },
        {
          headers: { Authorization: `Bearer ${token}` } // 로그인 여부 확인(토큰을 헤더에 추가)
        });
      console.log('오늘의 한마디 업로드', response)

      alert('업로드 완료');
      setUploadTitle("");
      setUploadContent("");

    }
    catch (error) {
      alert(`${error}`);
      console.error(error);
    }
  }

  // get으로 가져온 데이터로 렌더링 해줄 state
  const [comments, setComments] = useState([]);

  // GET - 나의 오늘의 한마디 가져오기 ------------------------------------
  const TodayCommentgethandler = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/opinions`, {
        headers: { Authorization: `Bearer ${token}` } // 로그인 여부 확인(토큰을 헤더에 추가)
      });

      // 가져온 데이터 set에 저장
      setComments(response.data);
      console.log('오늘의 한마디 가져오기', response.data);
    }
    catch (error) {
      alert(`${error}`);
      console.error(error);
    }
  }


  // PUT - 나의 오늘의 한마디 수정하기 ----------------------
  const onClickTodayCommentPutBtn = async () => {
    try {
      const response = await axios.put(`${serverUrl}/api/opinion`, {
        title: uploadTitle,
        content: uploadContent
      }, {
        headers: { Authorization: `Bearer ${token}` } // 로그인 여부 확인(토큰을 헤더에 추가)
      });
      console.log('오늘의 한마디 수정하기', response.data);
    }
    catch (error) {
      alert(`${error}`);
      console.error(error);
    }
  }


  // Delete - 나의 오늘의 한마디 삭제하기 ----------------------
  const onClickTodayCommentDeleteBtn = async () => {
    try {
      const response = await axios.delete(`${serverUrl}/api/opinion/{opinionId}`, {
        headers: { Authorization: `Bearer ${token}` } // 로그인 여부 확인(토큰을 헤더에 추가)
      });
      console.log('오늘의 한마디 삭제하기', response.data);
    }
    catch (error) {
      alert(`${error}`);
      console.error(error);
    }
  }




  return (
    <div className=' h-full w-[1000px]'>
      <p className='mt-[50px] ml-7 text-2xl font-black '>
        오늘의 한마디 업로드</p>
      <form onSubmit={todayCommentSaveHandler}>
        <div className='bg-[#F9F5EB] my-6 mx-7 p-7 rounded-md shadow-lg'>
          <div className='flex flex-row pb-4'>
            <p className='text-lg font-bold'>제목</p>
            <input
              value={uploadTitle}
              onChange={uploadTitleHandler}
              placeholder='20자 내외'
              type="text"
              maxLength={20}
              className='rounded-md mx-3 flex-grow h-8 px-2' />
          </div>
          <div className='flex flex-row pb-4'>
            <p className='text-lg font-bold'>내용</p>
            <input
              value={uploadContent}
              onChange={uploadContentHandler}
              placeholder='40자 내외'
              type="text"
              maxLength={40}
              className='rounded-md mx-3 flex-grow h-20 p-2' />
          </div>
          <div className='flex justify-end'>
            <button
              type="submit"
              className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-[#65451F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#564024] ">
              저장</button>
          </div>
        </div>
      </form>

      <p className='mt-[50px] ml-7 text-2xl font-black'>
        오늘의 한마디 목록</p>




      {/* 맵으로 돌려서 뽑기!!! */}
      {comments.map((item)=>(
        <div className='bg-[#F9F5EB] my-6 mx-7 p-7 rounded-md shadow-lg'>
        <div key={item.opinionId} className='flex flex-row pb-4'>
          <p className='text-lg font-bold'>제목</p>
          <input value={item.opinionTitle} type="text" className='rounded-md mx-3 flex-grow h-8 px-2' />
        </div>
        <div key={item.opinionId} className='flex flex-row pb-4'>
          <p className='text-lg font-bold'>내용</p>
          <input value={item.opinionContent} type="text" className='rounded-md mx-3 flex-grow h-20 p-2' />
        </div>
        <div className='flex flex-col pb-4'>
          <p className='text-lg font-bold pb-4'>내 댓글 모아보기</p>
          <div className='bg-white overflow-y-auto max-h-[150px] pt-1 pb-2 px-4 rounded-md'>
            <div className='flex flex-row h-10 border-b py-6'>
              <p className='flex items-center w-full'>댓글~~~~~~~~~~~~~~</p>
              <div className='flex flex-row items-center'>
                <button
                  type="submit"
                  className="mr-3 flex items-center w-[80px] h-[20px] justify-center rounded-md bg-gray-200 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-300">
                  삭제</button>
                <button
                  type="submit"
                  className="mr-3 flex items-center w-[80px] h-[20px] justify-center rounded-md bg-gray-200 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-300">
                  수정</button>
              </div>
            </div>
            <div className='flex flex-row h-10 border-b py-6'>
              <p className='flex items-center w-full'>댓글~~~~~~~~~~~~~~</p>
              <div className='flex flex-row items-center'>
                <button
                  type="submit"
                  className="mr-3 flex items-center w-[80px] h-[20px] justify-center rounded-md bg-gray-200 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-300">
                  삭제</button>
                <button
                  type="submit"
                  className="mr-3 flex items-center w-[80px] h-[20px] justify-center rounded-md bg-gray-200 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-300">
                  수정</button>
              </div>
            </div>
            <div className='flex flex-row h-10 border-b py-6'>
              <p className='flex items-center w-full'>댓글~~~~~~~~~~~~~~</p>
              <div className='flex flex-row items-center'>
                <button
                  type="submit"
                  className="mr-3 flex items-center w-[80px] h-[20px] justify-center rounded-md bg-gray-200 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-300">
                  삭제</button>
                <button
                  type="submit"
                  className="mr-3 flex items-center w-[80px] h-[20px] justify-center rounded-md bg-gray-200 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-300">
                  수정</button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-end'>
          <button
            type='button'
            onClick={onClickTodayCommentDeleteBtn}
            className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-[#65451F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#564024]">
            삭제</button>
          <button
            type='button'
            onClick={onClickTodayCommentPutBtn}
            className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-[#65451F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#564024] ">
            수정</button>
        </div>
      </div>
      ))}
      



    </div>





  )
}

export default TodayComment_P