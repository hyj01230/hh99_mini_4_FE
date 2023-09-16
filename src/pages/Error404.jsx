import React from 'react'
import { useNavigate } from 'react-router'

function Error404() {
  const navigate = useNavigate();
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 bg-slate-300">
        <div className="text-center">
          <p className="text-base font-semibold text-red-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">잘못된 경로입니다.</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">해당 게시글이 삭제 또는 비공개처리 되었을 수 있습니다. <br />다른 게시글을 찾아보시거나 이전 페이지로 이동하세요.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button onClick={() => {navigate(-1)}}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              뒤로가기
            </button>

          </div>
        </div>
      </main>
  )
}
export default Error404