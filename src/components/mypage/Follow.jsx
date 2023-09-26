import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getTokenFromCookie } from "../../auth/cookie";
import { useNavigate } from 'react-router-dom';
import { serverUrl } from '../../common/common';

function Follow() {

  // 토큰가져오기
  const token = getTokenFromCookie();

  // 팔로잉 내역 가져오기
  useEffect(() => {
    followingList();
  }, []);

  // get으로 가져온 한마디 데이터 state에 저장 --------------------------------------
  const [followingData, setFollowingData] = useState([]);
  const [liked, setLiked] = useState({});

  // GET - 팔로잉 내역 ------------------------------------
  const followingList = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/user/main`, {
        headers: { Authorization: `Bearer ${token}` } // 로그인 여부 확인(토큰을 헤더에 추가)
      });
      console.log('팔로잉 내역', response.data.data);
      setFollowingData(response.data.data); // 가져온 데이터 set에 저장
    }
    catch (error) {
      alert(`${error}`);
      console.error(error);
    }
  }

  const toggleLike = (userId) => {
    // 아이콘 상태를 토글하는 함수
    setLiked(prevLiked => ({
      ...prevLiked,
      [userId]: !prevLiked[userId]
    }));
  }

  return (
    <div className=' h-screen w-[1000px]'>
      <p className='mt-[50px] ml-7 text-2xl font-black'>나의 팔로잉 목록</p>
      <div className='p-7 w-[1000px] flex flex-wrap justify-start mx-auto'>

        {followingData && followingData.map((item) => (
          <div key={item.userId} className="w-[290px] block rounded-lg bg-white shadow-lg m-3 ">
            <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                alt="Avatar 1"
              />
            </div>
            <div className="p-6">
              <h4 className="flex justify-center mb-4 text-2xl font-semibold">{item.nickname}</h4>
              <hr />
              <p className="mt-5 flex justify-center">
                {item.location}
              </p>
              <p className="mt-5 flex justify-center">
                {item.party}
              </p>
              <button onClick={() => toggleLike(item.userId)} className="mt-5 flex justify-center mx-auto">
                {liked[item.userId] ? '♡' : '♥'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>





  )
}

export default Follow