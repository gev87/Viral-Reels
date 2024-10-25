import classes from "./ViralReelsCreator.module.css";
import Image from "next/image";
import {
	CREATE,
	CREATE_REEL,
	FOLLOWERS,
	GATHER_IN_MINUTES,
	IN_WEEK,
	REELS,
	VIRAL,
} from "./content";
import VRButton from "../VRButton";

function ViralReelsCreator() {
	return (
		<div className={classes.main}>
			<div>
				<h1>
					{CREATE} <br />
					{VIRAL} <span>{REELS}</span>
					<Image src="/icons/createReelIcon.png" alt="custom icon" width={52} height={49} />
				</h1>
			</div>
			<div>
				{GATHER_IN_MINUTES}
				<span>{FOLLOWERS}</span>
				{IN_WEEK}
			</div>
			<VRButton>{CREATE_REEL}</VRButton>
		</div>
	);
}

export default ViralReelsCreator;