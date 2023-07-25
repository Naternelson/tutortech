import { useState } from "react";
import { Backdrop, BackdropProps, Box } from "../../../components";
import { MobileTagIcon } from "../../../icons";
import "./style.css";

export const QuickMenu = () => {
	const { toggle, open, close } = useBehavior();
	return (
		<nav>
			{/* Backdrop to handle closing the menu when clicked outside */}
			<Backdrop show={open} onClick={close} />
			{/* Quick Menu container */}
			<Box className={["p-main", "quick-menu"]} aria-expanded={open}>
				<Box className={["flex-container", "flex-row", "justify-center"]}>
					<MobileTagIcon width={"3rem"} onClick={toggle} className={["mobile-tag-icon", "px-3", "py-2"]} />
				</Box>
				<h2>Quick Menu</h2>
			</Box>
		</nav>
	);
};
/**
 * Custom hook to manage the behavior of the Quick Menu component.
 * @returns {Object} Object containing state and functions for handling the menu behavior.
 */
const useBehavior = () => {
	const [open, setOpen] = useState(false);
	const toggle = () => setOpen((p) => !p);
	const close: BackdropProps["onClick"] = (shown) => {
		shown && setOpen(false);
	};
	return { open, toggle, close };
};
