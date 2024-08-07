import React from "react"
import { Link } from "react-router-dom"
import { FaCircle } from "react-icons/fa"
import List from "./List"
import ListItem from "./ListItem"

const AboutContent = () => {
	return (
		<div className=' lg:px-10 px-4 text-font-color pt-10'>
			<p className=' font-poppins font-medium lg:text-lg text-base text-pretty lg:leading-9 leading-9'>
				Welcome to the <span className=' font-bold'>AIAA AUST Student Branch</span>, the first student branch of the{" "}
				<Link
					to={"https://www.aiaa.org/"}
					target='_blank'
					className=' font-bold text-light-blue'
				>
					American Institute of Aeronautics and Astronautics(AIAA)
				</Link>{" "}
				in Bangladesh. At{" "}
				<Link to={"https://aust.edu/"} target='_blank' className=' font-bold text-light-blue'>
					Ahsanullah University of Science and Technology (AUST)
				</Link>
				, we are dedicated to pushing the boundaries of aerospace through innovation, research, and professional development with <span className=' font-bold'>AIAA</span>
				. 
			</p>

			<h3 className=' mt-16 font-poppins font-bold lg:text-2xl text-xl text-light-blue'>
				What is AIAA?
			</h3>
			<p className=' mt-5 font-poppins font-medium lg:text-lg text-base text-pretty lg:leading-9 leading-9'>
				<span className=' font-bold'>AIAA</span> is the world’s biggest aerospace technical society established in <span className=' font-bold'>1963</span> by the collaboration of the two great aerospace societies of the day, the American Rocket Society (established in 1930 as the American Interplanetary Society), and the Institute of the Aerospace Sciences (established in 1933 as the Institute of the Aeronautical Sciences).
				<span className=' font-bold'> AIAA</span> has been a proud aerospace leader for over 80 years. It is dedicated to shaping the future of aerospace, astronautics, and STEM education , as well as providing resources and experiences that assist in an aero enthusiast's personal and professional development.
			</p>

			<h3 className=' mt-16 font-poppins font-bold lg:text-2xl text-xl text-light-blue'>
				Our Vision
			</h3>
			<p className=' mt-5 font-poppins font-medium lg:text-lg text-base text-pretty lg:leading-9 leading-9'>
				At the <span className=' font-bold'>AIAA AUST Student Branch</span>, our vision is to reach new heights in the Aerospace and Aviation field through{" "}
				<span className=' font-bold'>AIAA</span> by giving:
				<List className={"md:pl-10 pl-2 mt-4 flex-col flex lg:gap-0 gap-3 text-[17px]"}>
					<ListItem className={"items-center lg:gap-4 gap-4 flex"}>
						<div>
							<FaCircle className=' text-darknest_blue h-2 w-2' />
						</div>
						Cutting-edge aerospace insights
					</ListItem>
					<ListItem className={"items-center lg:gap-4 gap-4 flex"}>
						<div>
							<FaCircle className=' text-darknest_blue h-2 w-2' />
						</div>
						Networking opportunities with industry leaders
					</ListItem>
					<ListItem className={"items-center lg:gap-4 gap-4 flex"}>
						<div>
							<FaCircle className=' text-darknest_blue h-2 w-2' />
						</div>
						Career development resources
					</ListItem>
					<ListItem className={"items-center lg:gap-4 gap-4 flex"}>
						<div>
							<FaCircle className=' text-darknest_blue h-2 w-2' />
						</div>
						Resources for innovating and developing aerospace technologies
					</ListItem>
				</List>
			</p>

			<p className='mt-5 font-poppins font-medium lg:text-lg text-base text-pretty lg:leading-9 leading-9'>
			Our members get the opportunity to enhance their professional skills as well as present their work on a global platform. They also get the chance to participate in NASA’s Student Launch, Spaceport America Cup, DBF(Design/Build/Fly), Rocketry competitions, and many more.
			
			</p>
			<p className='mb-52 mt-5 font-poppins font-medium lg:text-lg text-base text-pretty lg:leading-9 leading-9'>
			Stay with us for more exciting updates and a sneak peek into the horizon of our visions.
			</p>
		</div>
	)
}

export default AboutContent
