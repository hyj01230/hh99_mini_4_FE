import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { getTokenFromCookie } from "../../auth/cookie";
import { serverUrl } from "../../common/common";
import { locations, partys } from "../../data/data";

// 테일윈드 Select Menus
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// 마이페이지_내 정보
function MyInfomation() {
  const [myInfoData, setMyInfoData] = useState({
    nickname: "",
    email: "",
    party: "",
    location: "",
    userIntro: "",
    nickname: "",
    imageUrl: "",
  });
  // 회원정보 state/onChange --------------------------------------------------
  const [nickname, setNickName] = useState(""); // 닉네임
  const [email, setEmail] = useState(""); // 이메일
  const [locationList, setLocationList] = useState(locations[0]); // 지역 - 정치인일때만!
  const [partyList, setPartyList] = useState(partys[0]); // 소속정당 - 정치인일때만!
  const [profile, setProfile] = useState(""); // 약력 - 정치인일때만!

  const onChangeNickNameHandler = (e) => {
    setNickName(e.target.value);
  };
  const onChangeEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const onChangeLocateHandler = (e) => {
    const locateTarget = locations.findIndex(
      (location) => location.location === e
    );
    setLocationList(locations[locateTarget]);
  };
  const onChangePartyHandler = (e) => {
    const partyTarget = partys.findIndex((party) => party.party === e);
    setPartyList(partys[partyTarget]);
  };
  const onChangeProfileHandler = (e) => {
    setProfile(e.target.value);
  };

  // PW state/onChange --------------------------------------------------
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const onChangeCurrentPwHandler = (e) => {
    setCurrentPassword(e.target.value);
  };
  const onChangeNwePwHandler = (e) => {
    setNewPassword(e.target.value);
  };
  const onChangeCheckPwHandler = (e) => {
    setCheckPassword(e.target.value);
  };

  // email 유효성검사 및 안내메시지 --------------------------------------------------
  const [emailMessage, setEmailMessage] = useState("");

  useEffect(() => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (email === 0) {
      setEmailMessage("");
    } else if (!emailRegex.test(email)) {
      setEmailMessage("이메일 형태를 지켜주세요");
    } else {
      setEmailMessage(true);
    }
  }, [email]);

  // 현재 PW 유효성검사 및 안내메시지 --------------------------------------------------
  const [pwMessage, setPwMessage] = useState("");

  useEffect(() => {
    if (currentPassword.length === 0) {
      setPwMessage("");
    } else if (currentPassword < 8) {
      setPwMessage("비밀번호는 8글자 이상이어야 합니다.");
    } else if (
      !/^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(currentPassword)
    ) {
      setPwMessage("영어 소문자, 숫자, 특수문자를 모두 포함해야 합니다.");
    } else {
      setPwMessage(true);
    }
  }, [currentPassword]);

  // 새 PW 유효성검사 및 안내메시지 --------------------------------------------------
  const [newPwMessage, setNewPwMessage] = useState("");

  useEffect(() => {
    if (newPassword.length === 0) {
      setNewPwMessage("");
    } else if (newPassword < 8) {
      setNewPwMessage("비밀번호는 8글자 이상이어야 합니다.");
    } else if (!/^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(newPassword)) {
      setNewPwMessage("영어 소문자, 숫자, 특수문자를 모두 포함해야 합니다.");
    } else if (newPassword === currentPassword) {
      setNewPwMessage("기존 비밀번호와 동일합니다.");
    } else {
      setNewPwMessage(true);
    }
  }, [newPassword]);

  // 확인 PW 유효성검사 및 안내메시지 --------------------------------------------------
  const [checkPwMessage, setCheckPwMessage] = useState("");

  useEffect(() => {
    if (checkPassword.length === 0) {
      setCheckPwMessage("");
    } else if (checkPassword !== newPassword) {
      setCheckPwMessage("비밀번호가 일치하지 않습니다.");
    } else if (checkPassword === newPassword) {
      setCheckPwMessage(true);
    }
  }, [checkPassword]);

  // 회원정보 취소 > stae 비우기 --------------------------------------------------
  const onClickInfoCancleHandler = () => {
    setNickName("");
    setEmail("");
    setProfile("");
  };

  // 비밀번호 취소 > stae 비우기 --------------------------------------------------
  const onClickPWCancleHandler = () => {
    setCurrentPassword("");
    setNewPassword("");
    setCheckPassword("");
  };

  // 토큰가져오기 --------------------------------------------------------------------------
  const token = getTokenFromCookie();

  // 내정보 가져오기 --------------------------------------------------------------------------
  useEffect(() => {
    myInfoGetHandler();
  }, []);

  // get으로 가져온 내 정보 데이터 state에 저장하기 -------------------------------------------------------
  // 데이터'들' 들어올거니까 []

  // GET - 내정보 가져오기 -------------------------------------------------------
  const myInfoGetHandler = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/profile/modify`, {
        headers: { Authorization: `Bearer ${token}` }, // 로그인 여부 확인(토큰을 헤더에 추가)
      });
      setMyInfoData(response.data.data[0]);
      setNickName(response.data.data[0].nickname);
      setEmail(response.data.data[0].email);
      setLocationList(
        locations.find((x) => x.location === response.data.data[0].location)
      );
      setPartyList(partys.find((x) => x.party === response.data.data[0].party));
      setProfile(
        response.data.data[0].userIntro ? response.data.data[0].userIntro : ""
      );
    } catch (error) {
      alert(`${error}`);
      console.error(error);
    }
  };
  console.log(myInfoData);
  // PUT -??????? 회원정보 저장 > 서버로 db보내기 --------------------------------------------------
  const onSubmitInfoPutHandler = async () => {
    try {
      const response = await axios.put(
        `${serverUrl}/api/profile/modify/save`,
        {
          nickname: nickname,
          email: email,
          party: myInfoData.role !== "voterUser" ? locationList.party : null,
          location: myInfoData.role !== "voterUser" ? partyList.location : null,
          userIntro: myInfoData.role !== "voterUser" ? profile : null,
        },
        {
          headers: { Authorization: `Bearer ${token}` }, // 로그인 여부 확인(토큰을 헤더에 추가)
        }
      );
      console.log("회원정보 수정", response.data.data);
      alert("회원정보가 수정되었습니다.");
    } catch (error) {
      alert(`${error}`);
      console.error(error);
    }
  };

  // PUT - 비밀번호 저장 > 서버로 db보내기 --------------------------------------------------
  const onClickPWPutHandler = async () => {
    try {
      const response = await axios.put(
        `${serverUrl}/api/profile/modify/password`,
        {
          currentPassword: currentPassword,
          newPassword: newPassword,
        },
        {
          headers: { Authorization: `Bearer ${token}` }, // 로그인 여부 확인(토큰을 헤더에 추가)
        }
      );
      alert(response.data.data);
      console.log("비밀번호 수정", response.data.data);
      setCurrentPassword("");
      setNewPassword("");
      setCheckPassword("");
    } catch (error) {
      alert(`${error.response.data.data}`);
      console.error(error);
      setCurrentPassword("");
      setNewPassword("");
      setCheckPassword("");
    }
  };

  // 업로드 프로필이미지 state ---------------------------------------------------
  const [uploadProfile, setUploadProfile] = useState(null);

  // 업로드 프로필이미지 onchange ---------------------------------------------------
  const uploadImageHandler = (e) => {
    const image = e.target.files[0]; // 선택된 파일 가져오기
    console.log(`선택된 파일 이름: ${image.name}`);
    console.log(`선택된 파일 크기: ${image.size} bytes`);

    setUploadProfile(image);
    console.log("파일정보", image);
  };

  // PUT - 프로필 사진 저장
  const onClickProfileImage = async () => {
    const formData = new FormData();
    formData.append("image", uploadProfile);

    try {
      const response = await axios.put(
        `${serverUrl}/api/profile/updateImage`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // 로그인 여부 확인(토큰을 헤더에 추가)
            "Content-Type": "multipart/form-data", // 필수: FormData를 보낼 때 content type 설정
          },
        }
      );
      console.log("사진 업로드", response.data);
      setUploadProfile(null);
      myInfoGetHandler();
    } catch (error) {
      alert(`${error}`);
      console.error(error);
    }
  };

  console.log(uploadProfile)

  return (
    <div className=" h-full w-[1000px]">
      <p className="mt-[50px] ml-7 text-2xl font-black">내 정보 수정</p>

      <div className="my-6 mx-7 py-7 pl-7 pr-16 flex flex-col rounded-md bg-[#F9F5EB] shadow-lg">
        <div className="flex flex-row">
          <div className="mr-auto text-xl font-bold flex justify-start items-center">
            프로필 사진 변경하기
          </div>
          <div className="flex flex-row items-center">
            <input
              type="file"
              // 화면에서 안보이게!
              // style={{ display: 'none' }}
              onChange={uploadImageHandler}
              className="flex items-center"
            />

            <button
              type="button"
              onClick={onClickProfileImage}
              className="flex items-center w-[100px] h-[40px] my-2 ml-3 justify-center rounded-md bg-[#65451F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#564024] focus-visible:outline focus-visible:outline-2 "
            >
              사진 저장
            </button>
          </div>
        </div>
      </div>

      <div className="my-6 mx-7 py-7 pl-7 pr-16 flex flex-col rounded-md bg-[#F9F5EB] shadow-lg">
        <div className="flex flex-row">
          <div className="w-[150px] text-xl font-bold flex justify-center">
            회원정보
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-row mb-5">
              <p className="w-[100px] flex justify-start mx-3">닉네임</p>
              <input
                value={nickname}
                onChange={onChangeNickNameHandler}
                placeholder="닉네임 입력(2~10자)"
                maxLength={10}
                className="border flex items-center w-full px-3 rounded-md"
              />
            </div>
            <div className="flex flex-row">
              <p className="w-[100px] flex justify-start mx-3">이메일</p>
              <input
                value={email}
                onChange={onChangeEmailHandler}
                className="border flex items-center w-full px-3 rounded-md"
              />
            </div>
            <div>
              <p className="ml-[110px] my-2 text-red-600">{emailMessage}</p>
            </div>

            {/* 정치인 유저일때만 렌더링 */}
            {myInfoData.role !== "voterUser" ? (
              <>
                <div className="flex flex-row mt-3 mb-5">
                  <p className="w-[100px] flex justify-start mx-3">소속정당</p>
                  <div className="w-full">
                    <Listbox value={partyList} onChange={onChangePartyHandler}>
                      {({ open }) => (
                        <>
                          <div className="relative">
                            <Listbox.Button className="rounded-md relative w-full cursor-default bg-white text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2  sm:text-sm sm:leading-6">
                              <span className="flex items-center">
                                <span className="ml-3 block truncate">
                                  {partyList.party}
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
                                          ? "bg-[#65451F] text-white"
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
                                                : "text-[#65451F]",
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
                <div className="flex flex-row mb-5">
                  <p className="w-[100px] flex justify-start mx-3">지역</p>
                  <div className="w-full">
                    <Listbox
                      value={locationList}
                      onChange={onChangeLocateHandler}
                    >
                      {({ open }) => (
                        <>
                          <div className="relative">
                            <Listbox.Button className="rounded-md relative w-full cursor-default bg-white text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2  sm:text-sm sm:leading-6">
                              <span className="flex items-center">
                                <span className="ml-3 block truncate">
                                  {locationList.location}
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
                                          ? "bg-[#65451F] text-white"
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
                                                : "text-[#65451F]",
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
                <div className="flex flex-row mb-5">
                  <p className="w-[100px] flex justify-start mx-3">약력</p>
                  <input
                    value={profile}
                    onChange={onChangeProfileHandler}
                    placeholder=""
                    className="border flex items-center w-full h-[200px] px-3 rounded-md"
                  />
                </div>
              </>
            ) : null}
          </div>
        </div>
        <form className="flex flex-row justify-end">
          <button
            type="button"
            onClick={onClickInfoCancleHandler}
            className="flex items-center w-[100px] h-[40px] my-2 mx-3 justify-center rounded-md bg-[#65451F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#564024] 0"
          >
            취소
          </button>
          <button
            type="button"
            onClick={onSubmitInfoPutHandler}
            className="flex items-center w-[100px] h-[40px] my-2 ml-3 justify-center rounded-md bg-[#65451F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#564024] "
          >
            저장
          </button>
        </form>
      </div>

      <div className="my-6 mx-7 py-7 pl-7 pr-16 flex flex-col rounded-md bg-[#F9F5EB] shadow-lg">
        <div className="flex flex-row">
          <div className="w-[150px] text-xl font-bold flex justify-center">
            비밀번호
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-row pb-3">
              <p className="w-[200px] flex justify-start ml-3">현재 비밀번호</p>
              <input
                type="password"
                value={currentPassword}
                onChange={onChangeCurrentPwHandler}
                maxLength={20}
                className="rounded-md border flex items-center w-full px-3"
              />
            </div>
            <div>
              <p className="ml-[170px] my-2 text-red-600">{pwMessage}</p>
            </div>
            <div className="flex flex-row pb-3">
              <p className="w-[200px] flex justify-start ml-3">새 비밀번호</p>
              <input
                type="password"
                value={newPassword}
                onChange={onChangeNwePwHandler}
                maxLength={20}
                className="rounded-md border flex items-center w-full px-3"
              />
            </div>
            <div>
              <p className="ml-[170px] my-2 text-red-600">{newPwMessage}</p>
            </div>
            <div className="flex flex-row pb-3">
              <p className="w-[200px] flex justify-start ml-3">
                새 비밀번호 확인
              </p>
              <input
                type="password"
                value={checkPassword}
                onChange={onChangeCheckPwHandler}
                maxLength={20}
                className="rounded-md border flex items-center w-full px-3"
              />
            </div>
            <div>
              <p className="ml-[170px] my-2 text-red-600">{checkPwMessage}</p>
            </div>
          </div>
        </div>
        <form className="flex flex-row justify-end">
          <button
            type="button"
            onClick={onClickPWCancleHandler}
            className="flex items-center w-[100px] h-[40px] my-2 mx-3 justify-center rounded-md bg-[#65451F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#564024] focus-visible:outline focus-visible:outline-2 "
          >
            취소
          </button>
          <button
            type="button"
            onClick={onClickPWPutHandler}
            className="flex items-center w-[100px] h-[40px] my-2 ml-3 justify-center rounded-md bg-[#65451F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#564024] focus-visible:outline focus-visible:outline-2 "
          >
            저장
          </button>
        </form>
      </div>
    </div>
  );
}

export default MyInfomation;
