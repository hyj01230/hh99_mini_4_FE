import { serverUrl } from '../../common/common';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getTokenFromCookie } from "../../auth/cookie";


function SupportComment() {


  // 업로드 제목/내용 state ---------------------------------------------------------------------------
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadContent, setUploadContent] = useState("");

  const uploadTitleHandler = (e) => { setUploadTitle(e.target.value) };
  const uploadContentHandler = (e) => { setUploadContent(e.target.value) };


  // 토큰가져오기 ---------------------------------------------------------------------------
  const token = getTokenFromCookie();

  // 응원댓글 가져오기 ---------------------------------------------------------------------------
  useEffect(() => {
    getComplement();
  }, []);


  // get으로 가져온 응원댓글 데이터 state에 저장 --------------------------------------
  const [complementData, setComplementData] = useState([]);

  // GET - 나의 오늘의 한마디 가져오기 ---------------------------------------------------------------
  const getComplement = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/complements`, {
        headers: { Authorization: `Bearer ${token}` } // 로그인 여부 확인(토큰을 헤더에 추가)
      });
      console.log('응원댓글 가져오기', response.data.data);
      setComplementData(response.data.data); // 가져온 데이터 set에 저장
    }
    catch (error) {
      alert(`${error}`);
      console.error(error);
    }
  }

  // DELETE - 기존 응원댓글 삭제 --------------------------------------------------------------
  const deleteComplement = async (complementId) => {

    try {
      const response = await axios.delete(`${serverUrl}/api/complement/${complementId}`, {
        headers: { Authorization: `Bearer ${token}` } // 로그인 여부 확인(토큰을 헤더에 추가)
      });
      console.log(response.data.data.msg);
      getComplement();
      alert(response.data.data.msg);
    }

    catch (error) {
      alert(`${error}`);
      console.error(error);
    }
  }

  const [editTitle, setEditTitle] = useState("");


  // put - 기존 응원댓글 수정 --------------------------------------------------------------
  // const putComplement = async (complementId) => {

  //   try {
  //     const response = await axios.put(`${serverUrl}/api/complement/${complementId}`, {
  //       title : ,
  //       content : null,
  //     }, {
  //       headers: { Authorization: `Bearer ${token}` } // 로그인 여부 확인(토큰을 헤더에 추가)
  //     });
  //     console.log(response.data.data.msg);
  //     getComplement();
  //     alert(response.data.data.msg);
  //   }

  //   catch (error) {
  //     alert(`${error}`);
  //     console.error(error);
  //   }
  // }


  return (
    <div className=' h-full w-[1000px]'>
      <p className='mt-[50px] ml-7 text-2xl font-black'>응원 댓글</p>

      {/* 맵으로 돌려서 뽑기!!! */}
      {complementData && complementData.map((item) => (
        <div key={item.complementId} className='bg-[#F9F5EB] rounded-md my-6 mx-7 p-7 shadow-lg'>
          <div className='flex flex-row pb-4'>
            <p className='text-lg font-bold'>내용</p>
            <input
              value={item.complementTitle}
              placeholder='제목'
              type="text"
              className='rounded-md mx-3 flex-grow h-8 px-2'
            />
          </div>
          <div className='flex justify-end'>
            <button
              type="button"
              onClick={() => deleteComplement(item.complementId)}
              className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-[#65451F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#564024] "
            >
              삭제
            </button>
            <button
              type="button"
              className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-[#65451F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#564024] "
            >
              저장
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SupportComment