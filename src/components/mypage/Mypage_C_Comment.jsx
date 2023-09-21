import React from 'react'

// 시민 - 댓글관리 양식

function Mypage_C_Comment() {

  const cComment = [
    { id: 1, title: "제목입니다", contents: "이건 내용이에요" },
    { id: 2, title: "제목2", contents: "내용2" },
    { id: 3, title: "제목3", contents: "내용3" },
    { id: 4, title: "제목4", contents: "내용4" },
    { id: 5, title: "제목5", contents: "내용5" },
    { id: 6, title: "제목6", contents: "내용6" },
  ];

  return (
    <div className=' h-full w-[1000px]'>
      <p className='mt-[50px] ml-7 text-2xl font-black'>나의 댓글</p>

      {/* 맵으로 돌려서 뽑기!!! */}
      {cComment.map((item) => (
        <div className='bg-slate-300 my-6 mx-7 p-7' key={item.id}>
          <div className='flex flex-row pb-4'>
            <p className='text-lg font-bold'>제목</p>
            <input value={item.title} placeholder='제목' type="text" className='rounded-md mx-3 flex-grow h-8 px-2' />
          </div>
          <div className='flex flex-row pb-4'>
            <p className='text-lg font-bold'>내용</p>
            <input value={item.contents} placeholder='내용' type="text" className='rounded-md mx-3 flex-grow h-20 p-2' />
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
      ))}
    </div>
  )
}

export default Mypage_C_Comment