import React, { useState } from "react";

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

  const [isDrawerOpen, setDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-screen p-4 overflow-y-auto transition-transform pt-20 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } bg-slate-200 w-80 dark:bg-gray-800`}
        tabIndex="-1"
        aria-labelledby="drawer-right-label"
      >
        <p>댓글 or 채팅</p>
      </div>
    </>
  );
}

export default Chatting;
