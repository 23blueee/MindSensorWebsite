import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function ServiceSection() {
  return (
    <motion.section
      className="w-full px-0 py-16 flex flex-col items-center gap-8"
      style={{ background: 'linear-gradient(90deg, #FFF 0%, #F5F6F7 60%, #F5F6F7 100%)' }}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-full max-w-full xl:max-w-[calc(100vw-600px)] mx-auto px-4 sm:px-6 lg:px-24">
        <motion.div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full" variants={containerVariants}>
          <motion.div className="flex-1 flex flex-col items-center lg:items-start gap-2 lg:max-w-xl" variants={itemVariants}>
            <motion.h2
              className="text-3xl md:text-4xl leading-[56px] md:leading-[56px] font-semibold tracking-tight text-center lg:text-left"
              variants={itemVariants}
            >
              硬件+软件<br />
              完整的产品闭环
            </motion.h2>
            <motion.p className="text-gray-500 text-base md:text-lg text-center lg:text-left" variants={itemVariants}>
              意念精灵 MindSensor 智能头环，通过 EEG+AI 数字心理健康方案，构建从测量、分析到干预的闭环系统。
            </motion.p>
          </motion.div>
          <motion.div className="flex-1 w-full lg:w-auto flex justify-center" variants={itemVariants}>
            <img 
              src="/assets/images/product.png" 
              alt="意念精灵 MindSensor 产品图" 
              className="w-full max-w-[540px] h-auto aspect-square object-contain" 
            />
          </motion.div>
        </motion.div>
        {/* 新增两张报告图片及配文 */}
        <motion.div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 mt-8" variants={containerVariants}>
          <motion.div className="flex flex-col items-center max-w-md" variants={itemVariants}>
            <img 
              src="/assets/images/report-1.png" 
              alt="脑电监测报告" 
              className="w-full max-w-[180px] object-contain mb-8" 
            />
            <p className="text-gray-600 text-base md:text-base text-center">
              设备可实时监测并精准量化大脑活动状态，包含放松指数、专注指数、压力水平、原始脑电数据等核心脑电生理参数。
            </p>
          </motion.div>
          <motion.div className="flex flex-col items-center max-w-md" variants={itemVariants}>
            <img 
              src="/assets/images/report-2.png" 
              alt="AI分析报告" 
              className="w-full max-w-[180px] object-contain mb-8" 
            />
            <p className="text-gray-600 text-base md:text-base text-center">
              结合 AI 算法自动生成个性化分析报告，为用户提供科学、安全的智能化干预服务，支持用户持续改善心理健康和认知状态。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
} 