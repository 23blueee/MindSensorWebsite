import React from 'react';

/**
 * SolutionCard 方案卡片组件
 * @param {string} text 主要内容
 * @param {React.ReactNode} icon 可选icon
 * @param {string} title 可选标题
 * @param {boolean} onlyText 是否纯文字卡片
 * @param {string} className 额外样式
 */
export default function SolutionCard({ text, icon, title, onlyText = false, className = '' }) {
  return onlyText ? (
    <div className={`bg-slate-100 rounded-[16px] p-6 flex items-center h-full ${className}`}>
      <p className="text-black/80 text-base leading-6">{text}</p>
    </div>
  ) : (
    <div className={`bg-slate-100 rounded-[16px] p-6 flex items-start gap-6 ${className}`}>
      {icon && <div className="shrink-0 rounded-lg bg-blue-500 p-2">{icon}</div>}
      <div className="space-y-3">
        {title && <h3 className="text-lg font-semibold leading-6 tracking-tight text-gray-900">{title}</h3>}
        <p className="text-gray-700 text-base leading-6">{text}</p>
      </div>
    </div>
  );
} 