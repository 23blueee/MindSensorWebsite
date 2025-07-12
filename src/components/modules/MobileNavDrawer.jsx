import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const navs = [
  { id: 'hero-section', label: '首页' },
  { id: 'solution-section', label: '方案' },
  { id: 'service-section', label: '产品' },
  { id: 'client-cases-section', label: '客户案例' },
  { id: 'testimonial-section', label: '客户评价' },
  { id: 'faq-section', label: 'FAQ' },
];

/**
 * @param {boolean} open 抽屉是否打开
 * @param {function} setOpen 控制抽屉开关
 * @param {string} activeNav 当前高亮导航id
 * @param {function} onNavClick 点击导航回调
 */
export default function MobileNavDrawer({ open, setOpen, activeNav, onNavClick }) {
  // 动画期间挂载，shouldRenderDrawer: 是否渲染内容
  const [isMounted, setIsMounted] = React.useState(false);
  const [shouldRenderDrawer, setShouldRenderDrawer] = React.useState(false);

  // 打开时立即挂载并渲染
  useEffect(() => {
    if (open) {
      setIsMounted(true);
      setShouldRenderDrawer(true);
    }
  }, [open]);

  // 禁止页面滚动
  useEffect(() => {
    if (isMounted) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMounted]);

  // 动画结束事件处理，关闭时卸载抽屉并彻底阻断渲染
  const handleAnimationEnd = (e) => {
    if (!open && e.animationName === 'slideOutRight') {
      setIsMounted(false);
      setTimeout(() => setShouldRenderDrawer(false), 0); // 下一帧彻底阻断渲染，防止闪烁
    }
  };

  // 遮罩层和抽屉内容
  const drawer = (
    <div className="fixed inset-0 z-[1000] flex">
      {/* 遮罩层 */}
      <div
        className={
          // 遮罩层淡入淡出动画，open为true时opacity-100，否则opacity-0
          "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200 " +
          (open ? "opacity-100" : "opacity-0")
        }
        onClick={() => setOpen(false)}
      />
      {/* 抽屉内容 */}
      <nav
        className={
          // 只用动画类控制transform，去除静态transform，避免冲突
          "relative ml-auto w-64 h-full min-h-screen bg-white shadow-2xl border-l border-gray-200 px-6 flex flex-col gap-6 rounded-l-xl pt-16 " +
          (open ? "animate-slideInRight" : "animate-slideOutRight")
        }
        onClick={e => e.stopPropagation()}
        onAnimationEnd={handleAnimationEnd}
      >
        <button
          className="self-end bg-gray-100 mb-4 w-12 h-12 bg-black/12 rounded-full text-black"
          aria-label="关闭菜单"
          onClick={() => setOpen(false)}
        >
          <span className="text-2xl">×</span>
        </button>
        {navs.map(nav => (
          <button
            key={nav.id}
            className={
              'text-lg font-semibold text-left transition py-2 ' +
              (activeNav === nav.id ? 'text-orange-500' : 'text-gray-800 hover:text-orange-500')
            }
            style={{ background: 'none', border: 0, outline: 'none' }}
            onClick={() => onNavClick(nav.id)}
            aria-current={activeNav === nav.id ? 'page' : undefined}
          >
            {nav.label}
          </button>
        ))}
      </nav>
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slideInRight {
          animation: slideInRight 0.3s cubic-bezier(.4,0,.2,1);
        }
        @keyframes slideOutRight {
          from { transform: translateX(0); }
          to { transform: translateX(100%); }
        }
        .animate-slideOutRight {
          animation: slideOutRight 0.3s cubic-bezier(.4,0,.2,1);
          animation-fill-mode: forwards; /* 保证动画结束后停留在终点，彻底防止闪烁 */
        }
      `}</style>
    </div>
  );

  return shouldRenderDrawer ? createPortal(drawer, document.body) : null;
} 