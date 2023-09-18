import React from 'react'

// 마이페이지 - 내 정보

function Mypage_Info() {

  return (
    <div className=' h-screen w-[1000px] flex flex-col justify-start items-center'>
      <div className=' h-[240px] w-[950px] p-3 mt-[50px] border-2 flex flex-row justify-start items-center'>
        <div className=' h-full w-[200px] mt-5 text-center text-lg font-black'>
          회원 정보
        </div>
        <div className=' h-full w-full'>
          <div className='h-1/3 mr-5 flex flex-row justify-start items-center'>
            <p className='w-[150px] pl-2'>이름</p>
            <input
              className='border h-[40px] w-full mr-3' />
          </div>
          <div className='h-1/3 mr-5 flex flex-row justify-start items-center'>
            <p className='w-[150px] pl-2'>전화번호</p>
            <input
              className='border h-[40px] w-full mr-3' />
          </div>
          <div className='h-1/3 mr-5 flex flex-row justify-end items-center'>
            <button
              type="submit"
              className="flex items-center w-[100px] h-[40px] my-2 mx-3 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              취소
            </button>
            <button
              type="submit"
              className="flex items-center w-[100px] h-[40px] my-2 mx-3 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              저장
            </button>
          </div>
        </div>
      </div>
      <div className=' h-[300px] w-[950px] p-3 m-5 border-2 flex flex-row justify-start items-center'>
        <div className=' h-full w-[200px] mt-5 text-center text-lg font-black'>
          비밀번호
        </div>
        <div className=' h-full w-full'>
          <div className='h-1/4 mr-5 flex flex-row justify-start items-center'>
            <p className='w-[185px] pl-2'>현재 비밀번호</p>
            <input
              className='border h-[40px] w-full mr-3' />
          </div>
          <div className='h-1/4 mr-5 flex flex-row justify-start items-center'>
            <p className='w-[185px] pl-2'>새 비밀번호</p>
            <input
              className='border h-[40px] w-full mr-3' />
          </div>
          <div className='h-1/4 mr-5 flex flex-row justify-start items-center'>
            <p className='w-[185px] pl-2'>새 비밀번호 확인</p>
            <input
              className='border h-[40px] w-full mr-3' />
          </div>
          <div className='h-1/4 mr-5 flex flex-row justify-end items-center'>
          <button
              type="submit"
              className="flex items-center w-[100px] h-[40px] my-2 mx-3 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              취소
            </button>
            <button
              type="submit"
              className="flex items-center w-[100px] h-[40px] my-2 mx-3 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              저장
            </button>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Mypage_Info