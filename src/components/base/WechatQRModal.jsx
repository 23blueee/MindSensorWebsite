import React from 'react';

/**
 * 微信二维码弹窗组件
 * @param {boolean} open 是否显示弹窗
 * @param {function} onClose 关闭弹窗回调
 */
export default function WechatQRModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/30 backdrop-blur-sm p-6">
      <div className="flex flex-col items-end w-full max-w-[480px]">
        {/* 关闭按钮，右对齐，不重叠卡片 */}
        <button
          className="mb-4 w-12 h-12 bg-black/55 rounded-full flex items-center justify-center"
          aria-label="关闭"
          onClick={onClose}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 7l10 10M17 7l-10 10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
          </svg>
        </button>
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 w-full flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4">微信扫描二维码</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* 公众号二维码 */}
            <div className="flex flex-col items-center">
              <img src="/assets/images/wechat-official-qr.png" alt="公众号二维码" className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] rounded-lg border border-gray-200 object-cover" />
              <span className="text-xs text-gray-500 mt-1">公众号</span>
            </div>
            {/* 个人微信二维码 */}
            <div className="flex flex-col items-center">
              <img src="/assets/images/wechat-personal-qr.png" alt="个人微信二维码" className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] rounded-lg border border-gray-200 object-cover" />
              <span className="text-xs text-gray-500 mt-1">个人微信</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 