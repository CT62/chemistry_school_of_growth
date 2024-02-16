import Navbar from '@/components/Navbar'
import prisma from '../prisma/client';
import CourseCards from '@/components/CourseCards'
import { Prompt } from 'next/font/google'

export default async function Courses(){
const courses = await prisma.course.findMany({
    orderBy: {
      courseId: 'asc'
    }
  });
return(
	<div className="bg-[#1e42b0]">
  <div aria-hidden="true" className="absolute inset-0 grid grid-cols-3 -space-x-52">
            <div className="blur-[106px] h-32 bg-cyan-300"></div>
            <div className="blur-[106px] h-56 bg-cyan-400"></div>
            <div className="blur-[106px] h-32 bg-cyan-300"></div>
  </div>
	<div className="relative py-16 font-bold text-5xl flex justify-center text-white">Courses</div>
	<div className="container mx-auto">
	<div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-4" >
  {courses.map((course,index)=>(
		<CourseCards fakeprice={course.fakeprice} price={course.price} time={course.time} title={course.title} points={course.points}  reviewsCount={course.reviewsCount} stars={course.stars} titledesc={course.titleDesc} courseID={String(index)} />
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
  </div>
	)
}
