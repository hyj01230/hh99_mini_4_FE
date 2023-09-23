import axios from "axios";
import React from "react";
import { serverUrl } from "../../common/common";

function Info() {
  const profileImageUrl =
    "https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202211%2F20221128155419266.jpg";
    
  const getUserInfo = async () => {
    await axios.get(`${serverUrl}/api/user/userinfo`)
  }


  return (
    <div className="bg-white p-4 shadow-md rounded-lg flex items-center">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          이상호
        </h2>
        <blockquote
          className="p-4 my-4 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800 w-full"
          style={{ background: "inherit" }}
        >
          <p className="text-lg font-medium leading-relaxed text-gray-900 dark:text-white">
            <ul className="list-none ml-6 mt-2">
              <li>출생: 1993. 7. 21. 울산광역시</li>
              <li>신체: 184cm, 90kg</li>
              <li>소속: 아이엠브랜드(크리에이터)</li>
              <li>
                수상: 2022년 대한민국 청년의날 크리에이터 어워즈 게임부문 대상
              </li>
              <li>경력: 2019.12 서라벌게이밍 단장</li>
            </ul>
          </p>
        </blockquote>
      </div>
      <img
        src={profileImageUrl}
        alt=""
        className="rounded-[12px] max-w-[120px] ml-auto"
      />
    </div>
  );
}

export default Info;
