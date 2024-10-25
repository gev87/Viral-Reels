"use client";
import Image from "next/image";
import classes from "./page.module.css";

import CardList from "@/components/CardList";
import StackedImages from "@/components/StackedImages";
import ViralReelsCreator from "@/components/ViralReelsCreator";
import TrustedBrands from "@/components/TrustedBrands";
import StepsToStart from "@/components/StepsToStart";
import GetGift from "@/components/GetGift/GetGift";
import VRButton from "@/components/VRButton";


export default function Home() {
	return (
		<div className={classes.main}>
			<section className={classes.section}>
				<Image
					priority
					src="/images/influ-ai.png"
					alt="logo"
					width={225}
					height={45}
					className={classes.logo}
				/>
				<StackedImages />
			</section>
			<section className={classes.section}>
				<ViralReelsCreator />
			</section>
			<section className={classes.section}>
				<CardList />
			</section>
			<section className={classes.section}>
				<TrustedBrands />
				<StepsToStart />
			</section>
			<GetGift />
			<div className={classes.language}>
				<VRButton>En</VRButton>
			</div>
		</div>
	);
}
