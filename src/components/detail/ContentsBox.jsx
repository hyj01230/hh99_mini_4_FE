import React, { useState } from "react";
import Modal from "../detail/Modal";

function ContentsBox() {
  const list = [
    {
      id: 1,
      imgUrl:
        "https://spartacodingclub.kr/_next/image?url=%2Fv5%2Ficons%2Flogo-active.png&w=1920&q=100",
      title: "제목입니다 길면 점으로 표시되요 가나다라마바사아자차카타파하",
      content: "내용입니다 길면 점으로 표시되요 가나다라바마사아자차카타파하",
    },
    {
      id: 2,
      imgUrl:
        "https://spartacodingclub.kr/_next/image?url=%2Fv5%2Ficons%2Flogo-active.png&w=1920&q=100",
      title: "제목입니다",
      content: "내용입니다",
    },
    {
      id: 3,
      imgUrl:
        "https://spartacodingclub.kr/_next/image?url=%2Fv5%2Ficons%2Flogo-active.png&w=1920&q=100",
      title: "제목입니다",
      content: "내용입니다",
    },
    {
      id: 4,
      imgUrl:
        "https://spartacodingclub.kr/_next/image?url=%2Fv5%2Ficons%2Flogo-active.png&w=1920&q=100",
      title: "제목입니다",
      content: "내용입니다",
    },
    {
      id: 5,
      imgUrl:
        "https://spartacodingclub.kr/_next/image?url=%2Fv5%2Ficons%2Flogo-active.png&w=1920&q=100",
      title: "제목입니다",
      content: "내용입니다",
    },
    {
      id: 6,
      imgUrl:
        "https://spartacodingclub.kr/_next/image?url=%2Fv5%2Ficons%2Flogo-active.png&w=1920&q=100",
      title: "제목입니다",
      content: "내용입니다",
    },
    {
      id: 7,
      imgUrl:
        "https://spartacodingclub.kr/_next/image?url=%2Fv5%2Ficons%2Flogo-active.png&w=1920&q=100",
      title: "제목입니다",
      content: "내용입니다",
    },

    {
      id: 8,
      imgUrl:
        "https://spartacodingclub.kr/_next/image?url=%2Fv5%2Ficons%2Flogo-active.png&w=1920&q=100",
      title: "제목입니다",
      content: "내용입니다",
    },
    {
      id: 9,
      imgUrl:
        "https://spartacodingclub.kr/_next/image?url=%2Fv5%2Ficons%2Flogo-active.png&w=1920&q=100",
      title: "제목입니다",
      content: "내용입니다",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [like, setLike] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const likeHandler = () => {
    setLike(!like);
  }

  return (
    <div className="flex flex-wrap justify-between mt-4 mb-4 gap-2">
      {list.map((item) => {
        return (
          <div
            key={item.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:flex-col md:w-[31%]"
            
          >
            <div onClick={openModal}>
              <img
              className="rounded-t-lg"
              src="https://velog.velcdn.com/images/tosspayments/post/8f0f4014-8406-45fe-9700-02276563ba97/image.jpeg"
              alt=""
            />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>

              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
            </div>
            
            <p onClick={likeHandler} className="pb-4 px-4">{like ? '♥' : '♡'} 1</p>
          </div>
        );
      })}

      {isModalOpen && <Modal onCloseModal={closeModal} />}
    </div>
  );
}

export default ContentsBox;
