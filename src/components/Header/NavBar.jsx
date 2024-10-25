import { Layout, Menu } from "antd";
import classes from "./NavBar.module.css";
import { MENU_ITEMS } from "./constants";

function NavBar() {
	const { Header: AntDesignHeader } = Layout;
	return (
		<AntDesignHeader className={classes.main}>
			<div className={classes.logo}>Viral Reels</div>
			<Menu theme="light" className={classes.navList} items={MENU_ITEMS} />
		</AntDesignHeader>
	);
}

export default NavBar;
