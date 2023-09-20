import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { Fragment, useState } from "react";
// Navbar.jsx 파일 상단에 아래 코드 추가
import { faLink, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from "react-router-dom";
import { deleteCookie, getTokenFromCookie } from "../auth/cookie";
import { locations, partys } from "../data/data";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const navigate = useNavigate();
  const token = getTokenFromCookie(); // 토큰 확인
  const [currentMenuItem, setCurrentMenuItem] = useState(
    window.location.pathname
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
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <FontAwesomeIcon
                      icon={faLink}
                      className="text-[#949494] text-2xl"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4 py-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
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
                  <div>
                    <div className="relative mt-2 rounded-md shadow-sm ml-5">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-52">
                        <span className="text-gray-500 sm:text-sm">
                          <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </span>
                      </div>
                      <input
                        type="text"
                        name="price"
                        id="price"
                        className="block w-full rounded-md border-0 py-2 pl-10 pr-10  text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  {/* 검색태그 끝 */}
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

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
                          className="text-[white]"
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
      <div className="flex gap-20 justify-center p-5">
        {currentMenuItem === "/location" &&
          locations.map((item) => (
            <button key={item.id}>{item.location}</button>
          ))}
        {currentMenuItem === "/party" &&
          partys.map((item) => (
            <button key={item.id} className={`bg-[${item.color}]`}>
              {item.party}
            </button>
          ))}
      </div>
    </>
  );
}

export default Navbar;
