import React from "react"
import Container from "./Container"
import Flex from "./Flex"
import TeamMember from "./TeamMember"

const TeamContent = () => {
	return (
		<div className=' mt-16'>
			<Flex className={"flex flex-col items-center gap-3 mb-12 lg:mb-16"}>
				<h3 className=' font-poppins font-bold text-darker_blue lg:text-3xl text-2xl text-center'>
					Executive Committee Fall 2023
				</h3>
				<h3 className='mt-16 font-poppins font-semibold text-white lg:text-2xl text-lg py-2 lg:px-12 px-8 bg-light-blue rounded-full '>
					FACULTY ADVISORS
				</h3>
			</Flex>
			<Flex className={"flex flex-col items-center gap-5 mb-40"}>
				{/* Professor */}
				<Flex
					className={
						"flex lg:gap-20 gap-8 lg:flex-row flex-col py-10 mb-10 px-2 lg:px-20 lg:border-b-4 border-b-2 border-light-blue"
					}
				>
					<TeamMember
						name={"Dr. Mazharul Islam"}
						image={"Prof Dr Mazharul Islam.png"}
						position={"Professor"}
						deparment={"Dept. of MPE, AUST"}
					></TeamMember>
					<TeamMember
						name={"Md. Ishtiaque Hossain"}
						image={"Md Ishtiaque Hossain.png"}
						position={"Lecturer"}
						deparment={"Dept. of MPE, AUST"}
					></TeamMember>
				</Flex>

				{/* Chairs */}
				<Flex className={"flex lg:gap-20 gap-8 lg:flex-row flex-col mt-24"}>
					{window.innerWidth < 769 ? (
						<>
							<TeamMember
								name={"Anas AL Rafin"}
								image={"Anas AL Rafin.png"}
								position={"Chair"}
								deparment={"ME"}
							></TeamMember>{" "}
							<TeamMember
								name={"Tahzeeb Rahman Alvi"}
								image={"Tahzeeb Rahman Alvi.png"}
								position={"Vice Chair"}
								deparment={"ME"}
							></TeamMember>
							<TeamMember
								name={"Munshi Redwan Elahi"}
								image={"Munshi Redwan Elahi.png"}
								position={"Treasurer"}
								deparment={"ME"}
							></TeamMember>
						</>
					) : (
						<>
							<TeamMember
								name={"Tahzeeb Rahman Alvi"}
								image={"Tahzeeb Rahman Alvi.png"}
								position={"Vice Chair"}
								deparment={"ME"}
								className={"mt-10"}
							></TeamMember>
							<TeamMember
								name={"Anas AL Rafin"}
								image={"Anas AL Rafin.png"}
								position={"Chair"}
								deparment={"ME"}
							></TeamMember>{" "}
							<TeamMember
								name={"Munshi Redwan Elahi"}
								image={"Munshi Redwan Elahi.png"}
								position={"Treasurer"}
								deparment={"ME"}
								className={"mt-10"}
							></TeamMember>
						</>
					)}
				</Flex>

				<Flex className={"flex lg:gap-20 gap-8 lg:flex-row flex-col"}>
					{window.innerWidth < 769 ? (
						<>
						<TeamMember
						name={"Nakibul Islam"}
						image={"Nakibul Islam.png"}
						position={"Secretary"}
						deparment={"ME"}
					></TeamMember>
							<TeamMember
						name={"Rifah Tasfia Kabir"}
						image={"Rifah Tasfia Kabir.png"}
						position={"Additional Secretary"}
						deparment={"EEE"}
					></TeamMember>
					
					<TeamMember
						name={"Fabbiha Tahsin Prova"}
						image={"Fabbiha Tahsin Prova.png"}
						position={"Additional Secretary"}
						deparment={"CSE"}
					></TeamMember>
						</>
					) : (
						<>
							<TeamMember
						name={"Rifah Tasfia Kabir"}
						image={"Rifah Tasfia Kabir.png"}
						position={"Additional Secretary"}
						deparment={"EEE"}
						className={"mt-10"}
					></TeamMember>
					<TeamMember
						name={"Nakibul Islam"}
						image={"Nakibul Islam.png"}
						position={"Secretary"}
						deparment={"ME"}
					></TeamMember>
					<TeamMember
						name={"Fabbiha Tahsin Prova"}
						image={"Fabbiha Tahsin Prova.png"}
						position={"Additional Secretary"}
						deparment={"CSE"}
						className={"mt-10"}
					></TeamMember>
						</>
					)}
					
				</Flex>

				{/* Admin Team */}
				<Flex className={"flex lg:gap-20 gap-8 lg:flex-row flex-col mt-32"}>
					{window.innerWidth < 769 ? (
						<>
							<TeamMember
								name={"Mohtasim Ahsan Labib"}
								image={"Mohtasim Ahsan Labib.png"}
								position={"Administrative Operations Director"}
								deparment={"ME"}
							></TeamMember>
							<TeamMember
								name={"Yeasin Arafath Mahid"}
								image={"Yeasin Arafath Mahid.png"}
								position={"Administrative Operations Executive"}
								deparment={"ME"}
							></TeamMember>

							<TeamMember
								name={"Jahirul Islam"}
								image={"Jahirul Islam.png"}
								position={"Administrative Operations Executive"}
								deparment={"ME"}
							></TeamMember>
						</>
					) : (
						<>
							<TeamMember
								name={"Yeasin Arafath Mahid"}
								image={"Yeasin Arafath Mahid.png"}
								position={"Administrative Operations Executive"}
								deparment={"ME"}
								className={"mt-10"}
							></TeamMember>
							<TeamMember
								name={"Mohtasim Ahsan Labib"}
								image={"Mohtasim Ahsan Labib.png"}
								position={"Administrative Operations Director"}
								deparment={"ME"}
							></TeamMember>
							<TeamMember
								name={"Jahirul Islam"}
								image={"Jahirul Islam.png"}
								position={"Administrative Operations Executive"}
								deparment={"ME"}
								className={"mt-10"}
							></TeamMember>
						</>
					)}
				</Flex>

				{/* Organizing Team*/}
				<Flex className={"flex lg:gap-20 gap-8 lg:flex-row flex-col mt-32"}>
					{window.innerWidth < 769 ? (
						<>
							<TeamMember
								name={"Sakib Md. Minhajul Alam"}
								image={"Sakib Md Minhajul Alam.png"}
								position={"Organizing Director"}
								deparment={"ME"}
							></TeamMember>
							<TeamMember
								name={"Shahedul Alam"}
								image={"Shahedul Alam.png"}
								position={"Organizing Executive"}
								deparment={"EEE"}
							></TeamMember>

							<TeamMember
								name={"Md. Zawadul Islam Rafee"}
								image={"Md Zawadul Islam Rafee.png"}
								position={"Organizing Executive"}
								deparment={"EEE"}
							></TeamMember>
						</>
					) : (
						<>
							<TeamMember
								name={"Shahedul Alam"}
								image={"Shahedul Alam.png"}
								position={"Organizing Executive"}
								deparment={"EEE"}
								className={"mt-10"}
							></TeamMember>
							<TeamMember
								name={"Sakib Md. Minhajul Alam"}
								image={"Sakib Md Minhajul Alam.png"}
								position={"Organizing Director"}
								deparment={"ME"}
							></TeamMember>
							<TeamMember
								name={"Md. Zawadul Islam Rafee"}
								image={"Md Zawadul Islam Rafee.png"}
								position={"Organizing Executive"}
								deparment={"EEE"}
								className={"mt-10"}
							></TeamMember>
						</>
					)}
				</Flex>
				<Flex className={"flex lg:gap-20 gap-8 lg:flex-row flex-col"}>
					<TeamMember
						name={"Ahnaf Ittesaf Zarif"}
						image={"Ahnaf Ittesaf Zarif.png"}
						position={"Organizing Executive"}
						deparment={"ME"}
					></TeamMember>
					<TeamMember
						name={"Md. Al Noman Ruhin"}
						image={"MD Al Noman Ruhin.png"}
						position={"Jr Organizing Executive"}
						deparment={"EEE"}
					></TeamMember>
					<TeamMember
						name={"Amit Chakraborty"}
						image={"Amit Chakraborty.png"}
						position={"Jr Organizing Executive"}
						deparment={"EEE"}
					></TeamMember>
				</Flex>

				{/* Creative Team*/}
				<Flex className={"flex lg:gap-20 gap-8 lg:flex-row flex-col mt-32"}>
					{window.innerWidth < 769 ? (
						<>
							<TeamMember
								name={"Abdullah Al Mreenmay"}
								image={"Abdullah Al Mreenmay.png"}
								position={"Creative Design and Media Director"}
								deparment={"ME"}
							></TeamMember>
							<TeamMember
								name={"Ashiqur Islam Niloy"}
								image={"Ashiqur Islam Niloy.png"}
								position={"Creative Design and Media Executive"}
								deparment={"ME"}
							></TeamMember>

							<TeamMember
								name={"Md. Ahsanul Kabir"}
								image={"MD AHSANUL KABIR.png"}
								position={"Creative Design and Media Executive"}
								deparment={"ME"}
							></TeamMember>
						</>
					) : (
						<>
							<TeamMember
								name={"Ashiqur Islam Niloy"}
								image={"Ashiqur Islam Niloy.png"}
								position={"Creative Design and Media Executive"}
								deparment={"ME"}
								className={"mt-10"}
							></TeamMember>
							<TeamMember
								name={"Abdullah Al Mreenmay"}
								image={"Abdullah Al Mreenmay.png"}
								position={"Creative Design and Media Director"}
								deparment={"ME"}
							></TeamMember>
							<TeamMember
								name={"Md. Ahsanul Kabir"}
								image={"MD AHSANUL KABIR.png"}
								position={"Creative Design and Media Executive"}
								deparment={"ME"}
								className={"mt-10"}
							></TeamMember>
						</>
					)}
				</Flex>
				<Flex className={"flex lg:gap-20 gap-8 lg:flex-row flex-col"}>
					<TeamMember
						name={"Hasan Ul Hoq"}
						image={"Hasan Ul Hoq.png"}
						position={"Creative Design and Media Executive"}
						deparment={"ME"}
					></TeamMember>
					<TeamMember
						name={"Tanmim Rahman Feeha"}
						image={"Tanmim Rahman Feeha.png"}
						position={"Jr Creative Design and Media Executive"}
						deparment={"EEE"}
					></TeamMember>
				</Flex>

				{/* Technical Team*/}
				<Flex className={"flex lg:gap-20 gap-8 lg:flex-row flex-col mt-32"}>
					<TeamMember
						name={"K. M. Mosaddique Enam"}
						image={"K M Mosaddique Enam.png"}
						position={"Technical Projects Executive"}
						deparment={"ME"}
					></TeamMember>
					<TeamMember
						name={"Md. Atesham Muzammel Bhuiyan"}
						image={"MD ATESHAM MUZAMMEL BHUIYAN.png"}
						position={"Technical Projects Executive"}
						deparment={"ME"}
					></TeamMember>
					<TeamMember
						name={"Md. Meheraj"}
						image={"Md Meheraj.png"}
						position={"Technical Projects Executive"}
						deparment={"EEE"}
					></TeamMember>
				</Flex>
				<Flex className={"flex lg:gap-20 gap-8 lg:flex-row flex-col"}>
					<TeamMember
						name={"Khorshed Alam"}
						image={"Khorshed Alam.png"}
						position={"Technical Projects Executive"}
						deparment={"EEE"}
					></TeamMember>
					<TeamMember
						name={"Samin Yeaser"}
						image={"Samin Yeaser.png"}
						position={"Technical Projects Executive"}
						deparment={"EEE"}
					></TeamMember>
					<TeamMember
						name={"MD.Iftaker Hossain Rafi"}
						image={"MD Iftaker Hossain Rafi.png"}
						position={"Technical Projects Executive"}
						deparment={"EEE"}
					></TeamMember>
				</Flex>
				<Flex className={"flex lg:gap-20 gap-8 lg:flex-row flex-col"}>
					<TeamMember
						name={"Md. Fahim Ahmed"}
						image={"Md Fahim Ahmed.png"}
						position={"Jr Technical Projects Executive"}
						deparment={"ME"}
					></TeamMember>
					<TeamMember
						name={"Mehrab Hossain"}
						image={"Mehrab Hossain.png"}
						position={"Jr Technical Projects Executive"}
						deparment={"ME"}
					></TeamMember>
				</Flex>

				{/* Web Develoment Team*/}
				<Flex className={"flex lg:gap-20 gap-8 lg:flex-row flex-col mt-32"}>
					<TeamMember
						name={"Syed Towshik"}
						image={"Syed Towshik.png"}
						position={"Web Development & Publicity Executive"}
						deparment={"EEE"}
					></TeamMember>
					<TeamMember
						name={"Abrar Jahin Sachcha"}
						image={"Abrar Jahin Sachcha.png"}
						position={"Web Development & Publicity Executive"}
						deparment={"EEE"}
					></TeamMember>
					<TeamMember
						name={"Md. Omar Karim"}
						image={"Md Omar Karim.png"}
						position={"Jr Web Development & Publicity Executive"}
						deparment={"ME"}
					></TeamMember>
				</Flex>

				{/* PR Team*/}
				<Flex className={"flex lg:gap-20 gap-8 lg:flex-row flex-col mt-32"}>
					<TeamMember
						name={"Zubayer Bin Rahman"}
						image={"Zubayer Bin Rahman.png"}
						position={"Public Relations & Digital Marketing Executive"}
						deparment={"EEE"}
					></TeamMember>
					<TeamMember
						name={"Mst Afia Motahara Keya"}
						image={"Mst Afia Motahara Keya.png"}
						position={"Public Relations & Digital Marketing Executive"}
						deparment={"ME"}
					></TeamMember>
					<TeamMember
						name={"Afifa Tabassum Promity"}
						image={"Afifa Tabassum Promity.png"}
						position={"Public Relations & Digital Marketing Executive"}
						deparment={"ME"}
					></TeamMember>
				</Flex>
				<Flex className={"flex lg:gap-20 gap-8 lg:flex-row flex-col"}>
					<TeamMember
						name={"Tasfia Jaman"}
						image={"Tasfia Jaman.png"}
						position={"Public Relations & Digital Marketing Executive"}
						deparment={"EEE"}
					></TeamMember>
					<TeamMember
						name={"Ali Tahmid"}
						image={"Ali Tahmid Niloy.png"}
						position={"Jr Public Relations & Digital Marketing Executive"}
						deparment={"ME"}
					></TeamMember>
				</Flex>
			</Flex>
		</div>
	)
}

export default TeamContent
