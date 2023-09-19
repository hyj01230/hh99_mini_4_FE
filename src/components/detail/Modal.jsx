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
      <div className="bg-white p-4 rounded-lg z-10 w-[30%] h-[700px]">
        {/* 모달 내용 */}
        <h2 className="text-2xl font-semibold">모달 제목</h2>
        <p>모달 내용</p>
      </div>
    </div>
  );
}

export default Modal;
