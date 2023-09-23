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
      <div
        className=
        "fixed top-0 right-0 h-screen p-4 overflow-y-auto transition-transform pt-20 -pb-20 z-10 translate-x-0 bg-slate-200 w-80"
        tabIndex="-1"
        aria-labelledby="drawer-right-label"
      >
        {/* <p>댓글 or 채팅</p> */}
        <div className="flex h-screen flex-col bg-gray-100">
          <div className="flex-grow overflow-y-auto">
            <div className="flex flex-col space-y-2 p-4">
              {/* Individual chat message */}
              <div className="flex items-center self-end rounded-xl rounded-tr bg-blue-500 py-2 px-3 text-white">
                <p>This is a sender message</p>
              </div>
              <div className="flex items-center self-start rounded-xl rounded-tl bg-gray-300 py-2 px-3">
                <p>This is a receiver message</p>
              </div>
              <div className="flex items-center self-start rounded-xl rounded-tl bg-gray-300 py-2 px-3">
                <p>This is a receiver message</p>
              </div>
              <div className="flex items-center self-end rounded-xl rounded-tr bg-blue-500 py-2 px-3 text-white">
                <p>This is a sender message</p>
              </div>
            </div>
          </div>
          <div className="flex items-center p-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
            />
            <button className="ml-2 rounded-lg bg-blue-500 px-4 py-2 text-white">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatting;
