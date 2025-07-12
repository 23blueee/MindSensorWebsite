import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: '我们是一家什么样的公司',
    answer: [
      '深圳桐元科技有限公司，是一家专注于脑机接口与人工智能技术的创新企业。',
      '我们致力于通过前沿科技推动脑科学在教育、心理学和医学领域的应用，提升用户专注力、情绪调节和心理健康水平。',
      '公司秉持"求真务实，追求卓越"的理念，致力于打造全流程数字心理健康产品，帮助用户改善睡眠、提升专注、调节情绪，成为每个人心理健康的可信赖伙伴。'
    ],
  },
  {
    question: '我们的主营业务是什么？',
    answer: [
      '我们专注于脑电+AI数字心理健康解决方案，致力于为心理咨询、医疗、教育等机构提供心理测量与干预服务。',
    ],
  },
  {
    question: '产品适用哪些场景？',
    answer: [
      '我们的产品广泛应用于心理咨询中心、医院、学校、科研机构等，支持注意力训练、压力评估、心理干预等多种场景。',
    ],
  },
  {
    question: '售后服务有哪些保障？',
    answer: [
      '我们为所有客户提供1年硬件质保、7x12小时技术支持、远程协助和定期系统升级服务，确保产品稳定运行。',
    ],
  },
  {
    question: '数据隐私如何保护？',
    answer: [
      '我们严格遵守数据安全法规，所有用户数据均加密存储，支持本地化部署，保障客户和用户的隐私安全。',
    ],
  },
  {
    question: '如何联系我们？',
    answer: [
      '您可以通过官网、电话或邮箱与我们取得联系，客服电话：400-123-4567，邮箱：contact@tongyuan.com。',
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

function Accordion({ items }) {
  const [open, setOpen] = useState(items[0]?.question || '');
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-4">
      {items.map((item, idx) => (
        <div key={item.question} className="border rounded-xl bg-white overflow-hidden">
          <button
            className={
              'w-full text-left px-6 py-4 font-semibold text-lg flex justify-between items-center transition ' +
              (open === item.question ? 'text-blue-600' : 'text-gray-900')
            }
            onClick={() => setOpen(open === item.question ? '' : item.question)}
            aria-expanded={open === item.question}
          >
            {item.question}
            <span
              className={
                'ml-2 inline-flex transition-transform duration-300 ease-in-out ' +
                (open === item.question ? 'rotate-45 text-blue-500' : 'rotate-0 text-gray-400')
              }
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
              </svg>
            </span>
          </button>
          <div
            className={
              'transition-all duration-300 ease-in-out px-6 ' +
              (open === item.question ? 'max-h-96 py-2 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden')
            }
          >
            <div className="flex flex-col gap-3 text-gray-700 text-base">
              {item.answer.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FAQSection() {
  return (
    <motion.section id="faq-section" className="w-full pt-20 pb-12 px-4 flex flex-col items-center bg-[#F5F6F8]"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="flex flex-col items-center gap-4 mb-12" variants={itemVariants}>
        <motion.h2 className="text-3xl md:text-4xl font-bold text-center">
          求真务实  追求卓越
        </motion.h2>
        <motion.p className="text-gray-500 text-base text-center">
          我们希望用心做好客户需要的产品，不断打磨，持之以恒
        </motion.p>
      </motion.div>
      <motion.div variants={itemVariants} className="w-full">
        <Accordion items={faqs} />
      </motion.div>
    </motion.section>
  );
} 