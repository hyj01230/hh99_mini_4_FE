import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { locations, partys } from "../data/data";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Join() {
  const serverUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  // ID/PW 입력값 state
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [nickname, setNickName] = useState("");
  const [isPolitician, setIsPolitician] = useState(false); // 체크박스 상태
  const [selected, setSelected] = useState(isPolitician ? partys[0] : "");
  const [locate, setLocate] = useState(isPolitician ? locations[0] : "");

  useEffect(() => {
    if (isPolitician) {
      setSelected(partys[0]);
      setLocate(locations[0]);
    } else {
      setSelected("");
      setLocate("");
    }
  }, [isPolitician]);

  const onChangeIdHandler = (e) => {
    setId(e.target.value);
  };
  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const onChangeCheckPasswordHandler = (e) => {
    setCheckPassword(e.target.value);
  };
  const onCheckboxChangeHandler = (e) => {
    setIsPolitician(e.target.checked);
  };
  const onChangeNickNameHandler = (e) => {
    setNickName(e.target.value);
  };
  const onChangePartyHandler = (e) => {
    const partyTarget = partys.findIndex((party) => party.party === e);
    setSelected(partys[partyTarget]);
  };
  const onChangeLocateHandler = (e) => {
    const locateTarget = locations.findIndex(
      (location) => location.location === e
    );
    setLocate(locations[locateTarget]);
  };

  // id 유효성검사 및 안내메시지
  const [idMessage, setIdMessage] = useState("");

  useEffect(() => {
    if (id.length === 0) {
      setIdMessage("");
    } else if (!/^(?=.*[a-z])(?=.*[0-9])/.test(id)) {
      setIdMessage("영어 소문자와 숫자를 모두 포함해야 합니다.");
    } else if (id.length < 6) {
      setIdMessage("6글자 이상 입력해야합니다.");
    } else {
      setIdMessage(true);
    }
  }, [id]);

  const [pwMessage, setPwMessage] = useState("");

  useEffect(() => {
    if (password.length === 0) {
      setPwMessage("");
    } else if (password.length < 8) {
      setPwMessage("비밀번호는 8글자 이상이어야 합니다.");
    } else if (!/^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(password)) {
      setPwMessage("영어 소문자, 숫자, 특수문자를 모두 포함해야 합니다.");
    } else {
      setPwMessage(true);
    }
  }, [password, checkPassword]);

  const [pwCheckMessage, setPwCheckMessage] = useState("");
  useEffect(() => {
    if (checkPassword.length === 0) {
      setPwCheckMessage("");
    } else if (password !== checkPassword) {
      setPwCheckMessage("비밀번호가 일치하지 않습니다.");
    } else if (password === checkPassword) {
      setPwCheckMessage(true);
    }
  }, [password, checkPassword]);

  // 가입하기 버튼 클릭 핸들러
  const onJoinButtonClick = (e) => {
    e.preventDefault(); // 폼의 기본 동작 방지

    // 유효성 검사
    if (idMessage !== true || pwMessage !== true || pwCheckMessage !== true) {
      alert("모든 필수 정보를 올바르게 입력하세요.");
      return;
    }
    // alert(`모든 정보를 올바르게 입력했지만 회원가입 구현이 안되있어요`);
    // 가입 로직 추가
    submitHandler(e);
  };

  // 회원가입 연결해보기
  const submitHandler = async (e) => {
    const obj = {
      username: id,
      password: password,
      nickname: "banana-master",
    };
    try {
      const response = await axios.post(
        `${serverUrl}/api/user/signup`,
        obj
      );
      console.log(response);
      alert(`회원가입 완료`);
      navigate("/login");
    } catch (error) {
      alert(`회원가입 실패 ${error}`);
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-[url('http://www.kasancamera.co.kr/shop/data/goods/2013110813095011.jpg')] bg-bottom bg-cover">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-5 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Town Assembly
          </h2>
        </div>

        <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onJoinButtonClick}>
            <div>
              <label
                htmlFor="username"
                className="block text-lg font-black leading-6 text-gray-900"
              >
                아이디
              </label>
              <p className="my-2 text-red-600">{idMessage}</p>
              <div className="mt-3">
                <input
                  id="username"
                  placeholder="아이디 입력(6~20자)"
                  type="text"
                  value={id}
                  onChange={onChangeIdHandler}
                  maxLength={20}
                  className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div>
                <label
                  htmlFor="password"
                  className="mt-2 block text-lg font-black leading-6 text-gray-900"
                >
                  비밀번호
                </label>
                <p className="my-2 text-red-600">{pwMessage}</p>
              </div>
              <div className="mt-3">
                <input
                  id="password"
                  placeholder="비밀번호 입력(문자, 숫자, 특수문자 포함 8~20자)"
                  type="password"
                  value={password}
                  onChange={onChangePasswordHandler}
                  maxLength={20}
                  className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div>
                <label
                  htmlFor="checkPassword"
                  className="mt-2 block text-lg font-black leading-6 text-gray-900"
                >
                  비밀번호 확인
                </label>
                <p className="my-2 text-red-600">{pwCheckMessage}</p>
              </div>
              <div className="mt-3 mb-9">
                <input
                  id="checkPassword"
                  placeholder="비밀번호 재입력"
                  type="password"
                  value={checkPassword}
                  onChange={onChangeCheckPasswordHandler}
                  maxLength={20}
                  className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div>
                <label
                  htmlFor="nickname"
                  className="mt-2 block text-lg font-black leading-6 text-gray-900"
                >
                  닉네임
                </label>
                {/* <p className="my-2 text-red-600">{pwCheckMessage}</p> */}
              </div>
              <div className="mt-3 mb-9">
                <input
                  id="nickname"
                  placeholder="닉네임 입력(2~10자)"
                  type="password"
                  value={nickname}
                  onChange={onChangeNickNameHandler}
                  maxLength={10}
                  className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="bg-slate-100 rounded-md p-4">
              <div className="flex items-center">
                <input
                  id="comments"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  checked={isPolitician}
                  onChange={onCheckboxChangeHandler}
                />
                <label
                  htmlFor="comments"
                  className="pl-3 block text-lg font-black leading-6 text-gray-900"
                >
                  정치인 회원입니다
                </label>
              </div>
            </div>

            {isPolitician && (
              <>
                <div>
                  <div>
                    <div className="mt-2 block text-lg font-black leading-6 text-gray-900">
                      정당
                    </div>
                  </div>
                  <div className="mt-3">
                    <Listbox value={selected} onChange={onChangePartyHandler}>
                      {({ open }) => (
                        <>
                          <div className="relative mt-2">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                              <span className="flex items-center">
                                <span className="ml-3 block truncate">
                                  {selected.party}
                                </span>
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Transition
                              show={open}
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {partys.map((item) => (
                                  <Listbox.Option
                                    key={item.id}
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? "bg-indigo-600 text-white"
                                          : "text-gray-900",
                                        "relative cursor-default select-none py-2 pl-3 pr-9"
                                      )
                                    }
                                    value={item.party}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <div className="flex items-center">
                                          <span
                                            className={classNames(
                                              selected
                                                ? "font-semibold"
                                                : "font-normal",
                                              "ml-3 block truncate"
                                            )}
                                          >
                                            {item.party}
                                          </span>
                                        </div>

                                        {selected ? (
                                          <span
                                            className={classNames(
                                              active
                                                ? "text-white"
                                                : "text-indigo-600",
                                              "absolute inset-y-0 right-0 flex items-center pr-4"
                                            )}
                                          >
                                            <CheckIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Listbox>
                  </div>
                </div>

                <div>
                  <div>
                    <div
                      htmlFor="location"
                      className="mt-2 block text-lg font-black leading-6 text-gray-900"
                    >
                      지역
                    </div>
                  </div>
                  <div className="mt-3">
                    {/*  */}
                    <Listbox value={locate} onChange={onChangeLocateHandler}>
                      {({ open }) => (
                        <>
                          <div className="relative mt-2">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                              <span className="flex items-center">
                                <span className="ml-3 block truncate">
                                  {locate.location}
                                </span>
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Transition
                              show={open}
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {locations.map((item) => (
                                  <Listbox.Option
                                    key={item.id}
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? "bg-indigo-600 text-white"
                                          : "text-gray-900",
                                        "relative cursor-default select-none py-2 pl-3 pr-9"
                                      )
                                    }
                                    value={item.location}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <div className="flex items-center">
                                          <span
                                            className={classNames(
                                              selected
                                                ? "font-semibold"
                                                : "font-normal",
                                              "ml-3 block truncate"
                                            )}
                                          >
                                            {item.location}
                                          </span>
                                        </div>

                                        {selected ? (
                                          <span
                                            className={classNames(
                                              active
                                                ? "text-white"
                                                : "text-indigo-600",
                                              "absolute inset-y-0 right-0 flex items-center pr-4"
                                            )}
                                          >
                                            <CheckIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Listbox>
                  </div>
                </div>
              </>
            )}

            <div className="mt-4 flex justify-center gap-[20px]">
            <button
                type="submit"
                className="mt-4 flex w-[150px] justify-center rounded-md bg-green-700 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                로그인
              </button>
              <button
                type="submit"
                className="mt-4 flex w-[150px] justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                가입하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Join;
