import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getTokenFromCookie, setCookie } from "../../auth/cookie";
import { useNavigate } from 'react-router-dom';



function Activity() {
  const serverUrl = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();

  // 업로드 제목/내용/URL/이미지 state ---------------------------------------------------
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadContent, setUploadContent] = useState("");
  const [uploadUrl, setUploadUrl] = useState("");
  const [uploadImage, setUploadImage] = useState(null);

  const uploadTitleHandler = (e) => { setUploadTitle(e.target.value) };
  const uploadContentHandler = (e) => { setUploadContent(e.target.value) };
  const urlHandler = (e) => { setUploadUrl(e.target.value) };
  const imageHandler = (e) => {
    const image = e.target.files[0]; // 선택된 파일 가져오기
    console.log(`선택된 파일 이름: ${image.name}`);
    console.log(`선택된 파일 크기: ${image.size} bytes`);

    setUploadImage(image)
    // console.log('파일정보', image)
  }
  // console.log(uploadContent)

  // 토큰가져오기 ---------------------------------------------
  const token = getTokenFromCookie();

  // 활동모음 가져오기 ---------------------------------------------
  useEffect(() => {
    showActivity();
  }, []);


  // POST - 활동모음 업로드 저장버튼 ---------------------------------------------
  const activitySaveHandler = async (e) => {
    e.preventDefault();  // 리프레시 막아주기

    try {
      // 토큰이 없는 경우 처리
      if (!token) {
        alert('로그인이 필요합니다.');
        navigate(-1) // 뒤로가기
        return;
      }

      // 사진 업로드는 폼데이터로!!!!!!!!!
      const formData = new FormData();
      // formData.append('title', uploadTitle);
      // formData.append('content', uploadContent);
      // formData.append('url', uploadUrl);
      // formData.append('image', uploadImage);

      formData.append('data', {
        'title': uploadTitle,
        'content': uploadContent,
        'url': uploadUrl,
      });
      formData.append('image', uploadImage);

      console.log('폼데이터 확인', uploadImage);

      // formData.append('data', {title: '', ...};
      // formData.append('image', uploadImage);

      // 서버로 폼데이터 보냄
      const response = await axios.post(`${serverUrl}/api/campaign`, formData, {
      }, {
        headers: {
          Authorization: `Bearer ${token}`, // 로그인 여부 확인(토큰을 헤더에 추가)
          'Content-Type': 'multipart/form-data', // 필수: FormData를 보낼 때 content type 설정
        },
      });
      console.log('활동모음 업로드', response)

      alert('업로드 완료');
      setUploadTitle("");
      setUploadContent("");
      setUploadUrl("");
      setUploadImage(null);
    }
    catch (error) {
      alert(`${error}`);
      console.error(error);
    }
  }

  // GET - 활동모음 가져오기 ------------------------------------
  const showActivity = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/campaigns`, {
        headers: { Authorization: `Bearer ${token}` } // 로그인 여부 확인(토큰을 헤더에 추가)
      });
      console.log('활동모음 가져오기', response.data);
    }
    catch (error) {
      alert(`${error}`);
      console.error(error);
    }
  }



  return (
    <div className=' h-full w-[1000px]'>
      <p className='mt-[50px] ml-7 text-2xl font-black '>
        활동모음 업로드</p>
      <form onSubmit={activitySaveHandler} className='bg-[#F9F5EB] my-6 mx-7 p-7 rounded-md shadow-lg'>
        <div className='flex flex-row pb-4'>
          <p className='text-lg font-bold'>제목</p>
          <input
            value={uploadTitle}
            onChange={uploadTitleHandler}
            placeholder='10자 내외'
            type="text"
            maxLength={10}
            className='rounded-md mx-3 flex-grow h-8 px-2' />
          <p className='text-lg font-bold'>사진첨부(크기/용량🚨)</p>
          {/* 이미지 업로드 */}
          <input type="file" accept="image/*" onChange={imageHandler} className='rounded-md mx-3 flex-grow h-8 px-2' />
        </div>
        <div className='flex flex-row pb-4'>
          <p className='text-lg font-bold'>URL</p>
          <input
            value={uploadUrl}
            onChange={urlHandler}
            placeholder='url을 입력해주세요'
            type="text"
            className='rounded-md mx-3 flex-grow h-8 px-2' />
        </div>
        <div className='flex flex-row pb-4'>
          <p className='text-lg font-bold'>내용</p>
          <input
            value={uploadContent}
            onChange={uploadContentHandler}
            placeholder='30자 내외'
            type="text"
            maxLength={30}
            className='rounded-md mx-3 flex-grow h-20 p-2' />
        </div>
        <div className='flex justify-end'>
          <button
            type="submit"
            className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-[#65451F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#564024] ">
            저장</button>
        </div>
      </form>

      <p className='mt-[50px] ml-7 text-2xl font-black'>
        활동모음 업로드 목록</p>

      {/* 맵으로 돌려서 뽑기!!! */}
      <div className='bg-[#F9F5EB] my-6 mx-7 p-7 rounded-md shadow-lg'>
        <div className='flex flex-row pb-4'>
          <p className='text-lg font-bold'>제목</p>
          <input placeholder='제목1' type="text" className='rounded-md mx-3 flex-grow h-8 px-2' />
          <p className='text-lg font-bold'>사진첨부(크기/용량🚨)</p>
          <input type="file" accept="image/*" className='rounded-md mx-3 flex-grow h-8 px-2' />
        </div>
        <div className='flex flex-row pb-4'>
          <p className='text-lg font-bold'>URL</p>
          <input
            placeholder='url을 입력해주세요'
            type="text"
            className='rounded-md mx-3 flex-grow h-8 px-2' />
        </div>
        <div className='flex flex-row pb-4'>
          <p className='text-lg font-bold'>내용</p>
          <input placeholder='내용1' type="text" className='rounded-md mx-3 flex-grow h-20 p-2' />
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