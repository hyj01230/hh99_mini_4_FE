import React from 'react'

function UserCitizen() {
  return (
    <div className="flex w-[1300px] mx-auto">
      <div className="w-[350px] h-screen bg-gray-200">
        <div className="flex flex-col justify-center items-center -space-x-1 overflow-hidden">
          <label className="block text-2xl mt-10 font-black leading-10 text-gray-900">
            마이페이지
          </label>
          <img
            className="inline-block h-[230px] w-[230px] rounded-full mt-5"
            src="https://i.namu.wiki/i/HfPaXJ6qhoBdHtpSh_ivra2eGF8z04V9kmd93toYyzhxaQoKvBfXF6VZ5-zcTLRYFpcT8aS_IjhBtdntFeHP-eHdcWYJQHIUQxCB3fzTvokwitrLW9Y4P2jWWRc4P9mMjvkoZFJno3slsPX8cZMCvg.webp"
            alt=""
          />
          <button
            type="button"
            className="rounded-md mt-5 bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            수정하기
          </button>
          <button
            type="submit"
            className="flex items-center w-[200px] h-[50px] mt-4 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            내 정보
          </button>
          <button
            type="submit"
            className="flex items-center w-[200px] h-[50px] mt-4 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            댓글 관리
          </button>
          <button
            type="submit"
            className="flex items-center w-[200px] h-[50px] mt-4 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            팔로우 관리
          </button>
        </div>
      </div>

      

    </div>
  )
}

export default UserCitizen