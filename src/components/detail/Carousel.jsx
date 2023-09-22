import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";

function Carousel() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  // 이 값은 왼쪽 및 오른쪽 갈매기형의 너비여야 합니다.
  const chevronWidth = 40;

  const list = [
    { id: 1, img: "123", title: "제목", content: "내용" },
    { id: 2, img: "123", title: "제목", content: "내용" },
    { id: 3, img: "123", title: "제목", content: "내용" },
    { id: 4, img: "123", title: "제목", content: "내용" },
    { id: 5, img: "123", title: "제목", content: "내용" },
    { id: 6, img: "123", title: "제목", content: "내용" },
  ];

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
        {list.map((item) => {
          return (
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover object-center w-full h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src="https://velog.velcdn.com/images/star5/post/5763693d-4c36-4a5e-8dbd-4fb4fdb2cabd/image.png"
                alt=""
              />

              <div className="flex flex-col justify-between p-4 leading-normal min-w-[100px] w-full md:w-80">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate md:text-lg">
                  오늘은 머하지 vrgrfgerfefefrgegegeww2g32g
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate md:text-sm">
                  포스트맨의 아이콘은 인간이 미사일이 된 것 같습니다. ㅋㅋㅋㅋ
                </p>
              </div>
            </a>
          );
        })}
      </ItemsCarousel>
    </div>
  );
}

export default Carousel;
