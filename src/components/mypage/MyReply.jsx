import axios from "axios";
import React, { useEffect, useState } from "react";
import { getTokenFromCookie } from "../../auth/cookie";
import { serverUrl } from "../../common/common";

function MyReply() {
  // 토큰가져오기 ---------------------------------------------------------------------------
  const token = getTokenFromCookie();

  // 페이지 렌더링 되면!! get  가져오기(오늘의 한마디 댓글 / 응원 댓글) ---------------------------------------------------------------------------
  useEffect(() => {
    getComment();
    getComplement();
  }, []);

  // ★★★★★ 오늘의 한마디 ★★★★★

  // get으로 가져온 오늘의 한마디 댓글 데이터 state에 저장 --------------------------------------
  const [commentData, setCommentData] = useState([]);
  console.log("commentData", commentData);

  // GET - 오늘의 한마디 댓글 가져오기 ---------------------------------------------------------------
  const getComment = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/comments`, {
        headers: { Authorization: `Bearer ${token}` }, // 로그인 여부 확인(토큰을 헤더에 추가)
      });
      // console.log("오늘의 한마디 댓글 가져오기", response.data.data);
      setCommentData(response.data.data); // 가져온 데이터 set에 저장
    } catch (error) {
      alert(`${error}`);
      console.error(error);
    }
  };

  // DELETE - 오늘의 한마디 댓글 삭제 --------------------------------------------------------------
  const deleteComment = async (commentId) => {
    try {
      const response = await axios.delete(
        `${serverUrl}/api/comment/${commentId}`,
        {
          headers: { Authorization: `Bearer ${token}` }, // 로그인 여부 확인(토큰을 헤더에 추가)
        }
      );
      console.log(response.data.data.msg);
      getComment();
      alert(response.data.data.msg);
    } catch (error) {
      alert(`${error}`);
      console.error(error);
    }
  };
  // console.log('commentTitle', commentTitle)

  // put - 한마디 댓글 수정
  const onClickPutComment = async (commentId, newTitle) => {
    try {
      const response = await axios.put(
        `${serverUrl}/api/comment/${commentId}`,
        {
          title: newTitle,
          content: newTitle,
        },
        {
          headers: { Authorization: `Bearer ${token}` }, // 로그인 여부 확인(토큰을 헤더에 추가)
        }
      );
      console.log("한마디 댓글 수정", response.data.data);
      alert("수정되었습니다.");
    } catch (error) {
      alert(`${error}`);
      console.error(error);
    }
  };

  // ★★★★★ 응원댓글 ★★★★★

  // get으로 가져온 응원댓글 데이터 state에 저장 --------------------------------------
  const [complementData, setComplementData] = useState([]);
  console.log("complementData", complementData);

  // GET - 응원댓글 가져오기 ---------------------------------------------------------------
  const getComplement = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/complements`, {
        headers: { Authorization: `Bearer ${token}` }, // 로그인 여부 확인(토큰을 헤더에 추가)
      });
      console.log("응원댓글 가져오기", response.data.data);
      setComplementData(response.data.data); // 가져온 데이터 set에 저장
    } catch (error) {
      alert(`${error}`);
      console.error(error);
    }
  };

  // DELETE - 응원댓글 삭제 --------------------------------------------------------------
  const deleteComplement = async (complementId) => {
    try {
      const response = await axios.delete(
        `${serverUrl}/api/complement/${complementId}`,
        {
          headers: { Authorization: `Bearer ${token}` }, // 로그인 여부 확인(토큰을 헤더에 추가)
        }
      );
      console.log(response.data.data.msg);
      getComplement();
      alert(response.data.data.msg);
    } catch (error) {
      alert(`${error}`);
      console.error(error);
    }
  };

  // put - 응원 댓글 수정
  const onClickPutComplement = async (complementId, newtitle) => {
    try {
      const response = await axios.put(
        `${serverUrl}/api/complement/${complementId}`,
        {
          title: newtitle,
          content: newtitle,
        },
        {
          headers: { Authorization: `Bearer ${token}` }, // 로그인 여부 확인(토큰을 헤더에 추가)
        }
      );
      console.log("응원 댓글 수정", response.data.data);
      alert("수정되었습니다.");
    } catch (error) {
      alert(`${error}`);
      console.error(error);
    }
  };

  return (
    <div className=" h-full w-[1000px]">
      <p className="mt-[50px] ml-7 text-2xl font-black">오늘의 한마디 댓글</p>

      {/* ★★★★★ 오늘의 한마디 ★★★★★ */}
      {/* 맵으로 돌려서 뽑기!!! */}
      {commentData &&
        commentData.map((item, index) => (
          <div
            key={item.commentId}
            className="bg-[#F9F5EB] rounded-md my-6 mx-7 p-7 shadow-lg"
          >
            <div className="flex flex-row pb-4">
              <p className="text-lg font-bold">내용</p>
              <input
                value={item.commentTitle}
                // 인덱스 정보가 온클릭으로 같이 넘어감
                onChange={(e) => {
                  const updatedCommentData = [...commentData];
                  updatedCommentData[index].commentTitle = e.target.value;
                  setCommentData(updatedCommentData);
                }}
                type="text"
                className="rounded-md mx-3 flex-grow h-8 px-2"
              />
              {console.log("한마디온체인지", commentData)}
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => deleteComment(item.commentId)}
                className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-[#65451F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#564024] "
              >
                삭제
              </button>
              <button
                type="button"
                onClick={() =>
                  onClickPutComment(item.commentId, item.commentTitle)
                }
                className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-[#65451F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#564024] "
              >
                수정
              </button>
            </div>
          </div>
        ))}

      <p className="mt-[50px] ml-7 text-2xl font-black">응원 댓글</p>

      {/* ★★★★★ 응원 댓글 ★★★★★ */}
      {/* 맵으로 돌려서 뽑기!!! */}
      {complementData &&
        complementData.map((item, index) => (
          <div
            key={item.complementId}
            className="bg-[#F9F5EB] rounded-md my-6 mx-7 p-7 shadow-lg"
          >
            <div className="flex flex-row pb-4">
              <p className="text-lg font-bold">내용</p>
              <input
                value={item.complementTitle}
                // 인덱스 정보가 온클릭으로 같이 넘어감
                onChange={(e) => {
                  const updatedComplementData = [...complementData];
                  updatedComplementData[index].complementTitle = e.target.value;
                  setComplementData(updatedComplementData);
                }}
                type="text"
                className="rounded-md mx-3 flex-grow h-8 px-2"
              />
              {console.log("응원온체인지", complementData)}
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => deleteComplement(item.complementId)}
                className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-[#65451F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#564024] "
              >
                삭제
              </button>
              <button
                type="button"
                onClick={() =>
                  onClickPutComplement(item.complementId, item.complementTitle)
                }
                className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-[#65451F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#564024] "
              >
                수정
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default MyReply;
