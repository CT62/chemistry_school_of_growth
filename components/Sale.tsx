"use client"
import React, { useState, useEffect } from 'react';

const Sale = () => {
  const calculateTimeLeft = () => {
    const currentDate = new Date("2024-12-12");
    const DayMonth = { "day": currentDate.getDate(), "month": currentDate.getMonth() + 1 };
    let saleDate;
    let saleType;

    if ((DayMonth.month === 2 && DayMonth.day >= 10 && DayMonth.day <= 15) || (currentDate.getMonth() + 1 === 4 && DayMonth.day >= 2 && DayMonth.day <= 9)) {
      saleType = "Valentine's Sale";
      if (DayMonth.month === 2) {
        saleDate = new Date(`${currentDate.getFullYear()}-02-15`); // Valentine's Day Sale ends on February 15th
      }
    } else if ((currentDate.getMonth() + 1) === 6 || (currentDate.getMonth() + 1) === 7 || (currentDate.getMonth() + 1) === 8 || ((currentDate.getMonth() + 1) === 9 && DayMonth.day <= 22)) {
      saleType = "Summer Sale";
      if ((currentDate.getMonth() + 1) === 6 && DayMonth.day >= 20) {
        saleDate = new Date(`${currentDate.getFullYear()}-06-20`); // Summer Sale starts on June 20th
      } else if ((currentDate.getMonth() + 1) === 7 && DayMonth.day <= 10) {
        saleDate = new Date(`${currentDate.getFullYear()}-07-10`); // Summer Sale ends on July 10th
      } else if ((currentDate.getMonth() + 1) === 8 && DayMonth.day >= 29) {
        saleDate = new Date(`${currentDate.getFullYear()}-08-29`); // Summer Sale starts on August 29th
      } else if ((currentDate.getMonth() + 1) === 9 && DayMonth.day <= 22) {
        saleDate = new Date(`${currentDate.getFullYear()}-09-22`); // Summer Sale ends on September 22nd
      }
    } else if ((currentDate.getMonth() + 1) === 12 && DayMonth.day >= 1) {
      saleType = "Christmas Sale";
      saleDate = new Date(`${currentDate.getFullYear()}-12-25`); // Christmas Sale ends on December 25th
    } else if ((currentDate.getMonth() + 1) === 3 || ((currentDate.getMonth() + 1) === 4 && DayMonth.day <= 15)) {
      saleType = "Spring Sale";
      if ((currentDate.getMonth() + 1) === 3 && DayMonth.day >= 20) {
        saleDate = new Date(`${currentDate.getFullYear()}-03-20`); // Spring Sale starts on March 20th
      } else if ((currentDate.getMonth() + 1) === 4 && DayMonth.day <= 15) {
        saleDate = new Date(`${currentDate.getFullYear()}-04-15`); // Spring Sale ends on April 15th
      }
    }

    const difference = saleDate ? saleDate.getTime() - currentDate.getTime() : 0;
    console.log(difference);
    let timeLeft = {};

    if (difference >= 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
      };
    }else{
      timeLeft = {
        days: null,
        hours: null,
        minutes: null,
      };
    }

    return { timeLeft, saleType };
  };

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
    {timeLeft.days && (
    <div className="fixed bottom-4 w-full">
      <div className="bg-blue-600 p-4 font-bold text-2xl text-white overflow-hidden flex justify-center">
       <span>
        {saleType}! 40% off all courses! Ends in: {timeLeft.days}:{('0' + timeLeft.hours).slice(-2)}:{('0' + timeLeft.minutes).slice(-2)}
        </span>
      </div>
    </div>
      )}
    </>
  );
};

export default Sale;
