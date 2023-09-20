import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTokenFromCookie, setCookie } from "../auth/cookie";

function Login() {
  // 페이지 연결 --------------------------------------------------
  const navigate = useNavigate();

  // 아이디/비번 state --------------------------------------------------
  const [inputId, setInputId] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const onChangeInputId = (e) => {
    setInputId(e.target.value);
  };
  const onChangeInputPassword = (e) => {
    setInputPassword(e.target.value);
  };

  useEffect(() => {
    const token = getTokenFromCookie();
    if (token) {
      alert("이미 로그인 했습니다.");
      navigate("/");
    }
  }, []);

  // 서버 연결하기 -----------------

  // POST - 로그인 클릭하면 실헹
  // 아이디/비번 post 보내기
  // 토큰 받아서 저장하기
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://52.79.240.177/api/user/login`, {
        username: inputId,
        password: inputPassword,
      });
      const token = response.headers.authorization.split(" ")[1];
      setCookie("token", token, 1 / 24); // 정수는 0일  1/24 는 1시간
      alert(`로그인완료`);
      navigate("/");
    } catch (error) {
      alert(`회원가입 실패 ${error}`);
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col px-6 py-12 lg:px-8 bg-[url('https://e1.pxfuel.com/desktop-wallpaper/145/675/desktop-wallpaper-pastel-gradient-pastel-colors.jpg')] bg-center bg-cover">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <p className="mt-24 text-center text-5xl font-bold leading-9 tracking-tight text-gray-900">
            Town Assembly
          </p>
        </div>

        <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={loginHandler}>
            <div>
              <div className="mt-3">
                <input
                  placeholder="아이디"
                  type="text"
                  value={inputId}
                  onChange={onChangeInputId}
                  className="h-12 mt-6 pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between"></div>
              <div>
                <input
                  placeholder="비밀번호"
                  type="password"
                  value={inputPassword}
                  onChange={onChangeInputPassword}
                  className="h-12 pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex justify-around">
              <button
                type="submit"
                className="h-12 pl-3 w-full flex mt-4 justify-center rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
              >
                로그인
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
