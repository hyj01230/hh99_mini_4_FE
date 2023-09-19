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
        numberOfCards={3}
        // 카드 사이 공간
        gutter={30}
        leftChevron={<button>{"<"}</button>}
        rightChevron={<button>{">"}</button>}
        // true인 경우 쉐브론은 캐러셀 외부에 렌더링됩니다.
        outsideChevron={false}
        chevronWidth={chevronWidth}
        // 무한루프 (true, false)
        infiniteLoop={true}
      >
        {list.map((item) => {
          return (
            <div
              key={item.id}
              style={{ height: 200, background: "#EEE", textAlign: "center" }}
            >
              {item.title}
            </div>
          );
        })}
      </ItemsCarousel>
    </div>
  );
}

export default Carousel;
