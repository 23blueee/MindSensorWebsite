import React from 'react';
import SolutionCard from './SolutionCard';
import { motion } from 'framer-motion';

const iconBg = 'bg-[#377DFF] p-3 rounded-lg flex items-center justify-center';
const iconClass = 'w-7 h-7 filter invert brightness-200';

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

export default function SolutionSection() {
  return (
    <motion.section
      className="mx-auto max-w-7xl px-6 lg:px-24 mt-16 flex flex-col items-center gap-2"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl leading-[56px] md:leading-[84px] font-semibold tracking-tight text-center mb-4"
        variants={itemVariants}
      >
        一套科学闭环的方案
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-8 w-full"
        variants={containerVariants}
      >
        {/* Row 1 */}
        <motion.div variants={itemVariants}>
          <SolutionCard
            onlyText
            text="抑郁、焦虑、注意力障碍等问题高发，测量门槛高，治疗效率低"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SolutionCard
            icon={
              <span className={iconBg}>
                <img src="/assets/icon/remote-control-fill.svg" alt="采集" className={iconClass} />
              </span>
            }
            title="采集"
            text="非侵入式EEG设备 + 心理量表测量，对用户心理状态进行标准化数字建模和监督训练"
          />
        </motion.div>
        {/* Row 2 */}
        <motion.div variants={itemVariants}>
          <SolutionCard
            onlyText
            text="心理干预缺乏实时量化，干预方案主观、碎片、低标准化"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SolutionCard
            icon={
              <span className={iconBg}>
                <img src="/assets/icon/flower-fill.svg" alt="干预" className={iconClass} />
              </span>
            }
            title="干预"
            text="结合 CBT 原理，推荐正念 / 音乐疗法等精准方案"
          />
        </motion.div>
        {/* Row 3 */}
        <motion.div variants={itemVariants}>
          <SolutionCard
            onlyText
            text="行业处于从“人工经验导向”向“AI智能导向”的转型期"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SolutionCard
            icon={
              <span className={iconBg}>
                <img src="/assets/icon/sparkling-2-fill.svg" alt="AI" className={iconClass} />
              </span>
            }
            title="AI"
            text="通过数据优化测量及训练方案，结合 AI 分析，持续提升整体效果"
          />
        </motion.div>
      </motion.div>
      <motion.img
        src="/assets/images/Solution.png"
        alt="方案流程图"
        className="w-full max-w-[600px] mx-auto h-auto object-contain"
        variants={itemVariants}
      />
    </motion.section>
  );
} 