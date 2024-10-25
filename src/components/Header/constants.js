const { default: Link } = require("next/link");

export const MENU_ITEMS = [
	{
		key: "1",
		label: <Link href="/">Home</Link>,
	},
	{
		key: "2",
		label: <Link href="/about">About</Link>,
	},
	{
		key: "3",
		label: <Link href="/contact">Contact</Link>,
	},
];
