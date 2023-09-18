import React from 'react'

// 시민 - 댓글관리 양식

function Mypage_C_Comment() {


  return (
    <div className=' h-screen w-[1000px]'>
      <p className='mt-[50px] ml-7 text-2xl font-black'>나의 댓글</p>

      {/* 맵으로 돌려서 뽑기!!! */}
      <div className='bg-slate-300 my-6 mx-7 p-7'>
        <div className='flex flex-row pb-4'>
          <p className='text-lg font-bold'>제목</p>
          <input placeholder='제목1' type="text" className='rounded-md mx-3 flex-grow h-8 px-2' />
        </div>
        <div className='flex flex-row pb-4'>
          <p className='text-lg font-bold'>내용</p>
          <input placeholder='내용1' type="text" className='rounded-md mx-3 flex-grow h-20 p-2' />
        </div>
        <div className='flex justify-end'>
          <button
            type="submit"
            className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            삭제</button>
          <button
            type="submit"
            className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            수정</button>
        </div>
      </div>

      <div className='bg-slate-300 my-6 mx-7 p-7'>
        <div className='flex flex-row pb-4'>
          <p className='text-lg font-bold'>제목</p>
          <input placeholder='제목2' type="text" className='rounded-md mx-3 flex-grow h-8 px-2' />
        </div>
        <div className='flex flex-row pb-4'>
          <p className='text-lg font-bold'>내용</p>
          <input placeholder='내용2' type="text" className='rounded-md mx-3 flex-grow h-20 p-2' />
        </div>
        <div className='flex justify-end'>
          <button
            type="submit"
            className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            삭제</button>
          <button
            type="submit"
            className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            수정</button>
        </div>
      </div>

      <div className='bg-slate-300 my-6 mx-7 p-7'>
        <div className='flex flex-row pb-4'>
          <p className='text-lg font-bold'>제목</p>
          <input placeholder='제목3' type="text" className='rounded-md mx-3 flex-grow h-8 px-2' />
        </div>
        <div className='flex flex-row pb-4'>
          <p className='text-lg font-bold'>내용</p>
          <input placeholder='내용3' type="text" className='rounded-md mx-3 flex-grow h-20 p-2' />
        </div>
        <div className='flex justify-end'>
          <button
            type="submit"
            className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            삭제</button>
          <button
            type="submit"
            className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            수정</button>
        </div>
      </div>
    </div>





  )
}

export default Mypage_C_Comment