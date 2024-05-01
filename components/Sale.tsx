"use client"
import calculateTimeLeft from "@/components/calculateTimeLeft"
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}


export default function Sale(){
  const [saleInfo, setSaleInfo] = useState({ timeLeft: { days: 0, hours: 0, minutes: 0 }, saleType: '' });
  const [isPopupShown, setIsPopupShown] = useState(sessionStorage.getItem("popup") !== "false");

  useEffect(() => {
    sessionStorage.setItem("popup", "true");
  }, []);

  useEffect(() => {
const timer = setTimeout(() => {
  const { timeLeft = { days: 0, hours: 0, minutes: 0 }, saleType = '' } = calculateTimeLeft() || {};
  setSaleInfo({ timeLeft, saleType });
}, 60000);
    return () => clearTimeout(timer);
  }, []);

  const togglePopup = () => {
    sessionStorage.setItem("popup", "false");
    setIsPopupShown(false);
  };

  const { timeLeft, saleType } = saleInfo;

  return (
    <>
      {timeLeft.days && isPopupShown && (
        <div className="fixed bottom-4 w-full">
          <div className="bg-blue-600 p-4 font-bold text-2xl text-white overflow-hidden flex justify-between">
            <span>
              {saleType}! 40% off all courses! Ends in: {timeLeft.days}:{('0' + timeLeft.hours).slice(-2)}:{('0' + timeLeft.minutes).slice(-2)}
            </span>
            <button onClick={togglePopup}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

