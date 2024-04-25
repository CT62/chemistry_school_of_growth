import React, { useRef, useEffect, useState } from 'react';

interface PlayerProps {
  audioElem: React.RefObject<HTMLAudioElement>; // Define the type of audioElem prop
  isPlaying: boolean;
  setisplaying: React.Dispatch<React.SetStateAction<boolean>>;
}

const Player: React.FC<PlayerProps> = ({ audioElem, isPlaying, setisplaying }) => {
  const clickRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState<number>(0);

  const PlayPause = () => {
    setisplaying(prevState => !prevState); // Toggle between playing and pausing
  };

  const checkWidth = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = clickRef.current!.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const width = clickRef.current!.clientWidth;
    const percentage = (offsetX / width) * 100;
    audioElem.current!.currentTime = (percentage / 100) * audioElem.current!.duration;
  };

  useEffect(() => {
    const updateProgress = () => {
      const progressPercent = (audioElem.current!.currentTime / audioElem.current!.duration) * 100;
      setProgress(progressPercent);
    };

    audioElem.current!.addEventListener('timeupdate', updateProgress);

    return () => {
      audioElem.current!.removeEventListener('timeupdate', updateProgress);
    };
  }, [audioElem]);

  return (
    <div className="flex flex-col items-center">
      <div className="player-container flex items-center">
        <div className="controls flex items-center">
          {isPlaying ? (
            <div className="text-3xl text-white cursor-pointer" onClick={PlayPause}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
              </svg>
            </div>
          ) : (
            <div className="text-3xl text-white cursor-pointer" onClick={PlayPause}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
              </svg>
            </div>
          )}
        </div>
        <div className="progress-bar bg-gray-200 h-4 ml-4 flex-grow" onClick={checkWidth} ref={clickRef}>
          <div className="progress bg-blue-500 h-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Player;
