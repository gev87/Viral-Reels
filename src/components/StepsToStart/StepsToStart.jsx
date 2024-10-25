import Image from "next/image";
import classes from "./StepsToStart.module.css";

const TITLE = "Что нужно от вас?";
const PARAGRAPH = "За 3 минуты +200 подписчиков";

function StepsToStart() {
	return (
		<div className={classes.main}>
			<div className={classes.leftSide}>
				<p>{PARAGRAPH}</p>
				<h2>{TITLE}</h2>
			</div>
			<Image
				priority
				src="/images/Logo-white.png"
				alt="logo"
				width={124}
				height={25}
				className={classes.logo}
			/>
			<Image
				priority
				src="/images/Steps.png"
				alt="steps to do"
				width={485}
				height={457}
				className={classes.img}
			/>
		</div>
	);
}

export default StepsToStart;
