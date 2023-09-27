import { serverUrl } from '../../common/common';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getTokenFromCookie } from "../../auth/cookie";


function MyReply() {


  // get으로 가져온 오늘의 한마디 댓글 데이터 state에 저장 --------------------------------------
  const [commentData, setCommentData] = useState([]);
  // console.log('commentData',commentData)

  // 한마디댓글/응원댓글 수정 state ---------------------------------------------------------------------------
  const [commentTitle, setCommentTitle] = useState("");
  const [complementTitle, setComplementTitle] = useState("");

  // console.log(commentTitle)

  const updateCommentTitle = (e, index) => {
    const updateCommentData = [...commentData];
    // commentData를 풀어서 새로 담고,
    updateCommentData[index].commentTitle = e.target.value;
    // 배열의 인덱스로 들어가서 해당 인덱스의 commentTitle을 입력값(e.target.value;)으로 바꿔준다
    setCommentData(updateCommentData);
    // 변경된 updateCommentData을 setCommentData에 넣어 commentData를 변경!
  };
  console.log('commentData', commentData)

  const updateComplementTitle = (e) => { setComplementTitle(e.target.value) };


  // 토큰가져오기 ---------------------------------------------------------------------------
  const token = getTokenFromCookie();

  // 응원 댓글 / 오늘의 한마디 댓글 가져오기 ---------------------------------------------------------------------------
  useEffect(() => {
    getComment()
    getComplement();
  }, []);


  // GET - 오늘의 한마디 댓글 가져오기 ---------------------------------------------------------------
  const getComment = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/comments`, {
        headers: { Authorization: `Bearer ${token}` } // 로그인 여부 확인(토큰을 헤더에 추가)
      });
      console.log('오늘의 한마디 댓글 가져오기', response.data.data);
      setCommentData(response.data.data); // 가져온 데이터 set에 저장
      console.log('response.data.data', response.data.data)
      // setCommentTitle(response.data.data)
    }
    catch (error) {
      alert(`${error}`);
      console.error(error);
    }
  }

  // DELETE - 기존 한마디 댓글 삭제 --------------------------------------------------------------
  const deleteComment = async (commentId) => {

    try {
      const response = await axios.delete(`${serverUrl}/api/comment/${commentId}`, {
        headers: { Authorization: `Bearer ${token}` } // 로그인 여부 확인(토큰을 헤더에 추가)
      });
      console.log(response.data.data.msg);
      getComment();
      alert(response.data.data.msg);
    }

    catch (error) {
      alert(`${error}`);
      console.error(error);
    }
  }
  // console.log('commentTitle', commentTitle)

  // put - 한마디 댓글 수정
  const putComment = async (commentId, index) => {
    const find_data = commentData.find((a) => a.commentId === commentId)
    const find_dataTitle = find_data.commentTitle
    console.log('find_data.commentTitle', find_data.commentTitle)

    try {
      const response = await axios.put(`${serverUrl}/api/comment/${commentId}`, {
        // commentData[index].commentTitle을 뽑아야 하는데......
        title: find_dataTitle,
        content: null,
      }, {
        headers: { Authorization: `Bearer ${token}` } // 로그인 여부 확인(토큰을 헤더에 추가)
      });

      console.log(response.data.data.msg);
      getComment();
      alert(response.data.data.msg);
    }

    catch (error) {
      alert(`${error}`);
      console.error(error);
    }
    console.log(commentData[index].commentTitle)
  }

  // get으로 가져온 응원댓글 데이터 state에 저장 --------------------------------------
  const [complementData, setComplementData] = useState([]);

  // GET - 응원댓글 가져오기 ---------------------------------------------------------------
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

  // put - 응원 댓글 수정
  const putComplement = async (complementId) => {

    try {
      const response = await axios.put(`${serverUrl}/api/complement/${complementId}`, {
        title: complementTitle,
        content: null,
      }, {
        headers: { Authorization: `Bearer ${token}` } // 로그인 여부 확인(토큰을 헤더에 추가)
      });

      console.log(response.data.data.msg);
      getComment();
      alert(response.data.data.msg);
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
      {commentData && commentData.map((item, index) => (
        <div key={item.commentId} className='bg-[#F9F5EB] rounded-md my-6 mx-7 p-7 shadow-lg'>
          <div className='flex flex-row pb-4'>
            <p className='text-lg font-bold'>내용</p>
            <input
              value={item.commentTitle}
              // value={commentTitle}
              // defaultValue={item.commentTitle}
              // 인덱스 정보가 온클릭으로 같이 넘어감
              onChange={(e) => updateCommentTitle(e, index)}
              type="text"
              className='rounded-md mx-3 flex-grow h-8 px-2'
            />
          </div>
          <div className='flex justify-end'>
            <button
              type="button"
              onClick={() => deleteComment(item.commentId)}
              className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-[#65451F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#564024] "
            >
              삭제
            </button>
            <button
              type="button"
              onClick={() => putComment(item.commentId)}
              className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-[#65451F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#564024] "
            >
              수정
            </button>
          </div>
        </div>
      ))}

      <p className='mt-[50px] ml-7 text-2xl font-black'>응원 댓글</p>

      {/* 맵으로 돌려서 뽑기!!! */}
      {complementData && complementData.map((item) => (
        <div key={item.complementId} className='bg-[#F9F5EB] rounded-md my-6 mx-7 p-7 shadow-lg'>
          <div className='flex flex-row pb-4'>
            <p className='text-lg font-bold'>내용</p>
            <input
              value={item.complementTitle}
              // value={complementTitle}
              // defaultValue={item.complementTitle}
              onChange={updateComplementTitle}
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
              onClick={() => putComplement(item.complementId)}
              className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-[#65451F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#564024] "
            >
              수정
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MyReply
