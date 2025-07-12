import React, { useRef, useEffect, useState } from 'react';

export default function Carousel({ children, speed = 40 }) {
  // speed: px per second
  const containerRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const [width, setWidth] = useState(0);
  const [isTransition, setIsTransition] = useState(true);

  // 复制三组卡片用于无缝滚动
  const items = React.Children.toArray(children);
  const total = items.length;
  const allItems = items.concat(items, items); // 三组

  useEffect(() => {
    // 计算一组的总宽度
    if (containerRef.current) {
      const firstCard = containerRef.current.querySelector('.carousel-card');
      if (firstCard) {
        setWidth(firstCard.offsetWidth * total);
      }
    }
  }, [children, total]);

  useEffect(() => {
    if (!width) return;
    let frame;
    let last = Date.now();
    function animate() {
      const now = Date.now();
      const dt = (now - last) / 1000;
      last = now;
      setTranslateX(x => {
        let next = x - speed * dt;
        // 到达第二组末尾时，瞬间跳回第二组开头
        if (next <= -width * 2) {
          setIsTransition(false);
          return -width;
        } else {
          setIsTransition(true);
          return next;
        }
      });
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [width, speed]);

  // 每次无动画跳转后，恢复动画
  useEffect(() => {
    if (!isTransition) {
      // 立即恢复动画
      const id = setTimeout(() => setIsTransition(true), 20);
      return () => clearTimeout(id);
    }
  }, [isTransition]);

  // 响应式卡片宽度和高度
  const cardClass =
    'carousel-card flex-shrink-0 px-2 sm:px-4 w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[28vw] max-w-[420px] h-full flex';

  return (
    <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-x-hidden h-[340px] md:h-[380px]">
      <div
        ref={containerRef}
        className="flex w-full h-full"
        style={{
          transform: `translateX(${translateX}px)` ,
          transition: isTransition ? 'transform 0.2s linear' : 'none',
        }}
      >
        {allItems.map((child, i) => (
          <div className={cardClass} key={i}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
} 