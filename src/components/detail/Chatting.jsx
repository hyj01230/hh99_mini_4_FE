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
    { id: 5, text: "댓글5" },
    { id: 6, text: "댓글6" },
    { id: 7, text: "댓글7" },
    { id: 8, text: "댓글8" },
    { id: 9, text: "댓글9" },
    { id: 5, text: "댓글5" },
    { id: 6, text: "댓글6" },
    { id: 7, text: "댓글7" },
    { id: 8, text: "댓글8" },
    { id: 9, text: "댓글9" },
    { id: 5, text: "댓글5" },
    { id: 6, text: "댓글6" },
    { id: 7, text: "댓글7" },
    { id: 8, text: "댓글8" },
    { id: 9, text: "댓글9" },
  ];

  return (
    <>
      <div
        className="fixed bottom-0 right-0 h-screen p-4 transition-transform pt-20 pb-20 z-10 translate-x-0 bg-[#F9F5EB] w-80"
        tabIndex="-1"
        aria-labelledby="drawer-right-label"
      >
        <div className="flex flex-col overflow-y-scroll h-full scrollbar-hide">
          <div className="flex-grow">
            <div className="flex flex-col space-y-2 p-4">
              {list.map((message) => (
                <>
                  {false ? (
                    <div
                      key={message.id}
                      className={`flex items-center rounded-xl p-2 ${
                        message.sender
                          ? "self-end bg-blue-500 text-white"
                          : "self-start bg-gray-300"
                      }`}
                    >
                      <p>{message.text}</p>
                    </div>
                  ) : (
                    <div className="flex items-center self-end rounded-xl rounded-tr bg-[#967E76] py-2 px-3 text-white">
                      <p>{message.text}</p>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center p-4">
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
          />
          <button className="ml-2 rounded-lg bg-[#65451F] px-4 py-2 text-white">
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default Chatting;
