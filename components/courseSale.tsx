"use client"
import calculateTimeLeft from "@/components/calculateTimeLeft"
import React, { useState, useEffect } from 'react';

export default function CourseSale(){
  const [saleInfo, setSaleInfo] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      const { timeLeft, saleType } = calculateTimeLeft();
      setSaleInfo({ timeLeft, saleType });
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  const { timeLeft, saleType } = saleInfo;

  return (
    <>
      {saleType && (
            <span className="items-center text-center">
              {saleType}! 40% off all courses! Ends in: {timeLeft.days}:{('0' + timeLeft.hours).slice(-2)}:{('0' + timeLeft.minutes).slice(-2)}
            </span>
      )}
    </>
  );
};
