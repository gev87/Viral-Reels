
import Image from 'next/image';
import classes from './TrustedBrands.module.css';


const TRUSTED_BRANDS = "Нам доверяют ведущие компании по всему миру";
const IMAGE_ALT = "ведущие компании";

function TrustedBrands() {
    return (
			<div className={classes.main}>
				<div>{TRUSTED_BRANDS}</div>
				<Image width={642} height={67} alt={IMAGE_ALT} src="/images/brands.png"/>
			</div>
		);
}

export default TrustedBrands;