import Image from "next/image";
import VRButton from "../VRButton";
import { BUTTON_TEXT, TEXT, TITLE } from "./content";
import classes from "./GetGift.module.css";

function GetGift() {
	return (
		<div className={classes.main}>
			<h2>{TITLE}</h2>
			<p>{TEXT}</p>
			<VRButton>{BUTTON_TEXT}</VRButton>
			<Image
				src="/images/working-in-the-bedroom.png"
				alt="working in the bedroom"
				width={162}
				height={234}
				className={classes.imgLeft}
			/>
			<Image
				src="/images/selfy.png"
				alt="Girl taking selfy"
				width={162}
				height={242}
				className={classes.imgRight}
			/>
			<Image
				src="/images/starLeft.png"
				alt="star"
				width={69}
				height={69}
				className={classes.starLeft}
			/>
			<Image
				src="/images/starRight.png"
				alt="star"
				width={48}
				height={48}
				className={classes.starRight}
			/>
		</div>
	);
}

export default GetGift;
