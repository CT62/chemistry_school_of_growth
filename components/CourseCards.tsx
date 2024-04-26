'use client';
import prisma from '../app/prisma/client';
import ReactAudioPlayer from "react-audio-player";
import Player from '@/Player/Player';
import { songsdata } from '@/Player/audios';
import React, { useState, useEffect, useRef } from 'react';
import { checkout } from "../checkout";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Star from './star';
import StarFill from './star-fill';
import CalculateTimeLeft from "@/components/calculateTimeLeft";
import StarHalf from './star-half';
import { useSession, signIn } from 'next-auth/react';
import axios from "axios";

interface Props {
  title: string;
  points: string[];
  time: string;
  price: string;
  fakeprice: string;
  titledesc?: string;
  reviewsCount: string;
  stars: number;
  courseID: string;
  AudioURL: string;
}

export default function CourseCard({
  fakeprice,
  title,
  points,
  time,
  price,
  titledesc,
  reviewsCount,
  stars,
  courseID,
  AudioURL,
}: Props) {
  const { data: session, status } = useSession();
  const [isPurchased, setIsPurchased] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[1]);
  const noPoints = points[0] === '';
  const router = useRouter();
  let timeL = CalculateTimeLeft();

  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const prices = ["price_1OPUpgF7RC2rD4L0iW3TPHTH", "price_1OPUrMF7RC2rD4L08cHt5S2I", "price_1OZLd1F7RC2rD4L0bvafXtmq", "price_1OPUuQF7RC2rD4L0P9EDvddY", "price_1OPUuvF7RC2rD4L0lDnw9Gg1", "price_1OPUvLF7RC2rD4L03P5KCFWZ", "price_1OPUwBF7RC2rD4L01HKIsyjM"];

  async function checkPurchased() {
    try {
      const isPurchased = await axios.post('/api/isPurchased', { 'CourseID': courseID, 'userEmail': session?.user?.email });
      setIsPurchased(isPurchased.data.isPurchased);
      return isPurchased.data.isPurchased;
    } catch (error) {
      console.error('Error checking purchase status:', error);
      return false;
    }
  }

  const handlePopup = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  useEffect(() => {
    checkPurchased();
  }, []);

  let audioElem = useRef();

  useEffect(() => {
    if (isplaying && audioElem.current) {
      audioElem.current.play();
    } else if (audioElem.current) {
      audioElem.current.pause();
    }
  }, [isplaying, currentSong]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration });
  };

  const handlePurchase = async () => {
    if (status === "authenticated") {
      if (!isPurchased) {
        checkout({
          lineItems: [
            {
              price: prices[parseInt(courseID)],
              quantity: 1,
            }
          ],
          authSession: session?.user,
          courseID,
        });
      } else {
        router.push(`/courses/${courseID}`);
      }
    } else {
      handlePopup();
    }
  };

  const loginUser = async (e) => {
    e.preventDefault();
    await signIn('credentials', {
      ...data,
      redirect: false,
    });
    window.location.reload();
  };

  const renderStars = (count: number) => {
    const starElements: JSX.Element[] = [];
    const fullStars = Math.floor(count);
    const hasHalfStar = count % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      starElements.push(<StarFill key={i} />);
    }

    if (hasHalfStar) {
      starElements.push(<StarHalf key="half-star" />);
    }

    const remainingStars = hasHalfStar ? 4 - fullStars : 5 - fullStars;
    for (let i = 0; i < remainingStars; i++) {
      starElements.push(<Star key={i} />);
    }
    return starElements;
  };

  return (
    <div className="bg-white p-6 rounded-lg flex flex-col">
      <div className="content-section flex-grow">
        <div className="bg-white" />
        <div className="title-section flex justify-between">
          <h2 className="text-xl font-bold text-sm pb-2 pr-2">{title}</h2>
          <div style={{ width: "40px", height: "40px" }}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-1.5 rounded-full">
              <audio ref={audioElem} src={AudioURL} onTimeUpdate={onPlaying} />
              <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setIsPlaying} audioElem={audioElem} currentSong={currentSong} />
            </button>
          </div>
        </div>
        <div className="text-gray-700 font-light italic">{titledesc}</div>
        <div className="points-section mb-2 pt-3">
          <ul className={`${!noPoints && 'list-disc'} pl-5`}>
            {points.map((point: string, index: number) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 mt-0.5" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
          </svg>
          <p>{time}hrs</p>
        </div>
        <div className="flex text-yellow-400">
          {renderStars(stars)?.map((starin, index) => (
            <div key={index}>{starin}</div>
          ))}
          <div className="text-black pl-1">
            (
            <Link href={`/courses/${courseID}/reviews`} className="text-black underline underline-offset-1">
              {reviewsCount} reviews
            </Link>
            )
          </div>
          {isLoginVisible && (
            <div id="loginPopup" className="relative text-black">
              <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-transparent backdrop-blur-md">
                <div className="bg-white p-6 rounded shadow-lg w-96 md:w-1/2 lg:w-1/4">
                  <button onClick={handlePopup}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 50 50">
                      <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                    </svg>
                  </button>
                  <p className="flex justify-center font-semibold">Sign in to continue </p>
                  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={loginUser}>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={data.email}
                            onChange={e => setData({ ...data, email: e.target.value })}
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                          </label>
                        </div>
                        <div className="mt-2">
                          <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={data.password}
                            onChange={e => setData({ ...data, password: e.target.value })}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                          Sign in
                        </button>
                      </div>
                      <hr className="my-4 border-gray-300" />
                      <div className="flex">
                        <p className="pl-4 font-light">don&apos;t have an existing account?</p>
                        <a className="pl-1 font-semibold text-blue-600" href="/signup">Sign up</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <hr className="mt-4 border-gray-300 pb-4" />
      <div className="bottom-section flex justify-between items-end">
        <div className="price-section flex">
          <p className={`${timeL.saleType != undefined ? 'text-gray-400 mb-1 mr-2' : ''}`}>
            <span className={`${timeL.saleType != undefined ? 'line-through line-through decoration-red-500' : ''}`}>
              €{'\''}{fakeprice}{'\''}
            </span>
          </p>
          {timeL.saleType != undefined && (
            <p className="text-black font-semibold">€{price}</p>
          )}
        </div>
        <div className="add-to-cart-section">
          <button
            className={`flex ${isPurchased ? 'bg-gradient-to-r from-green-500 to-green-400' : 'transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-md hover:shadow-cyan-500  bg-gradient-to-r from-cyan-500 to-blue-500'} shadow-md text-gray-900 px-4 py-2 rounded focus:outline-none transition text-white font-semibold`}
            onClick={handlePurchase}
          >
            {((status !== 'authenticated' && !isPurchased) || (status === 'authenticated' && !isPurchased)) && (<p>Buy now</p>)}
            {status == "authenticated" && isPurchased == true && <p>Purchased</p>}
          </button>
        </div>
      </div>
    </div>
  );
}

