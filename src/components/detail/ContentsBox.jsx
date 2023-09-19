import React from "react";

function ContentsBox({ onOpenModal }) {
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

  const openModal = () => {
    onOpenModal(true);
  };

  return (
    <div className="flex flex-wrap gap-[30px] mt-4 mb-4">
      {list.map((item) => {
        return (
          <div
            className="bg-slate-300 flex-grow w-[250px] h-[200px]"
            key={item.id}
            onClick={openModal}
          >
            <img
              src={item.imgUrl}
              alt=""
              className="w-[80%] h-[55%] ml-auto mr-auto mt-2 mb-2"
            />
            <div className="p-2">
              <p className="font-semibold text-2xl overflow-hidden overflow-ellipsis whitespace-nowrap">
                {item.title}
              </p>
              <p className="overflow-hidden overflow-ellipsis whitespace-nowrap">
                {item.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ContentsBox;
