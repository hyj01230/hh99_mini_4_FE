import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Login() {

  // 페이지 연결 --------------------------------------------------
  const navigate = useNavigate();

  // 아이디/비번 state --------------------------------------------------
  const [inputId, setInputId] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const onChangeInputId = (e) => { setInputId(e.target.value); };
  const onChangeInputPassword = (e) => { setInputPassword(e.target.value); };


  // 서버 연결하기 -----------------

  // POST - 로그인 클릭하면 실헹
  // 아이디/비번 post 보내기
  // 토큰 받아서 저장하기

  // get

  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col px-6 py-12 lg:px-8 bg-[url('https://e1.pxfuel.com/desktop-wallpaper/145/675/desktop-wallpaper-pastel-gradient-pastel-colors.jpg')] bg-center bg-cover">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <p className="mt-24 text-center text-5xl font-bold leading-9 tracking-tight text-gray-900">
            Town Assembly
          </p>
        </div>

        <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6"
            onSubmit={(e) => {
              // 버튼 누를때 리프레시 막아줌
              e.preventDefault();
              // onSubmitHandler();
            }}>
            <div>
              {/* <label htmlFor="email" className="block text-lg font-black leading-6 text-gray-900">
                아이디
              </label> */}
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
              <div className="flex items-center justify-between">
                {/* <label htmlFor="password" className="mt-2 block text-lg font-black leading-6 text-gray-900">
                  비밀번호
                </label> */}
              </div>
              <di>
                <input
                  placeholder="비밀번호"
                  type="password"
                  value={inputPassword}
                  onChange={onChangeInputPassword}
                  className="h-12 pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </di>
            </div>

            <div className="flex justify-around">
              <button
                type="submit"
                className="h-12 pl-3 w-full flex mt-4 justify-center rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
              >
                로그인
              </button>
              {/* <button
                type="button"
                onClick={() => { navigate("/join") }}
                className="flex w-[150px] mt-4 justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                회원가입
              </button> */}
            </div>
          </form>

          {/* <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Start a 14 day free trial
          </a>
        </p> */}
        </div>
      </div>
    </>
  )
}

export default Login