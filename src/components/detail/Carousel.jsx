import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { useParams } from "react-router-dom";
import { getTokenFromCookie } from "../../auth/cookie";
import { serverUrl } from "../../common/common";

function Carousel() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  // 이 값은 왼쪽 및 오른쪽 갈매기형의 너비여야 합니다.
  const chevronWidth = 40;
  const { id } = useParams();
  const [list, setList] = useState([]);
  const token = getTokenFromCookie();
  const getCampaigns = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/campaigns/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Bearer 토큰 방식 사용
        },
      });
      console.log(response.data.data);
      setList(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCampaigns();
  }, []);

  return (
    <div>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        // 슬라이드 당 표시할 카드 수
        numberOfCards={2}
        // 카드 사이 공간
        gutter={30}
        leftChevron={<button>{"<"}</button>}
        rightChevron={<button>{">"}</button>}
        // true인 경우 쉐브론은 캐러셀 외부에 렌더링됩니다.
        outsideChevron={true}
        chevronWidth={chevronWidth}
        // 무한루프 (true, false)
        infiniteLoop={true}
      >
        {list.length !== 0 ? (
          list.map((item) => {
            return (
              <a
                href={item.campaignUrl}
                key={item.campaignId}
                target="_blank"
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div
                  className="h-32 overflow-hidden flex items-center justify-center"
                  style={{
                    borderTopLeftRadius: "8px",
                    borderBottomLeftRadius: "8px",
                  }}
                >
                  <img
                    className="object-cover object-center mx-auto h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={`${item.campaignThumbnail}`}
                    alt=""
                  />
                </div>

                <div className="flex flex-col justify-between p-4 leading-normal min-w-[100px] w-full md:w-80">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate md:text-lg">
                    {item.campaignTitle}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate md:text-sm">
                    {item.campaignContent}
                  </p>
                </div>
              </a>
            );
          })
        ) : (
          <>
            <p className="text-[30px]">작성된 글이 없습니다.</p>
          </>
        )}
      </ItemsCarousel>
    </div>
  );
}

export default Carousel;
