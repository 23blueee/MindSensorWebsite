import React from 'react';

export default function ClientCaseCard({ img, title, descList }) {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-[0_0_24px_rgba(0,0,0,0.02)] p-4 md:p-8 gap-8 w-full max-w-6xl items-start">
      {/* 左侧图片 */}
      <div className="w-full md:w-[480px] h-[320px] bg-[#f3f6f9] rounded-2xl flex items-center justify-center mb-6 md:mb-0">
        {img ? <img src={img} alt={title} className="w-full h-full object-contain rounded-2xl" /> : null}
      </div>
      {/* 右侧内容 */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-2xl md:text-2xl font-bold mb-4 text-gray-800">{title}</div>
        {descList && descList.map((desc, i) => (
          <div key={i} className={"text-gray-700 text-base md:text-lg leading-relaxed" + (i < descList.length - 1 ? " mb-2" : "")}>{desc}</div>
        ))}
      </div>
    </div>
  );
} 