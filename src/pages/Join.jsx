import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar'

function Join() {

  // 아디/비번 state
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const onChangeIdHandler = (e) => { setId(e.target.value) };
  const onChangePasswordHandler = (e) => { setPassword(e.target.value) };
  const onChangeCheckPasswordHandler = (e) => { setCheckPassword(e.target.value) };

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
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-lg font-black leading-6 text-gray-900">
                아이디
              </label>
              <div className="mt-3">
                <input
                  placeholder="아이디 입력(6~20자)"
                  // id="text"
                  // name="text"
                  type="text"
                  // autoComplete="text"
                  // required
                  value={id}
                  onChange={onChangeIdHandler}
                  className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="mt-2 block text-lg font-black leading-6 text-gray-900">
                  비밀번호
                </label>
                {/* <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div> */}
              </div>
              <div className="mt-3">
                <input
                  placeholder="비밀번호 입력(문자, 숫자, 특수문자 포함 8~20자)"
                  // id="password"
                  // name="password"
                  type="password"
                  // autoComplete="current-password"
                  // required
                  value={password}
                  onChange={onChangePasswordHandler}
                  className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="mt-2 block text-lg font-black leading-6 text-gray-900">
                  비밀번호 확인
                </label>
                {/* <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div> */}
              </div>
              <div className="mt-3 mb-9">
                <input
                  placeholder="비밀번호 재입력"
                  // id="password"
                  // name="password"
                  type="password"
                  // autoComplete="current-password"
                  // required
                  value={checkPassword}
                  onChange={onChangeCheckPasswordHandler}
                  className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className='bg-slate-100 rounded-md p-4'>
              <div className="flex items-center">
                <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                <label htmlFor="password" className="pl-3 block text-lg font-black leading-6 text-gray-900">
                  정치인 회원입니다
                </label>

                {/* <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div> */}
              </div>

            </div>

            <form className='flex justify-center'>
              <button
                type="submit"
                className="mt-4 flex w-[150px] justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                가입하기
              </button>
            </form>
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

export default Join