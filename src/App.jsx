import React, { useEffect, useState, useRef } from 'react';
import CTAGroup from './components/base/CTAGroup';
import SolutionSection from './components/modules/SolutionSection';
import MobileNavDrawer from './components/modules/MobileNavDrawer';
import ServiceSection from './components/modules/ServiceSection';
import ClientCasesSection from './components/modules/ClientCasesSection';
import CTAButton from './components/base/CTAButton';
import TestimonialSection from './components/modules/TestimonialSection';
import FAQSection from './components/modules/FAQSection';
import Footer from './components/modules/Footer';
import { motion } from "framer-motion";
import WechatQRModal from './components/base/WechatQRModal';

const navs = [
  { id: 'hero-section', label: '首页' },
  { id: 'solution-section', label: '方案' },
  { id: 'service-section', label: '产品' },
  { id: 'client-cases-section', label: '客户案例' },
  { id: 'testimonial-section', label: '客户评价' },
  { id: 'faq-section', label: 'FAQ' },
];

export default function App() {
  // 全局导航高亮状态
  const [activeNav, setActiveNav] = useState(navs[0].id);
  const [showWechatModal, setShowWechatModal] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // 全局滚动监听，动态高亮导航
  useEffect(() => {
    function onScroll() {
      const offsets = navs.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id, top: Math.abs(rect.top - (window.innerWidth < 768 ? 56 : 72)) };
      });
      const current = offsets.reduce((a, b) => (a.top < b.top ? a : b), offsets[0]);
      setActiveNav(current.id);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 导航点击跳转（桌面和移动端共用）
  const handleNavClick = (id) => {
    setActiveNav(id);
    setMobileNavOpen(false);
    const el = document.getElementById(id);
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 64;
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-[PingFang_SC] antialiased">
      {/* 导航栏可后续组件化 */}
      <header className="w-full fixed top-0 left-0 z-40 backdrop-blur-lg bg-white/70">
        <motion.nav
          className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.12 }
            }
          }}
          initial="hidden"
          animate="show"
        >
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            onClick={e => { e.preventDefault(); window.scrollTo(0,0); window.location.replace(window.location.pathname); }}
            variants={{
              hidden: { opacity: 0, x: -40 },
              show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
          >
            <img src="/assets/images/logo.png" alt="桐元科技 Logo" className="h-8 w-8 rounded-full object-cover shadow-sm group-hover:scale-105 transition" />
            <span className="text-lg font-semibold tracking-tight">桐元科技</span>
          </motion.a>
          <motion.ul
            className="hidden md:flex items-center gap-8 text-base font-semibold"
            variants={{
              hidden: { opacity: 0, x: 40 },
              show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
          >
            {navs.map(nav => (
              <li key={nav.id}>
                <button
                  className={
                    (activeNav === nav.id ? 'text-orange-500 ' : 'hover:text-gray-900 ') + 'transition bg-transparent border-0 outline-none cursor-pointer'
                  }
                  style={{ background: 'none' }}
                  onClick={() => handleNavClick(nav.id)}
                >
                  {nav.label}
                </button>
              </li>
            ))}
          </motion.ul>
          <motion.div
            className="md:hidden flex items-center"
            variants={{
              hidden: { opacity: 0, x: 40 },
              show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
          >
            {/* 移动端菜单按钮，始终显示 */}
            <button
              className="p-2 rounded-md hover:bg-gray-100"
              aria-label="Open menu"
              onClick={() => setMobileNavOpen(true)}
            >
              <img src="/assets/icon/menu-line.svg" alt="菜单" className="w-6 h-6" />
            </button>
            {/* 移动端抽屉，传递activeNav和setMobileNavOpen */}
            <MobileNavDrawer
              open={mobileNavOpen}
              setOpen={setMobileNavOpen}
              activeNav={activeNav}
              onNavClick={handleNavClick}
            />
          </motion.div>
        </motion.nav>
      </header>
      {/* Hero区块 */}
      <motion.section
        id="hero-section"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="relative w-full px-6 lg:px-0 pt-24 pb-56 lg:py-40 flex flex-col items-center text-center overflow-x-hidden bg-gradient-to-b from-white via-[#F5F7F9] to-gray-50 text-gray-900 "
      >
        <motion.span
          className="inline-flex items-center px-4 py-3 rounded-full bg-blue-100"
          variants={{
            hidden: { opacity: 0, y: -30 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          <span className="text-base font-semibold text-blue-500 leading-none">科技点亮心灵</span>
        </motion.span>
        <motion.h1
          className="font-semibold tracking-tight relative text-3xl sm:text-5xl md:text-6xl mt-10 leading-tight sm:leading-[72px] md:leading-[84px] flex flex-col items-center justify-center gap-1"
          style={{fontFamily:'Lexend,sans-serif',zIndex:1}}
          variants={{
            hidden: { opacity: 0, y: -30 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          <span className="flex items-center justify-center gap-2">
            <span className="gradient-animate-text">EEG脑电 + AI</span>
            <img src="/assets/images/hero-star.png" alt="star" className="inline-block align-middle w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 ml-2" style={{verticalAlign:'middle'}} />
          </span>
          <span>数字心理健康解决方案</span>
        </motion.h1>
        <motion.p
          className="max-w-2xl text-base md:text-lg text-gray-700 mt-8"
          variants={{
            hidden: { opacity: 0, y: -20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          专注于协助心理咨询、医疗、教育等机构围绕患者提供心理测量与干预服务
        </motion.p>
        <motion.div
          className="mt-12"
          variants={{
            hidden: { opacity: 0, y: -10 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          <CTAGroup
            onContact={() => setShowWechatModal(true)}
            onDownload={() => window.open('/assets/桐元心理健康方案.pdf')}
          />
        </motion.div>
        <motion.img
          src="/assets/images/hero-bg-line.png"
          alt=""
          aria-hidden="true"
          className="hero-bg-line pointer-events-none select-none absolute left-1/2 -translate-x-1/2 w-full max-w-none min-w-[600px] z-0"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        />
        <div className="absolute inset-x-0 bottom-8 flex justify-center z-10">
          <motion.button
            className="rounded-full p-2 hover:bg-gray-100 transition group animate-breath"
            aria-label="向下滚动"
            onClick={() => {
              const el = document.getElementById('solution-section');
              const header = document.querySelector('header');
              const headerHeight = header ? header.offsetHeight : 64;
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - headerHeight;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
            <img src="/assets/icon/arrow-down-s-line.svg" alt="向下" className="w-8 h-8" />
          </motion.button>
        </div>
      </motion.section>
      <section id="solution-section">
        <SolutionSection />
      </section>
      <section id="service-section">
        <ServiceSection />
      </section>
      <section id="client-cases-section">
        <ClientCasesSection />
      </section>
      <TestimonialSection />
      <FAQSection />
      <Footer />
      {/* 其他区块可继续组件化 */}
      {/* 新增：二维码弹窗 */}
      <WechatQRModal open={showWechatModal} onClose={() => setShowWechatModal(false)} />
      <style>{`
        .hero-bg-line {
          position: absolute;
          left: 50vw;
          transform: translateX(-50%);
          width: 100vw;
          height: auto;
          z-index: 0;
          max-width: none;
          min-width: 600px;
          pointer-events: none;
          top: 48%; /* 桌面端 */
        }
        @media (max-width: 640px) {
          .hero-bg-line {
            top: 35%; /* 手机端微调，确保在标题下方 */
          }
        }
        /* 新增：向下滚动按钮呼吸渐隐动画 */
        @keyframes breath {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .animate-breath {
          animation: breath 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 