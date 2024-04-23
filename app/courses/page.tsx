import {useEffect} from "react";
import Navbar from '@/components/Navbar'
import AskMe from '@/components/AskMe'
import prisma from '../prisma/client';
import Sale from "@/components/Sale"
import CourseCards from '@/components/CourseCards'
import CourseSale from "@/components/courseSale";
import calculateTimeLeft from "@/components/calculateTimeLeft"
import { Prompt } from 'next/font/google'

export default async function Courses(){
  const courses = await prisma.course.findMany({
    orderBy: {
      courseId: 'asc'
    }
  });
  
  let time = calculateTimeLeft();
  let audios =["/organic_chemistry_1.mp3","/organic_chemistry_2.mp3","/5th_year_revision_course_part_I.mp3","/experiment_course_part_1.mp3","/fuels_and_thermochemistry.mp3","/experiment_course_part_2.mp3","/ultimate_h1_guide.mp3"];
  return(
<div className="bg-[#1e42b0]">
  <div aria-hidden="true" className="absolute inset-0 grid grid-cols-3 -space-x-52">
            <div className="blur-[106px] h-32 bg-cyan-300"></div>
            <div className="blur-[106px] h-56 bg-cyan-400"></div>
            <div className="blur-[106px] h-32 bg-cyan-300"></div>
  </div>
	<h1 className="relative pt-16 font-bold text-5xl flex justify-center text-white">Courses</h1>

	<div className="relative pb-14 pt-2 font-semibold text-xl justify-center text-white flex justify-center">
	{time.saleType!=undefined &&(
	  <CourseSale/>
	)}
      </div>

	<div className="container mx-auto">
	<div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-4" >
  {courses.map((course,index)=>(
		<CourseCards fakeprice={course.fakeprice} price={course.price} time={course.time} title={course.title} points={course.points}  reviewsCount={course.reviewsCount} stars={course.stars} titledesc={course.titleDesc} courseID={String(index)} AudioURL={audios[index]} />
  ))}

	</div>
	</div>
  <div className="pt-24">
	<div className="pt-12 pb-4 bg-white">
		<div className="text-center text-black font-bold text-3xl pb-4">Whats included in each course:</div>
			<li className="sm:flex sm:justify-center pb-2.5">Notes</li>
			<li className="sm:flex sm:justify-center pb-2.5">Exam questions & solutions</li>
			<li className="sm:flex sm:justify-center pb-2.5">Unlimited access to 1-on-1 questions and solutions by emailing/messaging me directly</li>
			<li className="sm:flex sm:justify-center pb-2.5">On demand access to recordings for the duration of your Leaving Cert</li>
			<li className="sm:flex sm:justify-center pb-2.5">Free video solutions to material covered outside of the course content</li>
			<li className="sm:flex sm:justify-center pb-2.5">Tips on how to get a H1</li>
	</div>
	</div>
  {/*<AskMe/>*/}
  </div>
	)
}
