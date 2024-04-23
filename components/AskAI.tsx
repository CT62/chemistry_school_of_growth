"use client";
import React, { useState } from 'react';



export default function AskAI() {
  const [PopupAI, setPopupAI] = useState(false);
  const toggleAI = () => {
    setPopupAI(!PopupAI);
  };

  return (
    <>
      <button className="bg-white fixed bottom-4 right-4 font-semibold px-2.5 py-1.5 rounded-lg shadow border-2 border-black" onClick={toggleAI}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 ml-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>
        Ask AI
      </button>
      {PopupAI && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50 backdrop-blur-md">
          <div className="bg-white p-8 rounded shadow-lg w-full md:w-4/6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Ask AI</h2>
              <button className="text-black" onClick={toggleAI}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <hr className="border-gray-400 my-2 pb-4 w-full " />
            <div className="flex mt-4">
              <input onChange={e => setData(e.target.value)} className="w-full p-2 rounded-lg border-2 border-gray-300" />
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 w-6 h-6 text-gray-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </button>
            </div>
            </div>
        </div>
      )}
    </>
  );
}

