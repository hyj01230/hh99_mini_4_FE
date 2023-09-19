import React, { useState } from 'react'

// 마이페이지 - 내 정보

function Mypage_Info() {

  // 전화번호
  const [phoneNum, setPhoneNum] = useState('')
  const onChangePhoneNumHandler = (e) => {
    const inputValue = e.target.value;
    // 번화번호 형식 정규식!
    const formattedValue = inputValue.replace(/[^0-9]/g, '').replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
    setPhoneNum(formattedValue);
  };

  // 비밀번호
  const [currentPassword, setCurrentPassword] = useState("");
  const [nwePassword, setNewPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const onChangeCurrentPwHandler = (e) => { setCurrentPassword(e.target.value) }
  const onChangeNwePwHandler = (e) => { setNewPassword(e.target.value) }
  const onChangeCheckPwHandler = (e) => { setCheckPassword(e.target.value) }



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
              value={'회원 이름 가져와서 고정!'}
              disabled
              className='border h-[40px] w-full mr-3 p-3' />
          </div>
          <div className='h-1/3 mr-5 flex flex-row justify-start items-center'>
            <p className='w-[150px] pl-2'>전화번호</p>
            <input
              value={phoneNum}
              onChange={onChangePhoneNumHandler}
              placeholder='010-1234-5678'
              maxLength={13}
              className='border h-[40px] w-full mr-3 p-3' />
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
              type='password'
              value={currentPassword}
              onChange={onChangeCurrentPwHandler}
              maxLength={20}
              className='border h-[40px] w-full mr-3 p-3' />
          </div>
          <div className='h-1/4 mr-5 flex flex-row justify-start items-center'>
            <p className='w-[185px] pl-2'>새 비밀번호</p>
            <input
              type='password'
              value={nwePassword}
              onChange={onChangeNwePwHandler}
              maxLength={20}
              className='border h-[40px] w-full mr-3 p-3' />
          </div>
          <div className='h-1/4 mr-5 flex flex-row justify-start items-center'>
            <p className='w-[185px] pl-2'>새 비밀번호 확인</p>
            <input
              type='password'
              value={checkPassword}
              onChange={onChangeCheckPwHandler}
              maxLength={20}
              className='border h-[40px] w-full mr-3 p-3' />
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