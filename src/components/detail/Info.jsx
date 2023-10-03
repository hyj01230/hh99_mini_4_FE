import React from "react";

function Info({ userInfo }) {
  console.log(userInfo);

  return (
    <div className="bg-white p-4 shadow-md rounded-lg flex items-center">
      <div>
        <h2 className="text-3xl font-bold text-gray-800">
          {userInfo.selectedUserNickname}
        </h2>
        <blockquote
          className="p-4 my-4 border-l-4 border-gray-300 w-full"
          style={{ background: "inherit" }}
        >
          <div className="text-lg font-medium leading-relaxed text-gray-900">
            {userInfo.selectedUserIntro ? userInfo.selectedUserIntro : "약력이 없습니다"}
          </div>
        </blockquote>
      </div>
      <img
        src={userInfo.selectedUserProfile}
        alt=""
        className="rounded-[12px] max-w-[120px] ml-auto"
      />
    </div>
  );
}

export default Info;
