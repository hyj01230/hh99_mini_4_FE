import axios from "axios";
import React, { useEffect, useState } from "react";
import { getTokenFromCookie } from "../../auth/cookie";
import { serverUrl } from "../../common/common";

function Modal({ onCloseModal, opinionId, id }) {
  const [data, setData] = useState({});
  const [commentData, setCommentData] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const commentInputHandler = (e) => {
    setCommentInput(e.target.value);
  };

  const closeModal = () => {
    onCloseModal();
  };
  const token = getTokenFromCookie();
  const getOpinionHandler = async () => {
    try {
      const response = await axios.get(
        `${serverUrl}/api/opinion?opinionId=${opinionId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Bearer 토큰 방식 사용
          },
        }
      );
      setData(response.data.data);
      setCommentData(response.data.data.commentResponseDtoList);
    } catch (error) {
      console.error(error);
    }
  };
  console.log("댓글", commentData);
  useEffect(() => {
    getOpinionHandler();
  }, []);

  const postCommentHandler = async (id) => {
    try {
      const response = await axios.post(
        `${serverUrl}/api/comment/${id}`,
        {
          title: commentInput,
          content: commentInput,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Bearer 토큰 방식 사용
          },
        }
      );
      console.log(response);
      getOpinionHandler();
    } catch (error) {
      console.error(error);
    }
  };

  const commetLike = async (id) => {
    try {
      await axios.post(`${serverUrl}/api/comment/like/${id}`,{} ,{
        headers: {
          Authorization: `Bearer ${token}`, // Bearer 토큰 방식 사용
        },
      });
      getOpinionHandler();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 흐린 배경 */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={closeModal}
      ></div>

      {/* 모달 창 */}
      <div className="bg-white p-4 rounded-lg z-10 w-[30%] h-[800px]">
        {/* 모달 내용 */}
        <h2 className="text-2xl font-semibold">{data.opinionTitle}</h2>
        <p className="min-h-[450px] bg-slate-400">{data.opinionContent}</p>
        <div>
          <form className="w-full ">
            <div className="flex items-center border-b border-teal-500 py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="댓글을 입력해주세요"
                aria-label="Full name"
                value={commentInput}
                onChange={commentInputHandler}
              />
              <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
                onClick={() => {
                  postCommentHandler(data.opinionId);
                }}
              >
                작성
              </button>
            </div>
          </form>
        </div>
        <div className="overflow-y-auto max-h-[200px]">
          {commentData.map((item) => (
            <div className="flex justify-between my-1" key={item.commentId}>
              <p>{item.commentContent}</p>{" "}
              <p onClick={() => { console.log(item.commentId); commetLike(item.commentId)}}>
                {item.likeStat ? "♥" : "♡"} {item.likeCount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
