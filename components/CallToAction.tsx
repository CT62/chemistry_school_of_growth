"use client"
import { TypeAnimation } from 'react-type-animation';

export default function CallToAction() {
  return (
    <div className="relative py-16 bg-gradient-to-r from-blue-800 to-cyan-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="relative flex flex-col items-center justify-center text-center text-white md:w-8/12 lg:w-7/12 mx-auto space-y-6">
          <h1 className="text-4xl font-bold md:text-5xl">Chemistry School of Growth</h1>
          <div className="py-2">
            <p className="text-gray-100">Want to</p>
            <div className="text-2xl font-bold">
              <TypeAnimation
                sequence={[
                  "Become better at studying?",
                  2000,
                  "Ace your Senior Cycle exams?",
                  2000,
                  "Get chemistry resources?",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/courses" className="px-4 py-2">
              <span className="text-base font-semibold text-dark">Get Started</span>
            </a>
            <a href="/about" className="px-4 py-2">
              <span className="font-semibold text-primary">Learn more</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

