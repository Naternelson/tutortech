import { useEffect, useRef, useState } from "react";
import { Box } from "../../../components";
import "./style.css";

export const SandboxAnimationSection = () => {
	return (
		<section>
			<h2>Animations Section</h2>
			<Box className={["sandbox-section", "flex-container", "flex-column", "gap-1"]}>
				<Box className={["flex-container", "flex-row", "gap-1"]}>
					{/* <FadeupCard />
                    <FadeDownCard/> */}
					<FadeCard color="brand-color-1" label="Fade" />
					<FadeCard color="brand-color-2" label="Fade Up" direction="up" />
					<FadeCard color="brand-color-3" label="Fade Down" direction="down" />
					<FadeCard color="brand-color-4" label="Fade Left" direction="left" />
                    <FadeCard color="brand-color-5" label="Fade Right" direction="right" />
				</Box>
			</Box>
		</section>
	);
};

const FadeCard = (props:{direction?: "left" | "right" | "up" | "down", color: string, label: string}) => {
    const [effect, setEffect] = useState(false);
    const onClick = () => effect === false && setEffect(true);
    return (
        <Box
            onClick={onClick}
            onAnimationEnd={() => setEffect(false)}
            className={["card", props.color, "flex-container", "justify-center", "align-center", effect && `fade${props.direction ? `-${props.direction}`: ""}`]}>
                <span>{props.label}</span>
        </Box>

        
    )
    }

const FadeupCard = () => {
	const [fadeUp, setFadeUp] = useState(false);
	const onClick = () => fadeUp === false && setFadeUp(true);
	return (
		<Box
			onClick={onClick}
			onAnimationEnd={() => setFadeUp(false)}
			className={["card", "p-main", "flex-container", "justify-center", "align-center", fadeUp && "fade-up"]}>
			<span>Fade up</span>
		</Box>
	);
};

const FadeDownCard = () => {
	const [effect, setEffect] = useState(false);
	const onClick = () => effect === false && setEffect(true);
	return (
		<Box
			onClick={onClick}
			onAnimationEnd={() => setEffect(false)}
			className={["card", "brand-color-2", "flex-container", "justify-center", "align-center", effect && "fade-down"]}>
			<span>Fade Down</span>
		</Box>
	);
};
