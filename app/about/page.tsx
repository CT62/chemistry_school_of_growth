import Image from "next/image";
import profilePic from "@/components/profilepictur.jpg";

export default function AboutMe() {
  return (
    <div className="pt-4 pb-10 min-h-screen flex justify-center items-center">
      <div className="max-w-4xl p-8 bg-white rounded-lg">
    <div className="font-bold text-3xl flex justify-center pb-8">About me</div>
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="mb-6 md:mb-0 md:mr-8 max-w-xs">
            <h2 className="text-2xl font-bold">Biography</h2>
            <p className="text-gray-700 leading-relaxed">
              My name is Dr. Lena Kadri. I’m a recent PhD graduate in chemistry from Trinity College Dublin, Ireland. Many of you may already know me from my Instagram page, Chemistry School of Growth (C.S.G.). Nevertheless, I’ll share a bit about my personal background and overall chemistry experience. So, where to begin…
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <Image src={profilePic} alt="Profile Picture" width={500} height={500} className="rounded-lg" />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">My Teaching Story</h2>
          <p className="text-gray-700 leading-relaxed">
            I’ve always had a passion for helping students to understand chemistry and to excel in school. I started my part-time teaching journey in 2015 whilst undergoing my Bachelor’s Degree in Chemistry from the University of Limerick (UL), Ireland.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            I started off teaching undergraduate chemistry students before pivoting towards helping Leaving Cert students across Ireland to achieve a H1 in Chemistry. I was extremely busy helping students every single day. I realized the impact I was having on improving their grades and helping them to better understand chemistry. I couldn’t keep up with the demand as word of mouth spread quickly. I soon realized I would have to move from 1-1 grinds to online pre-recorded courses in order to help as many students as possible to achieve an H1 in chemistry (and it worked! Check out the testimonials and reviews section!)
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">My Education and Experience Story</h2>
          <p className="text-gray-700 leading-relaxed">
            I started my undergraduate degree in chemistry from the University of Limerick, Ireland (UL) in 2015. During this period, I taught Leaving Cert chemistry and undergraduate chemistry. I graduated with a bachelor’s degree in chemistry in 2019 before moving to the States. Here, I undertook a rotation as a research scientist at the headquarters of a multinational pharmaceutical company, before returning to continue my studies in chemistry. In 2020, I started my PhD in chemistry at Trinity College Dublin (TCD), Ireland. In 2024, I graduated from the School of Pharmacy and Pharmaceutical Sciences, TCD. It was a challenging, yet extremely rewarding and enriching experience whereby I can now proudly call myself Dr. Kadri.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            I am now a full-time Senior Scientific Researcher and Leaving Cert chemistry tutor selling online H1 focused courses to Leaving Cert students on the island of Ireland.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            If you’re looking to get an H1 in chemistry for the LC, look no further!
          </p>
        </div>
      </div>
    </div>
  );
}
