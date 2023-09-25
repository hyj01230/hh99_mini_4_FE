import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTokenFromCookie } from "../../auth/cookie";
import { serverUrl } from "../../common/common";
import Modal from "../detail/Modal";

function ContentsBox() {
  const token = getTokenFromCookie();
  const [list, setList] = useState([]);
  const { id } = useParams();
  const [opinionId, setOpinionId] = useState(0);


  const getOpinions = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/opinions/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Bearer 토큰 방식 사용
        },
      });
      console.log("오늘의활동", response.data.data);
      setList(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOpinions();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [like, setLike] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const likeHandler = () => {
    setLike(!like);
  };

  return (
    <div className="flex flex-wrap justify-start mt-4 mb-4 gap-9">
      { list.length !== 0 ? list.map((item) => {
        return (
          <div
            key={item.opinionId}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:flex-col md:w-[31%]"
          >
            <div onClick={() => {openModal(); setOpinionId(item.opinionId)}}>
              <img
                className="rounded-t-lg"
                src="https://velog.velcdn.com/images/tosspayments/post/8f0f4014-8406-45fe-9700-02276563ba97/image.jpeg"
                alt=""
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.opinionTitle}
                </h5>

                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {item.opinionContent}
                </p>
              </div>
            </div>

            <p onClick={likeHandler} className="pb-4 px-4">
              {item.likeState ? "♥" : "♡"} {item.likeCount}
            </p>
          </div>
        );
      }) : 
      <p>작성된 글이 없습니다.</p>
      }

      {isModalOpen && <Modal onCloseModal={closeModal} opinionId={opinionId} id={id} />}
    </div>
  );
}

export default ContentsBox;
