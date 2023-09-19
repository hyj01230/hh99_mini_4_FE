import React from "react";

function Chatting() {
  const list = [
    { id: 1, text: "집에 있지만 집에 가고 싶다." },
    {
      id: 2,
      text: "tailwindcss는 클래스형 css 라이브러리입니다. Tailwind CSS IntelliSense extention을 설치하는 것을 추천해요",
    },
    { id: 3, text: "댓글3" },
    { id: 4, text: "댓글4" },
    { id: 5, text: "댓글5" },
    { id: 6, text: "댓글6" },
    { id: 7, text: "댓글7" },
    { id: 8, text: "댓글8" },
    { id: 9, text: "댓글9" },
    { id: 10, text: "댓글10" },
    { id: 11, text: "댓글11" },
    { id: 12, text: "댓글12" },
    { id: 13, text: "댓글13" },
    { id: 14, text: "댓글14" },
    { id: 15, text: "댓글15" },
    { id: 16, text: "댓글16" },

  ];

  return (
    <>
      <div className="h-[80%] overflow-y-auto mt-10 ml-10 mr-10 scrollbar-hide">
        {list.map((item) => (
          <div className="flex items-top pl-[10px] pr-[10px] mb-5" key={item.id}>
            <p className="text-[20px] w-[30px] mr-[30px]">{item.id}</p>
            <p className="text-left text-[20px]">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="h-[20%] flex justify-center items-center gap-3">
        <input type="text" />
        <button>전송</button>
      </div>
    </>
  );
}

export default Chatting;
