import React from 'react';

function ThreeColumnLayout() {
  return (
    <div className="flex">
      <div className="w-1/3 p-4 bg-gray-200"> {/* 첫 번째 컬럼 */}
        {/* 내용 */}
      </div>
      <div className="w-1/3 p-4 bg-gray-300"> {/* 두 번째 컬럼 */}
        {/* 내용 */}
      </div>
      <div className="w-1/3 p-4 bg-gray-400"> {/* 세 번째 컬럼 */}
        {/* 내용 */}
      </div>
    </div>
  );
}

export default ThreeColumnLayout;
