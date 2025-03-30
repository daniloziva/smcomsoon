'use client';

import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  // Set launch date to April 15, 2024
  const launchDate = new Date('2025-04-15T00:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center p-1 sm:p-2">
      <div className="bg-white/30 backdrop-blur-lg rounded-lg px-2 sm:px-3 py-1 sm:py-2 border-2 border-black">
        <div className="text-lg sm:text-xl md:text-2xl font-bold mb-0 text-black">{value.toString().padStart(2, '0')}</div>
      </div>
      <div className="text-xs uppercase tracking-wider text-black mt-1">{label}</div>
    </div>
  );

  return (
    <div className="flex justify-center space-x-2 sm:space-x-3 md:space-x-4">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer; 