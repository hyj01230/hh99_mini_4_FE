import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Join() {
  const serverUrl = process.env.REACT_APP_API_URL;

  // ID/PW 입력값 state
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [isPolitician, setIsPolitician] = useState(false); // 체크박스 상태
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
    console.log(e);
    console.log(id, password);
    try {
      const response = await axios.post(`${serverUrl}/user/signup`, {
        voterId: id,
        voterPw: password,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-5 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Town Assembly
          </h2>
        </div>

        <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onJoinButtonClick}>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-black leading-6 text-gray-900"
              >
                아이디
              </label>
              <p className="my-2 text-red-600">{idMessage}</p>
              <div className="mt-3">
                <input
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
                  htmlFor="password"
                  className="mt-2 block text-lg font-black leading-6 text-gray-900"
                >
                  비밀번호 확인
                </label>
                <p className="my-2 text-red-600">{pwCheckMessage}</p>
              </div>
              <div className="mt-3 mb-9">
                <input
                  placeholder="비밀번호 재입력"
                  type="password"
                  value={checkPassword}
                  onChange={onChangeCheckPasswordHandler}
                  maxLength={20}
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
                  htmlFor="password"
                  className="pl-3 block text-lg font-black leading-6 text-gray-900"
                >
                  정치인 회원입니다
                </label>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
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
