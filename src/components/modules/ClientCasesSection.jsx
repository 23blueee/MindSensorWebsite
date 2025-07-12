import React, { useState } from 'react';
import ClientCaseCard from './ClientCaseCard';
import IconButton from '../base/IconButton';
import { motion } from 'framer-motion';

const cases = [
  {
    img: '',
    title: '西南大学ADHD训练系统',
    descList: [
      '西南大学心理学部（2025年ABC中国大学心理学学科排名第四）基于随机对照实验，验证了Mindsensor 意念精灵结合CBT在提升ADHD人群注意力与执行功能方面的有效性。该项目融合脑神经反馈与可视化训练体系，实时监测脑电活动，引导前额叶调节，改善专注力与情绪控制。',
      '截至目前已成功帮助1000组ADHD家庭实现社会功能重塑。',
      '项目于2022年正式入驻西南大学（重庆）产业技术研究院，并入选为认知与人格教育部重点实验室。',
    ],
  },
  {
    img: '',
    title: '心灵花园心理中心',
    descList: [
      '引入脑电+AI测评，提升心理服务数字化水平，助力个性化干预。',
      '为不同来访者定制个性化心理干预方案，提升服务效率和科学性。',
    ],
  },
];

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

export default function ClientCasesSection() {
  const [idx, setIdx] = useState(0);
  return (
    <motion.section
      className="w-full px-6 lg:px-24 py-16 flex flex-col items-center gap-16 bg-[#F5F6F8]"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-semibold tracking-tight text-center"
        variants={itemVariants}
      >
        客户案例
      </motion.h2>
      <motion.div className="w-full flex justify-center" variants={itemVariants}>
        <ClientCaseCard {...cases[idx]} />
      </motion.div>
      <motion.div className="flex gap-8 mt-2" variants={itemVariants}>
        <IconButton
          icon="/assets/icon/arrow-left.svg"
          onClick={() => setIdx(i => Math.max(0, i - 1))}
          disabled={idx === 0}
          ariaLabel="上一个案例"
        />
        <IconButton
          icon="/assets/icon/arrow-right.svg"
          onClick={() => setIdx(i => Math.min(cases.length - 1, i + 1))}
          disabled={idx === cases.length - 1}
          ariaLabel="下一个案例"
        />
      </motion.div>
    </motion.section>
  );
} 