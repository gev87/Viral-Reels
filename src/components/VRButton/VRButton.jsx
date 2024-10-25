import React, { useEffect, useState } from "react";
import { Button, ConfigProvider } from "antd";
import { createStyles } from "antd-style";

const useStyle = createStyles(({ css }) => ({
	VRButton: css`
	    align-self: center;
		border-radius: 100px;
		box-shadow: 0px 4px 22px 0px var(--Brand-A);
		padding-left: 24px;
		padding-right: 24px;
		background: var(--Brand-A);
		font-size: 16px;
		font-weight: 700;
		line-height: 48px;
		height: 56px;
		color: var(--white);
		border: none;
		&:hover {
			color: var(--black);
		}
	`,
}));

const VRButton = ({ children, ...props }) => {
	const { styles } = useStyle();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: "var(--Brand-A)",
					colorText: "var(--white)",
				},
			}}
		>
			<Button {...props} className={styles.VRButton}>
				{children}
			</Button>
		</ConfigProvider>
	);
};

export default VRButton;
