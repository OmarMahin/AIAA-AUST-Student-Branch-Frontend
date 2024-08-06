import React from "react"
import ActivityPageCover from "./ActivityPageCover"
import Flex from "./Flex"
import { HiArrowSmLeft } from "react-icons/hi"
import ImageSlider from "./ImageSlider"
import GalleryImageSlider from "./GalleryImageSlider"
import { Link } from "react-router-dom"

const ActivityContent = ({
	images,
	heading,
	date,
	content,
	videoHeading,
	video,
	videoType,
	event,
	ImageHeading,
	imageContent,
}) => {
	let paras = content.split(/\r?\n|\r|\n/g)

	return (
		<div className=' mb-28'>
			<Flex
				className={
					"flex mt-28 lg:mt-10 items-center font-poppins font-bold text-darker_blue text-[14px] gap-1"
				}
			>
				<Link to={"/activites"}>
					<HiArrowSmLeft className='h-8 w-8 p-1 bg-[#d2deeb] rounded-full ' />
				</Link>
			</Flex>
			<ImageSlider images={images} event={event} className={'lg:mt8 mt-6'}></ImageSlider>
			<Flex
				className={
					"lg:justify-between mt-11 lg:items-center flex lg:flex-row flex-col lg:gap-0 gap-5 items-center"
				}
			>
				<h3 className=' font-poppins font-bold text-darker_blue md:text-[26px] text-xl text-center leading-10'>
					{heading}
				</h3>
				<div className=' bg-darker_blue lg:px-6 py-[6px] px-4 rounded-3xl text-nowrap'>
					<h4 className=' font-poppins font-medium text-white text-sm'>
						{date}
					</h4>
				</div>
			</Flex>
			<div className=' lg:mt-16 mt-10 font-poppins font-medium text-lg leading-8 text-pretty text-font-color'>
				{paras.map((para) => (para ? <p>{para}</p> : <br></br>))}
			</div>
			{videoHeading && video ? (
				<div>
					<h3 className=' mt-11 font-poppins font-bold text-light-blue lg:text-[26px] text-xl mb-11'>
						{videoHeading}
					</h3>
					<video className='md:w-[80%] w-full mx-auto' controls>
						<source src={`/videos/${video}`} type={`video/${videoType}`} />
					</video>
				</div>
			) : (
				""
			)}
			{imageContent && (
				<div>
					<h3 className=' mt-16 font-poppins font-bold text-light-blue lg:text-[26px] text-xl mb-7'>
						{ImageHeading}
					</h3>

					<GalleryImageSlider images={imageContent} event={event}></GalleryImageSlider>
				</div>
			)}
		</div>
	)
}

export default ActivityContent
