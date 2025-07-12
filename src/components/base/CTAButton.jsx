import React from 'react';

/**
 * 通用CTA按钮组件
 * @param {string} children 按钮文本
 * @param {string} type 按钮类型 primary/secondary
 * @param {function} onClick 点击事件
 * @param {string} className 额外样式
 * @param {React.ReactNode} icon 可选icon
 */
export default function CTAButton({ children, type = 'primary', onClick, className = '', icon, ...rest }) {
  const base =
    'w-[130px] py-3 font-semibold transition-all duration-200 focus:outline-none';
  const primary =
    'rounded-[7px] bg-gradient-to-r from-[#FFC16B] to-[#E55336] text-white shadow-[0_0_16px_0_rgba(243,140,81,0.5)] hover:from-[#FFD59B] hover:to-[#F36B36]';
  const secondary =
    'rounded-[7px] bg-white border border-[#FFC16B] text-[#E55336] hover:bg-[#FFF6ED] shadow-[0_0_16px_0_rgba(243,140,81,0.15)]';
  const style = `${base} ${type === 'primary' ? primary : secondary} ${className}`;
  return (
    <button className={style + ' relative overflow-hidden group'} onClick={onClick} {...rest}>
      {/* 反光动画层，仅primary显示 */}
      {type === 'primary' && (
        <span
          className="pointer-events-none absolute left-[-100%] top-0 h-full w-2/3 opacity-0 group-hover:opacity-100 group-hover:animate-shine"
          aria-hidden="true"
          style={{
            background: 'linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 40%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.5) 60%, rgba(255,255,255,0) 100%)',
            filter: 'blur(1px)',
          }}
        />
      )}
      {type === 'secondary' && icon && (
        <span className="mr-2 inline-flex align-middle">{icon}</span>
      )}
      {children}
      <style>{`
        @keyframes shine {
          0% {
            left: -60%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          60% {
            opacity: 1;
          }
          100% {
            left: 120%;
            opacity: 0;
          }
        }
        .group:hover .group-hover\\:animate-shine {
          animation: shine 0.2s cubic-bezier(.4,0,.2,1);
        }
      `}</style>
    </button>
  );
} 