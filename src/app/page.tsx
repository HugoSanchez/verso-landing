"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { useState } from "react";


export const FirstScreen = () => {
	return (
		<BlurFade delay={0.4} duration={0.7}>
			<h1 className="text-2xl text-gray-200 font-sans font-light leading-relaxed text-center">
				<span className="font-black font-serif italic">Verso</span> is a personal venture studio.
			</h1>
		</BlurFade>
	)
}



export const SecondScreen = () => {
	return (
		<BlurFade delay={0.4} duration={0.7}>
			<h1 className="text-2xl text-gray-200 font-extralight leading-relaxed text-center">
				It&apos;s a <span className="font-bold"> playground </span>
				to build, experiment and launch
				<br/>
				new digital products and experiences.
			</h1>
		</BlurFade>
	)
}

export const ThirdScreen = () => {
	return (
		<BlurFade delay={0.4} duration={0.7}>
			<h1 className="text-2xl text-gray-200 font-sans font-light leading-relaxed text-center">
				Some of the things we&apos;ve worked on include:
			</h1>
		</BlurFade>
	)
}

export const FourthScreen = () => {

	const handleStepFourthRedirect = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		e.stopPropagation();
		window.open("https://github.com/itsverso/smart-contracts-v2", "_blank");
	}

	return (
		<BlurFade delay={0.4} duration={0.7}>
			<h1 className="text-2xl text-gray-200 font-sans font-light text-center mb-2">
				A protocol for always-on liquid digital arts markets.
			</h1>
			<button
				className="w-full"
				onClick={(e) => handleStepFourthRedirect(e)}>
				<p className="text-gray-200 text-lg text-center font-light">
					Source code <a href="https://github.com/itsverso/smart-contracts-v2" target="_blank" rel="noopener noreferrer">here.</a>
				</p>
			</button>

		</BlurFade>
	)
}

export const FifthScreen = () => {
	return (
		<BlurFade delay={0.4} duration={0.7}>
			<h1 className="text-2xl text-gray-200 font-sans font-light leading-relaxed text-center">
				A clean and simple solution to help online health practitioners manage their bookings and get paid in time.
				<br/>
				<span className="text-white text-lg">
					Access <a href="https://www.itscoco.app/" target="_blank" rel="noopener noreferrer">here.</a>
				</span>
			</h1>
		</BlurFade>
	)
}

export const SixthScreen = () => {
	return (
		<BlurFade delay={0.4} duration={0.7}>
			<h1 className="text-2xl text-gray-200 font-sans font-light leading-relaxed text-center">
				An ai-first open data explorer.
				<br/>
				<span className="text-white text-lg">
					Still tbd.
				</span>
			</h1>
		</BlurFade>
	)
}

export const FinalScreen = () => {
	return (
		<BlurFade delay={0.4} duration={0.7}>
			<h1 className="text-2xl text-gray-200 font-sans font-light leading-relaxed text-center">
				Want to reach out?
				<br/>
				<span className="text-white text-base">
					Email me here.
				</span>
			</h1>
		</BlurFade>
	)
}

export default function Home() {
	const [counter, setCounter] = useState(0);

	const handleClick = () => {
		if (counter < 6) setCounter(counter + 1);
		else setCounter(0);
	}

	return (
		<div className="h-screen w-screen bg-black">
			<main
				onClick={handleClick}
				className="h-full max-w-2xl mx-auto flex items-center justify-center flex-col">
					{
						counter === 0 && <FirstScreen />
					}
					{
						counter === 1 && <SecondScreen />
					}
					{
						counter === 2 && <ThirdScreen />
					}
					{
						counter === 3 && <FourthScreen />
					}
					{
						counter === 4 && <FifthScreen />
					}
					{
						counter === 5 && <SixthScreen />
					}
					{
						counter >= 6 && <FinalScreen />
					}
			</main>
		</div>
	);
}
