import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getTokenFromCookie, setCookie } from "../auth/cookie";
import { titleStyle } from "../styles/fonsts";

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
    console.log(inputId, inputPassword)
    try {
      const response = await axios.post(`http://52.79.240.177/api/user/login`, {
        username: inputId,
        password: inputPassword,
      });
      console.log(response)
      const token = response.headers.authorization.split(" ")[1];
      setCookie("token", token, 1 / 24); // 정수는 0일  1/24 는 1시간
      alert(`로그인완료`);
      navigate("/");
    } catch (error) {
      alert(`로그인 실패 ${error.message}`);
      console.error(error);
    }
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center p-6 bg-[#F9F5EB]">
        <div className="flex flex-row">
          <p style={titleStyle} className="px-3 text-center text-[55px] font-bold text-[#65451F] cursor-pointer " onClick={() => { navigate('/') }}>
            Town
          </p>
          <p style={titleStyle} className="px-3 text-center text-[55px] font-bold text-[#65451F] cursor-pointer" onClick={() => { navigate('/') }}>
            Assembly
          </p>
        </div>

        <div className="bg-white w-[500px] p-12 rounded-md mt-10">
          <form className="space-y-6" onSubmit={loginHandler}>
            <div>
              <div>
                <input
                  placeholder="아이디"
                  type="text"
                  value={inputId}
                  onChange={onChangeInputId}
                  className="h-12 pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#65451F] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-8 flex items-center justify-between"></div>
              <div>
                <input
                  placeholder="비밀번호"
                  type="password"
                  value={inputPassword}
                  onChange={onChangeInputPassword}
                  className="h-12 pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#65451F] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="mt-[30px] flex flex-col">
              <button
                type="submit"
                className="h-12 pl-3 w-full flex mt-3 justify-center rounded-md bg-[#65451F] px-3 py-2 text-base items-center font-semibold leading-6 text-white shadow-sm "
              >
                로그인
              </button>
            </div>
            <div className="flex flex-row justify-center">
              <p className="text-lg mt-2">아직 회원이 아니신가요?</p>
              <Link to="/join" className="text-lg ml-3 mt-2 font-bold">회원가입</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
