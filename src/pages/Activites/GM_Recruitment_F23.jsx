import React from "react"
import ActivityContent from "../../component/ActivityContent"
import AnimatePage from "../../component/AnimatePage"
import Container from "../../component/Container"


const GM_Recruitment_F23 = () => {
	return (
		<AnimatePage>
			<Container>
				<ActivityContent
					images={["cover1.jpg", "cover2.jpg", "cover3.jpg"]}
                    event = {"GM_Recruitment_F23"}
					heading={"General Member Recruitment Fall’23"}
					date={"02-04 June 2024"}
					content={`AIAA AUST Student Branch has started its journey with General Member Recruitment Fall’23, dated from 02 June 2024 to 04 June 2024. Over three action-packed days, the campus of Ahsanullah University of Science and Technology(AUST) buzzed with energy, enthusiasm, and endless fun. From thrilling dart board games to the challenging buzz-wire contest, our booth was the ultimate hub of student engagement!

				And the highlight? Watching a prototype aircraft and drone take flight, captivating everyone on campus!
				Relive the unforgettable moments, join the excitement, and become part of our pioneering journey in aerospace innovation!
        `}
					videoHeading={"A Glimpse of Our Event"}
					video={"Offline_3days.webm"}
					videoType={"webm"}
				></ActivityContent>
			</Container>
		</AnimatePage>
	)
}

export default GM_Recruitment_F23
