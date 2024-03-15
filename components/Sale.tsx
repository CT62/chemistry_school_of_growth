"use client"
import React, { useState, useEffect } from 'react';

const Sale = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2024-04-02') - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className="fixed bottom-4 w-full">
            <div className="bg-blue-600 p-4 font-bold text-2xl text-white overflow-hidden flex justify-center">
                Summer Sale! 40% off all courses! Ends in: {timeLeft.days}:{('0' + timeLeft.hours).slice(-2)}:{('0' + timeLeft.minutes).slice(-2)}
            </div>
        </div>
    );
};

export default Sale;
