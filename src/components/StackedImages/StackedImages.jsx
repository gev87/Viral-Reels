import { fetchImages } from "@/services/api";
import { Alert, Spin } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import classes from "./StackedImages.module.css";

function StackedImages() {
	const [images, setImages] = useState([]);
	const [message, setMessage] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	async function getImages() {
		setIsLoading(true);
		const response = await fetchImages();
		setIsLoading(false);
		if (response.success) {
			setImages(response.data);
			return;
		}
		setMessage("Failed to fetch images. Try to reload the page.");
	}

	useEffect(() => {
		getImages();
	}, []);

	return (
		<div className={classes.imageWrapper}>
			{isLoading ? (
				<Spin size="large" />
			) : (
				images.map((image, index) => (
					<Image
						priority
						width={265}
						height={397}
						key={image.id}
						src={image.urls.small}
						alt={image.alt_description || image.description}
						className={`${classes.image} ${classes[`imageZI${index + 1}`]}`}
					/>
				))
			)}
			{!!message && <Alert message="Error" type="error" showIcon description={message} />}
		</div>
	);
}
export default StackedImages;
