import React, { useState } from 'react'

// 시민 - 댓글관리 양식

function TodayComment() {

  const Comment = [
    { id: 1, title: "제목입니다", contents: "이건 내용이에요", isDelete: false },
    { id: 2, title: "제목2", contents: "내용2", isDelete: false },
    { id: 3, title: "제목3", contents: "내용3", isDelete: false },
    { id: 4, title: "제목4", contents: "내용4", isDelete: false },
    { id: 5, title: "제목5", contents: "내용5", isDelete: false },
    { id: 6, title: "제목6", contents: "내용6", isDelete: false },
  ];

  // 댓글 수정을 위한 상태 변수 정의
  const [editingComment, setEditingComment] = useState(null);
  console.log(editingComment)

  const handleTitleChange = (event, comment) => {
    // 댓글의 제목을 업데이트
    const updatedComment = { ...comment, title: event.target.value };
    setEditingComment(updatedComment);
  };

  const handleContentsChange = (event, comment) => {
    // 댓글의 내용을 업데이트
    const updatedComment = { ...comment, contents: event.target.value };
    setEditingComment(updatedComment);
  };


  return (
    <div className=' h-full w-[1000px]'>
      <p className='mt-[50px] ml-7 text-2xl font-black'>오늘의 한마디 댓글</p>

      {/* 맵으로 돌려서 뽑기!!! */}
      {Comment.map((item) => (
        <div className='bg-slate-300 my-6 mx-7 p-7' key={item.id}>
          <div className='flex flex-row pb-4'>
            <p className='text-lg font-bold'>제목</p>
            <input
              value={editingComment?.id === item.id ? editingComment.title : item.title}
              onChange={(e) => handleTitleChange(e, item)}
              placeholder='제목'
              type="text"
              className='rounded-md mx-3 flex-grow h-8 px-2'
            />
          </div>
          <div className='flex flex-row pb-4'>
            <p className='text-lg font-bold'>내용</p>
            <input
              value={editingComment?.id === item.id ? editingComment.contents : item.contents}
              onChange={(e) => handleContentsChange(e, item)}
              placeholder='내용'
              type="text"
              className='rounded-md mx-3 flex-grow h-20 p-2'
            />
          </div>
          <div className='flex justify-end'>
            <button
              type="submit"
              className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              저장
            </button>
            {/* 수정 버튼 클릭 시 활성화, 저장 버튼 클릭 시 수정 완료 */}
            {editingComment?.id === item.id ? (
              <button
                type="button"
                className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                취소
              </button>
            ) : (
              <button
                type="button"
                className="mr-3 flex items-center w-[100px] h-[30px] justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                수정
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default TodayComment