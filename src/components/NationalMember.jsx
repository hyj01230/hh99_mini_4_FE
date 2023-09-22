import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTokenFromCookie } from "../auth/cookie";
import { locations, partys } from "../data/data";

function NationalMember() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [link, setLink] = useState(`/${!id ? '' : id}`);
  const [locationButton, setLocationButton] = useState(locations[0].location);
  console.log(link);
  const serverUrl = process.env.REACT_APP_API_URL;

  const [resultList, setResultList] = useState([]);

  async function fetchLocationData() {
    const token = getTokenFromCookie();
    try {
      const response = await axios.get(
        `${serverUrl}/api/user/location?location=${locationButton}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Bearer 토큰 방식 사용
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        setResultList(response.data.data);
      }
    } catch (error) {
      console.error(error);
      if (
        error.response.data.msg.includes("userDetails") &&
        error.response.data.msg.includes("is null")
      ) {
        alert(`로그인이 필요합니다`);
      }
    }
  }

  useEffect(() => {
    
    if (link === "/location") fetchLocationData();
    // if(link === "/") true
  }, [link]);
  return (
    <section className="text-neutral-700 dark:text-neutral-300 flex justify-center flex-wrap">
      <div className="grid gap-6 text-center md:grid-cols-3">
        {/* First Testimonial */}
        {resultList.map((item) => {
          return (
            <div
              className="max-w-md"
              key={item.nickname}
              onClick={() => {
                navigate(`/detail/${item.nickname}`);
              }}
            >
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                <div
                  className="h-28 overflow-hidden rounded-t-lg"
                  style={{
                    backgroundColor: `${
                      partys.find((x) => x.party === item.party)?.color
                    }`,
                  }}
                ></div>
                <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                  <img
                    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                    alt="Avatar 1"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-4 text-2xl font-semibold">{`${item.nickname} / ${item.location}`}</h4>
                  <hr />
                  <p className="mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill={partys.find((x) => {
                        return x.party === item.party ? x.color : undefined;
                      })}
                      className="inline-block h-7 w-7 pr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.380 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.380 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                    </svg>
                    {item.opinionTitle === null
                      ? `안녕하세요`
                      : item.opinionTitle}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default NationalMember;
