import React from 'react';
import Carousel from '../base/Carousel';
import TestimonialCard from '../base/TestimonialCard';
import { testimonials } from './testimonialData';
import { motion } from 'framer-motion';

const bgColors = [
  'bg-blue-100',
  'bg-purple-100',
  'bg-pink-100',
  'bg-green-100',
  'bg-yellow-100',
  'bg-orange-100',
  'bg-teal-100',
  'bg-indigo-100',
  'bg-red-100',
  'bg-cyan-100',
];

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const colorList = shuffle(bgColors).slice(0, testimonials.length);

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

export default function TestimonialSection() {
  return (
    <motion.section
      id="testimonial-section"
      className="w-full bg-white py-20 px-4 flex flex-col items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        variants={itemVariants}
      >
        真实客户评价
      </motion.h2>
      <motion.div variants={itemVariants} className="w-full">
        <Carousel>
          {testimonials.map((t, i) => (
            <TestimonialCard testimonial={t} colorClass={colorList[i]} key={i} />
          ))}
        </Carousel>
      </motion.div>
    </motion.section>
  );
} 