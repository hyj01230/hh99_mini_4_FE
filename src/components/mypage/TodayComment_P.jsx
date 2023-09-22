import axios from 'axios';
import React, { useState } from 'react'
import { getTokenFromCookie, setCookie } from "../../auth/cookie";
import { useNavigate } from 'react-router-dom';

// 정치인 - 주요활동, 오늘의 한마디 양식

function Activity() {
  const serverUrl = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();

  // 사진 업로드 ------------------------------------------------------
  function handleFileUpload(event) {
    const selectedFile = event.target.files[0]; // 선택된 파일 가져오기
    if (selectedFile) {
      // 파일 처리 로직을 이곳에 추가
      console.log(`선택된 파일 이름: ${selectedFile.name}`);
      console.log(`선택된 파일 크기: ${selectedFile.size} bytes`);
      // 여기에서 선택된 파일을 업로드하거나 처리할 수 있습니다.
    }
  }

  // 업로드 제목/내용 state ---------------------------------------------------
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadContent, setUploadContent] = useState("");

  const uploadTitleHandler = (e) => { setUploadTitle(e.target.value) };
  const uploadContentHandler = (e) => { setUploadContent(e.target.value) };
  // console.log(uploadContent)


  // POST - 오늘의 한마디 업로드 ---------------------------------------------
  const P_todayCommentSaveHandler = async (e) => {
    e.preventDefault();  // 리프레시 막아주기

    try {
      const token = getTokenFromCookie();

      if (!token) {
        // 토큰이 없는 경우 처리
        alert('로그인이 필요합니다.');
        // 뒤로가기
        navigate(-1)
        return;
      }

      // 서버로 제목, 내용 보냄(이미지 파일 추가 예정!!!)
      const response = await axios.post(`${serverUrl}/api/opinion`, {
        title: uploadTitle,
        content: uploadContent
      }, {
        headers: { Authorization: `Bearer ${token}` } // 토큰을 헤더에 추가
      });
      console.log(response)

      alert('업로드 완료');
      setUploadTitle("");
      setUploadContent("");

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
      <form onSubmit={P_todayCommentSaveHandler}>
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
            <p className='text-lg font-bold'>사진첨부(크기/용량🚨)</p>
            <input type="file" accept="image/*" onChange={handleFileUpload} className='rounded-md mx-3 flex-grow h-8 px-2' />
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
      <div className='bg-[#F9F5EB] my-6 mx-7 p-7 rounded-md shadow-lg'>
        <div className='flex flex-row pb-4'>
          <p className='text-lg font-bold'>제목</p>
          <input placeholder='제목1' type="text" className='rounded-md mx-3 flex-grow h-8 px-2' />
          <p className='text-lg font-bold'>사진첨부(크기/용량🚨)</p>
          <input type="file" accept="image/*" onChange={handleFileUpload} className='rounded-md mx-3 flex-grow h-8 px-2' />
        </div>
        <div className='flex flex-row pb-4'>
          <p className='text-lg font-bold'>내용</p>
          <input placeholder='내용1' type="text" className='rounded-md mx-3 flex-grow h-20 p-2' />
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
            type="submit"
            className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-[#65451F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#564024]">
            삭제</button>
          <button
            type="submit"
            className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-[#65451F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#564024] ">
            수정</button>
        </div>
      </div>

      <div className='bg-[#F9F5EB] my-6 mx-7 p-7 rounded-md shadow-lg'>
        <div className='flex flex-row pb-4'>
          <p className='text-lg font-bold'>제목</p>
          <input placeholder='제목1' type="text" className='rounded-md mx-3 flex-grow h-8 px-2' />
          <p className='text-lg font-bold'>사진첨부(크기/용량🚨)</p>
          <input type="file" accept="image/*" onChange={handleFileUpload} className='rounded-md mx-3 flex-grow h-8 px-2' />
        </div>
        <div className='flex flex-row pb-4'>
          <p className='text-lg font-bold'>내용</p>
          <input placeholder='내용1' type="text" className='rounded-md mx-3 flex-grow h-20 p-2' />
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
            type="submit"
            className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-[#65451F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#564024]">
            삭제</button>
          <button
            type="submit"
            className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-[#65451F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#564024] ">
            수정</button>
        </div>
      </div>

    </div>





  )
}

export default Activity