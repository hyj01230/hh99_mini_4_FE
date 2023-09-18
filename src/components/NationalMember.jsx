import React from "react";
import { useNavigate } from "react-router";

const people = [
  {
    name: "김성호",
    role: "프론트엔드",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "전하영",
    role: "프론트엔드",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "김병관",
    role: "백엔드",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "정우용",
    role: "백엔드",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },

  // More people...
];

function NationalMember() {
  const navigate = useNavigate();
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-8 px-6 lg:px-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {people.map((person) => (
          // JSX 내에서 변수 선언 및 값 할당
          <div
            key={person.name}
            className="bg-red-200 rounded-lg p-3 mb-4"
            onClick={() => {
              //TODO: 국회의원 상세페이지로 가게 해야됨
              navigate("/detail/1");
            }}
          >
            <div className="flex items-center gap-x-6 mb-2">
              <img
                className="h-16 w-16 rounded-full"
                src={person.imageUrl}
                alt=""
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  {person.role}
                </p>
              </div>
            </div>
            <p className="ml-2">안녕하세요 감사해요 잘있어요 다시만나요 </p>
          </div>

        ))}
      </div>
    </div>
  );
}

export default NationalMember;
