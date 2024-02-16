'use client'
import {motion} from "framer-motion"
export default function Profile(){
	return(
	<>
		<motion.div
		initial={{ opacity: 0, scale: 0.5 }}
   		 animate={{ opacity: 1, scale: 1 }}
    		transition={{ duration: 0.8 }}
  		>
		<div className="px-5 flex justify-center">
		<div className="border-1-4 lg:w-1/2 w-auto p-4">
		<div className="flex justify-center">
			<div className="m-0 h-32 w-32">
				<img src="https://media.licdn.com/dms/image/D4E03AQGI8jzfHXsTIg/profile-displayphoto-shrink_800_800/0/1688475014905?e=2147483647&v=beta&t=zJP08ixifx7o7RypgO8tzOnAgi4y2zOx-bY5JaTs264"
				className="rounded-full"
				 />
			</div>
		</div>
		<div className="py-5 flex justify-center">
			<div className="text-black font-bold text-center text-2xl">
				Hello! I&apos;m Lena Kadri, the proud owner of Chemistry School of Growth.
			</div>
		</div>
		<div className="py-2 flex justify-center">
			<div className="text-black font-semibold text-center">
			With a Ph.D. earned at Trinity College and three years of teaching experience, I&apos;ve cultivated a passion for guiding students through the fascinating world of senior cycle chemistry.
			</div>
		</div>
		<div className="flex justify-center items-center gap-6 my-6">
                        <a className="text-gray-700 hover:text-cyan-500" aria-label="Visit My LinkedIn" href="https://ie.linkedin.com/in/lena-kadri-7b4ab3158"
                            target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6">
                                <path fill="currentColor"
                                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                </path>
                            </svg>
                        </a>
                        <a className="text-gray-700 hover:text-cyan-500" aria-label="Visit My Facebook" href="https://www.facebook.com/chemistryschoolofgrinds/"
                            target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-6">
                                <path fill="currentColor"
                                    d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                                </path>
                            </svg>
                        </a>
                    </div>
		</div>	
		</div>
		</motion.div>

	</>

)}
