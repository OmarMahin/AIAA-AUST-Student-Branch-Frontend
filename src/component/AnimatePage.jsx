import React from "react"
import { motion } from "framer-motion"

const AnimatePage = ({ children }) => {
	const animations = {
		initial: { opacity: 0, x: 100 },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: -100 },
	}

	return (
		<motion.div variants={animations} initial='initial' animate='animate' exit={"exit"} transition = {{duration: 0.9}}>
			{children}
		</motion.div>
	)
}

export default AnimatePage
