import React from "react";

function Modal({ onCloseModal }) {
  const closeModal = () => {
    onCloseModal();
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
        <h2 className="text-2xl font-semibold">모달 제목</h2>
        <p className="min-h-[450px] bg-slate-400">모달 내용</p>
        <div>
          <form className="w-full ">
            <div className="flex items-center border-b border-teal-500 py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="댓글을 입력해주세요"
                aria-label="Full name"
              />
              <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
              >
                작성
              </button>
            </div>
          </form>
        </div>
        <div className="overflow-y-auto max-h-[200px]">
          <div className="flex justify-between my-1">
            <p>댓글1</p> <p>좋아요</p>
          </div>
          <div className="flex justify-between my-1">
            <p>댓글1</p> <p>좋아요</p>
          </div>
          <div className="flex justify-between my-1">
            <p>댓글1</p> <p>좋아요</p>
          </div>
          <div className="flex justify-between my-1">
            <p>댓글1</p> <p>좋아요</p>
          </div>
          <div className="flex justify-between my-1">
            <p>댓글1</p> <p>좋아요</p>
          </div>
          <div className="flex justify-between my-1">
            <p>댓글1</p> <p>좋아요</p>
          </div>
          <div className="flex justify-between my-1">
            <p>댓글1</p> <p>좋아요</p>
          </div>
          <div className="flex justify-between my-1">
            <p>댓글1</p> <p>좋아요</p>
          </div>
          <div className="flex justify-between my-1">
            <p>댓글1</p> <p>좋아요</p>
          </div>
          <div className="flex justify-between my-1">
            <p>댓글1</p> <p>좋아요</p>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default Modal;
