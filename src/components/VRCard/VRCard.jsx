import Card from "antd/es/card/Card";
import Image from "next/image";
import VRButton from "../VRButton";
import classes from "./VRCard.module.css";

 function VRCard({ title, text, imageSrc, imageAlt, buttonText }) {
	return (
		<Card
			className={classes.card}
			cover={<Image alt={imageAlt} src={imageSrc} width={312} height={312} />}
		>
			<div className={classes.cardContent}>
				<h4>{title}</h4>
				<p>{text}</p>
				<VRButton>{buttonText}</VRButton>
			</div>
		</Card>
	);
}

export default VRCard;