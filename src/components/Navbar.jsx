import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { Fragment, useState } from "react";
// Navbar.jsx 파일 상단에 아래 코드 추가

import { useNavigate, useParams } from "react-router-dom";
import { deleteCookie, getTokenFromCookie } from "../auth/cookie";
import { locations, partys } from "../data/data";
import { titleStyle } from "../styles/fonsts";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const navigate = useNavigate();
  const token = getTokenFromCookie(); // 토큰 확인
  const { id } = useParams();
  const [currentMenuItem, setCurrentMenuItem] = useState(
    id === undefined ? "/" : id
  );
  const navigation = [
    { name: "전체조회", href: "/", current: currentMenuItem === "/" },
    { name: "팔로워", href: "/follow", current: currentMenuItem === "/follow" },
    {
      name: "지역별",
      href: "/location",
      current: currentMenuItem === "/location",
    },
    { name: "정당별", href: "/party", current: currentMenuItem === "/party" },
  ];

  return (
    <>
      <Disclosure as="nav" className="bg-[#F2EAD3] sticky top-0 w-full">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">

                    {/* <p
                      className="text-[white] font-[600] text-xl"
                      
                    >
                      Town Assembly
                    </p> */}

                    <p style={titleStyle} className="text-2xl cursor-pointer text-[#65451F]" onClick={() => {
                        navigate("/");
                      }}>Town Assembly</p>

                  </div>
                  <div className="hidden sm:ml-6 sm:block w-[500px] justify-around">
                    <div className="flex w-full items-center">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "text-[#65451F] text-[16px] hover:font-bold"
                              : "text-[#65451F] text-[16px] hover:font-bold",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                          onClick={() => setCurrentMenuItem(item.name)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  {/* 검색태그 시작 */}

                  <form className="flex items-center w-full">
                    <label
                      htmlFor="search"
                      className="mb-1 text-xs font-medium text-gray-900 sr-only "
                    >
                      Search
                    </label>
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 left-0 flex items-center p-3 pointer-events-none">
                        {/* 돋보기 */}
                        <svg
                          className="w-3 h-3 text-gray-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="search"
                        className="block w-full h-10 p-2 pl-8 text-xs text-gray-900 border border-gray-300 rounded bg-gray-50"
                        placeholder="Search"
                        required
                      />
                      <button
                        type="submit"
                        className="text-white absolute mr-2 right-1 bottom-2 bg-[#65451F] hover:bg-[#564024] focus:ring-2 focus:outline-none font-medium rounded text-xs px-3 py-1"
                      >
                        Search
                      </button>
                    </div>
                  </form>

                  {/* 검색태그 끝 */}
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      {token ? (
                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          {/* 프로필이미지 */}
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </Menu.Button>
                      ) : (
                        <button
                          className="text-[#65451F] text-[16px] hover:font-bold"
                          onClick={() => {
                            navigate("/login");
                          }}
                        >
                          로그인
                        </button>
                      )}
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                              onClick={() => {
                                navigate("/mypage/1");
                              }}
                            >
                              마이페이지
                            </div>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <div
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                              onClick={() => {
                                deleteCookie("token"); // "token" 쿠키 삭제
                                // 로그아웃 후 추가적인 로직을 수행할 수 있습니다.
                                navigate("/");
                              }}
                            >
                              로그아웃
                            </div>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div
        style={{ justifyContent: "space-between" }}
      >
        {currentMenuItem === "/location" &&
          locations.map((item) => (
            <button
              key={item.id}
              className="bg-slate-300 pt-[5px] pb-[5px] pl-[10px] pr-[10px] rounded-[8px]"
            >
              {item.location}
            </button>
          ))}
        {currentMenuItem === "/party" &&
          partys.map((item) => (
            <button
              key={item.id}
              style={{
                backgroundColor: `${item.color}`,
                padding: "5px 20px",
                borderRadius: "8px",
                fontWeight: "100",
                color: "white",
                WebkitTextStroke: "1px #f6f4f4",
              }}
            >
              {item.party}
            </button>
          ))}
      </div>
    </>
  );
}

export default Navbar;
