import React from "react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";

const Hero = () => {
	return (
		<div>
			<HeroHighlight className="text-white text-6xl">
				<div>
					<span>{`Hi there! `}</span>
					<div>
						<span>{`I'm Dimitar, a `}</span>
						<Highlight className="text-6xl text-black">{`<frontend>`}</Highlight>
						<span>{` Developer `}</span>
						{/* <div className="flex justify-between">
							<Image
								className="rounded-xl border-4 border-transparent mt-14 w-72 h-72"
								alt="picture of dimitar"
								src="/images/me.jpg"
								width={2500}
								height={2500}
							/> */}
						<div className="flex flex-col items-end">
							<span>{`and  `}</span>
							<div className="pt-12 translate-y-[-50%] translate-x-2.5">
								<CardContainer className="h-auto text-center">
									<CardBody className="flex item-center justify-center">
										<CardItem
											className="flex justify-center items-center font-semibold pb-2 px-1 bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 text-transparent bg-clip-text"
											translateZ={35}
										>
											3D Designer
										</CardItem>
									</CardBody>
								</CardContainer>
							</div>
						</div>
						{/* </div> */}
					</div>
				</div>
			</HeroHighlight>
		</div>
	);
};

export default Hero;
