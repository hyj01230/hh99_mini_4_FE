import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTokenFromCookie } from "../auth/cookie";
import { serverUrl } from "../common/common";
import { locations, partys } from "../data/data";

function NationalMember() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [link, setLink] = useState(`/${!id ? "" : id}`);

  const token = getTokenFromCookie();
  const [initData, setInitData] = useState([]);
  const [resultList, setResultList] = useState(initData);
  
  const [locateUrlPlus, setLocalUrlPlus] = useState("");
  const [partyUrlPlus, setPartyUrlPlus] = useState("");
  console.log(partyUrlPlus);

  async function fetchLocationData() {
    try {
      const response = await axios.get(
        `${serverUrl}/api/user/location?location=${locateUrlPlus}`,
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

  const followData = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/user/following`, {
        headers: {
          Authorization: `Bearer ${token}`, // Bearer 토큰 방식 사용
        },
      });
      console.log(response);
      if (response.status === 200) {
        setResultList(response.data.data);
      }
    } catch (error) {
      if (
        error.response.data.msg.includes("userDetails") &&
        error.response.data.msg.includes("is null")
      ) {
        alert(`로그인이 필요합니다`);
      }
    }
  };

  const partyData = async () => {
    try {
      const response = await axios.get(
        `${serverUrl}/api/user/party?party=${partyUrlPlus}`,
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
    }
  };

  const allData = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/user/main`);
      console.log(response);
      if (response.status === 200) {
        setResultList(response.data.data);
        setInitData(response.data.data);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (link === "/location") fetchLocationData();
    if (link === "/") allData();
    if (link === "/follow") followData();
    if (link === "/party") partyData();
  }, [link, locateUrlPlus, partyUrlPlus]);
  return (
    <>
      <div className="mx-auto max-w-7xl px-10 sm:px-8 lg:px-[19rem] mb-10">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {link === "/location" &&
            token &&
            locations.map((item) => {
              return (
                <li className="mr-2 mb-2">
                  <button
                    class="inline-block px-4 py-2 text-white bg-blue-600 rounded-lg active"
                    aria-current="page"
                    onClick={() => setLocalUrlPlus(item.location)}
                  >
                    {item.location}
                  </button>
                </li>
              );
            })}
          {link === "/party" &&
            token &&
            partys.map((item) => {
              return (
                <li className="mr-2 mb-2" key={item.id}>
                  <button
                    className="inline-block px-4 py-2 text-white bg-blue-600 rounded-lg active"
                    aria-current="page"
                    onClick={() => setPartyUrlPlus(item.party)}
                  >
                    {item.party}
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
      <section className="text-neutral-700 dark:text-neutral-300 flex justify-center flex-wrap">
        <div className="grid gap-6 text-center md:grid-cols-3">
          {/* First Testimonial */}
          {resultList &&
            resultList.map((item) => {
              console.log(item);
              return (
                <div
                  className="max-w-md"
                  key={item.nickname}
                  onClick={() => {
                    navigate(`/detail/${item.userId}`);
                  }}
                >
                  <div className="block rounded-lg bg-white shadow-lg ">
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
    </>
  );
}

export default NationalMember;
