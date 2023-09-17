import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

function Detail() {
  
  const xWheelEvent = (event) => {
    const delta = event.deltaY;
    const container = event.currentTarget;
    container.scrollLeft += delta;
  };
  

  return (
    <>
      <Navbar />
      {/* 사진 + 약력 */}
      <div className="pl-20 pr-20">
        <div className="flex justify-center mt-10 items-center flex-grow mb-5">
          <div className=" w-[150px]">
            <img src="https://place-hold.it/150x150" alt="" />
          </div>

          <div className="bg-gray-400 w-full p-5">
            약력이 작성될 곳이에요 <br />
            약력이 작성될 곳이에요 <br />
            약력이 작성될 곳이에요 <br />
            약력이 작성될 곳이에요 <br />
            약력이 작성될 곳이에요 <br />
            약력이 작성될 곳이에요 <br />
            약력이 작성될 곳이에요 <br />
          </div>
        </div>

        <p>활동모음</p>
        <div className="flex justify-center ">
          {/* 유튜브 + 글 */}
          <div className="w-4/5 pt-2 ">
            <div
              className="overflow-x-scroll w-full flex space-x-4 scrollbar-hide bg-slate-100 rounded-[12px] p-10"
              style={{ whiteSpace: "nowrap" }}
              onWheel={xWheelEvent}
            >
              {/* 첫 번째 카드 */}
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                <div className="w-80 border-2 inline-block">
                  <img src="https://place-hold.it/300x150" alt="" />
                  <p className="text-xl font-semibold">안녕하세요</p>
                  <p>글 설명</p>
                </div>
              </div>

              {/* 두 번째 카드 */}
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                <div className="w-80 border-2 inline-block">
                  <img src="https://place-hold.it/300x150" alt="" />
                  <p className="text-xl font-semibold">안녕하세요</p>
                  <p>글 설명</p>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                <div className="w-80 border-2 inline-block">
                  <img src="https://place-hold.it/300x150" alt="" />
                  <p className="text-xl font-semibold">안녕하세요</p>
                  <p>글 설명</p>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                <div className="w-80 border-2 inline-block">
                  <img src="https://place-hold.it/300x150" alt="" />
                  <p className="text-xl font-semibold">안녕하세요</p>
                  <p>글 설명</p>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                <div className="w-80 border-2 inline-block">
                  <img src="https://place-hold.it/300x150" alt="" />
                  <p className="text-xl font-semibold">안녕하세요</p>
                  <p>글 설명</p>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                <div className="w-80 border-2 inline-block">
                  <img src="https://place-hold.it/300x150" alt="" />
                  <p className="text-xl font-semibold">안녕하세요</p>
                  <p>글 설명</p>
                </div>
              </div>

              {/* 추가 카드들을 원하는 만큼 반복적으로 추가할 수 있습니다 */}
            </div>
            <p>오늘의 한마디</p>
            <div
              className="overflow-x-scroll w-full flex space-x-4 scrollbar-hide"
              style={{ whiteSpace: "nowrap" }}
              onWheel={xWheelEvent}
            >
              {/* 첫 번째 카드 */}
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                <div className="w-80 border-2 inline-block">
                  <img src="https://place-hold.it/300x150" alt="" />
                  <p className="text-xl font-semibold">안녕하세요</p>
                  <p>글 설명</p>
                </div>
              </div>

              {/* 두 번째 카드 */}
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                <div className="w-80 border-2 inline-block">
                  <img src="https://place-hold.it/300x150" alt="" />
                  <p className="text-xl font-semibold">안녕하세요</p>
                  <p>글 설명</p>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                <div className="w-80 border-2 inline-block">
                  <img src="https://place-hold.it/300x150" alt="" />
                  <p className="text-xl font-semibold">안녕하세요</p>
                  <p>글 설명</p>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                <div className="w-80 border-2 inline-block">
                  <img src="https://place-hold.it/300x150" alt="" />
                  <p className="text-xl font-semibold">안녕하세요</p>
                  <p>글 설명</p>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                <div className="w-80 border-2 inline-block">
                  <img src="https://place-hold.it/300x150" alt="" />
                  <p className="text-xl font-semibold">안녕하세요</p>
                  <p>글 설명</p>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                <div className="w-80 border-2 inline-block">
                  <img src="https://place-hold.it/300x150" alt="" />
                  <p className="text-xl font-semibold">안녕하세요</p>
                  <p>글 설명</p>
                </div>
              </div>

              {/* 추가 카드들을 원하는 만큼 반복적으로 추가할 수 있습니다 */}
            </div>
          </div>
          {/* 댓글 */}
          <div className="w-1/5 min-w-[250px] bg-slate-200 flex flex-col items-center justify-center">
            <div className="flex flex-col items-start h-[80%] gap-5">
              <div>댓글1</div>
              <div>댓글2</div>
              <div>댓글3</div>
              <div>댓글4</div>
              <div>댓글5</div>
            </div>
            <div className="space-x-5">
              <input type="text" />
              <button>작성</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
