import classes from "./CardList.module.css";
import { Col, Row } from "antd";
import VRCard from "../VRCard";
import { ALL_CARDS, TITLE } from "./content";



function CardList() {
	return (
		<div className={classes.main}>
			<h2>{TITLE}</h2>
			<Row gutter={[16, 16]}>
				{ALL_CARDS.map((card) => (
					<Col key={card.title} xs={24} sm={24} md={12} lg={8} className={classes.column}>
						<VRCard {...card} />
					</Col>
				))}
			</Row>
		</div>
	);
}

export default CardList;
