import { Link } from "react-router-dom";
import { Backdrop, Box } from "../../components";
import "./style.css";
import { MobileTagIcon } from "../../icons";
import { useState } from "react";

export const Homepage = () => {
	return (
		<div>
			<h1>HomePage</h1>
			<Link to="/sandbox">Sandbox</Link>
			<QuickMenu />
		</div>
	);
};

const QuickMenu = () => {
	const [open, setOpen] = useState(false);
	return (
		<nav>
			<Backdrop
				show={open}
				onClick={(shown) => {
					shown && setOpen(false);
				}}
			/>

			<Box className={["p-main", "quick-menu"]} aria-expanded={open}>
				<Box className={["flex-container", "flex-row", "justify-center"]}>
					<MobileTagIcon
						width={"3rem"}
						onClick={() => {
							setOpen((p) => !p);
						}}
						className={["mobile-tag-icon", "px-3", "py-2"]}
					/>
				</Box>
				<h2>Quick Menu</h2>
			</Box>
		</nav>
	);
};
