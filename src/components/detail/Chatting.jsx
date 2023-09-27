import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTokenFromCookie } from "../../auth/cookie";
import { serverUrl } from "../../common/common";
// import { fetchUserInfo } from "../../redux/config/userInfoSlice";

function Chatting() {
  const { id } = useParams();
  const [chatList, setChatlist] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const token = getTokenFromCookie();
  const chatInputHandler = (e) => {
    setChatInput(e.target.value);
  };

  const getComplementsHandler = useCallback(async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/complements/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setChatlist(response.data.data ? response.data.data : []);
    } catch (error) {
      console.error(error);
    }
  }, [id, token]);

  useEffect(() => {
    getComplementsHandler();
  }, [getComplementsHandler]);

  const postComplementsHandler = async () => {
    try {
      await axios.post(
        `${serverUrl}/api/complement/${id}`,
        {
          title: chatInput,
          content: chatInput,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setChatInput("");
      getComplementsHandler();
    } catch (error) {
      console.error(error);
    }
  };
  console.log(chatList);

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
              {chatList.map((message) => (
                <div
                  key={message.complementId}
                  className="clear-both inline-block whitespace-nowrap px-2 py-1 "
                >
                  {/* {message.complementNickname !== userInfo.nickname ? ( */}
                  {/* <div
                      className={`float-left rounded-xl p-2 self-start bg-gray-300`}
                    >
                      <p>{message.complementTitle}</p>
                    </div> */}
                  {/* ) : ( */}
                  <div className="float-right rounded-xl rounded-tr bg-[#967E76] py-2 px-3 text-white">
                    <p>{message.complementTitle}</p>
                  </div>
                  {/* )} */}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center p-4">
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
            onChange={chatInputHandler}
            value={chatInput}
          />
          <button
            className="ml-2 rounded-lg bg-[#65451F] px-4 py-2 text-white"
            onClick={postComplementsHandler}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default Chatting;
