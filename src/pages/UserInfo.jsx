import React from 'react'
import Navbar from '../components/Navbar'

function UserInfo() {
  return (
    <>
      <Navbar />
      <div className="flex w-[1300px] mx-auto">
        <div className="w-1/3 h-screen bg-gray-200">
          <div className="flex justify-center -space-x-1 overflow-hidden">
            <img
              className="inline-block h-[230px] w-[230px] rounded-full mt-10"
              src="https://i.namu.wiki/i/HfPaXJ6qhoBdHtpSh_ivra2eGF8z04V9kmd93toYyzhxaQoKvBfXF6VZ5-zcTLRYFpcT8aS_IjhBtdntFeHP-eHdcWYJQHIUQxCB3fzTvokwitrLW9Y4P2jWWRc4P9mMjvkoZFJno3slsPX8cZMCvg.webp"
              alt=""
            />
          </div>
        </div>
        <div className="w-2/3 h-screen bg-gray-300">
          {/* 내용 */}
        </div>
      </div>
    </>
  )
}

export default UserInfo