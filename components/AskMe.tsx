"use client"
import { useState } from 'react';

export default function AskMe() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="bg-white fixed bottom-4 right-4 font-semibold px-1.5 py-1.5 rounded-lg shadow border-2 border-black"
        onClick={togglePopup}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 ml-3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
        </svg>
        Ask Me
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50 backdrop-blur-md">
          <div className="bg-white p-8 rounded shadow-lg w-full md:w-3/6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Questions and Answers</h2>
              <button className="text-black" onClick={togglePopup}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <hr className="border-gray-400 my-2 pb-4 w-full" />
            <div>
              <div className="mb-4 flex justify-between items-center">
                <button className="flex justify-between transition ease-in-out delay-150 hover:-translate-y-1 px-3 py-3 border border-gray-400 rounded hover:bg-gray-200 text-left w-full">Question 1
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
		</button>
              </div>
              <div className="mb-4 flex justify-between items-center">
                <button className="flex justify-between transition ease-in-out delay-150 hover:-translate-y-1 px-3 py-3 border border-gray-400 rounded hover:bg-gray-200 text-left w-full">Question 2
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
		</button>
              </div>
              <div className="mb-4 flex justify-between items-center">
                <button className="flex justify-between transition ease-in-out delay-150 hover:-translate-y-1 px-3 py-3 border border-gray-400 rounded hover:bg-gray-200 text-left w-full">Question 3
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
		</button>
              </div>
              <div className="mb-4 flex justify-between items-center">
                <button className="flex justify-between transition ease-in-out delay-150 hover:-translate-y-1 px-3 py-3 border border-gray-400 rounded hover:bg-gray-200 text-left w-full">Question 4
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
		</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
