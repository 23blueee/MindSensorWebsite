import React from 'react';

export default function TestimonialCard({ testimonial, colorClass }) {
  return (
    <div className={`rounded-2xl p-8 max-w-xl w-full h-full flex flex-col gap-4 items-start ${colorClass}`}>
      <div className="flex items-center gap-4">
        <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border" />
        <div>
          <div className="font-semibold text-lg text-gray-900">{testimonial.name}</div>
          <div className="text-sm text-gray-500">{testimonial.title} <span className="ml-1 font-medium" style={{color:'#888'}}>{testimonial.company}</span></div>
        </div>
      </div>
      <div className="text-gray-800 text-base leading-relaxed mt-2 flex-1 w-full">{testimonial.content}</div>
      <div className="mt-4 flex items-center gap-2 w-full justify-start">
        {/* 可替换为公司logo */}
        <span className={`font-bold text-lg ${testimonial.companyColor}`}>{testimonial.company}</span>
      </div>
    </div>
  );
} 