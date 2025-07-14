import React, { useState } from 'react';

// 客户案例卡片组件，支持两张图片上下排列，卡片高度自适应内容
export default function ClientCaseCard({ imgList = [], title, descList }) {
  // 新增：控制图片预览弹窗的状态和当前预览图片索引
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewIdx, setPreviewIdx] = useState(0);

  // 预览弹窗组件
  function ImagePreviewModal({ open, img, onClose }) {
    if (!open) return null;
    return (
      <div className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-0 md:p-8" onClick={onClose}>
        {/* 阻止冒泡，点击图片或内容不关闭弹窗 */}
        <div className="relative w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
          {/* 关闭按钮，右上角浮动 */}
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-black/60 rounded-full flex items-center justify-center z-10"
            aria-label="关闭"
            onClick={onClose}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M7 7l10 10M17 7l-10 10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
            </svg>
          </button>
          {/* 全屏图片，竖屏高度100%，宽度自适应，横屏宽度100%，高度自适应，移动端自适应 */}
          <img
            src={img}
            alt="案例图片预览"
            className="max-h-[90vh] max-w-full w-auto h-auto object-contain rounded-2xl shadow-xl bg-white"
            style={{
              // 兼容移动端竖屏，优先撑满高度
              maxHeight: '90vh',
              maxWidth: '100vw',
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-[0_0_24px_rgba(0,0,0,0.02)] p-4 md:p-8 gap-8 w-full max-w-6xl items-start">
      {/* 左侧图片区，支持两张图片上下排列，容器宽度固定，高度自适应内容 */}
      <div className="w-full md:w-[400px] flex flex-col gap-4 mb-6 md:mb-0">
        {/* 遍历图片数组，最多显示两张图片，每张图片容器保持3:2比例 */}
        {imgList.slice(0, 2).map((img, idx) => (
          <div key={idx} className="aspect-[3/2] bg-[#f3f6f9] rounded-2xl flex items-center justify-center overflow-hidden cursor-zoom-in group" onClick={() => { setPreviewIdx(idx); setPreviewOpen(true); }}>
            {img ? (
              <img
                src={img}
                alt={title + ' 图片' + (idx + 1)}
                className="w-full h-full object-contain rounded-2xl transition-transform duration-200 group-hover:scale-105"
                style={{ objectFit: 'contain' }}
              />
            ) : null}
            {/* 蒙层提示 */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/10 rounded-2xl select-none pointer-events-none">
              <span className="text-white text-sm md:text-base">点击全屏查看</span>
            </div>
          </div>
        ))}
      </div>
      {/* 右侧内容区 */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-3xl md:text-3xl font-bold mb-4 text-gray-800">{title}</div>
        {descList && descList.map((desc, i) => (
          <div key={i} className={"text-gray-700 text-base md:text-lg leading-relaxed" + (i < descList.length - 1 ? " mb-2" : "")}>{desc}</div>
        ))}
      </div>
      {/* 全屏图片预览弹窗，点击图片外区域或关闭按钮关闭 */}
      <ImagePreviewModal open={previewOpen} img={imgList[previewIdx]} onClose={() => setPreviewOpen(false)} />
    </div>
  );
} 