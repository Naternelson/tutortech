import { Box } from "../../components";
import "./style.css";
export const Sandbox = () => {
	return (
		<Box className={"sandbox"}>
			<Box>
				<h1>Sandbox</h1>
				<hr />
				<ColorPalleteSection />
			</Box>
		</Box>
	);
};


const ColorPalleteSection = () => {
	return (
		<Box>
			<h2>Color Pallete</h2>
			<Box className={"color-palette"}>
				<h3> Brand Colors</h3>
				<Box className={["color-card", "color-br-1"]} style={{color: "white"}}>
					Color BR 1
				</Box>
				<ColorCard color={"color-br-2"} />
			</Box>
		</Box>
	);
}


const ColorCard = (props: {
	color: string,
	textColor?: string,
}) => {
	const label = props.color.replaceAll("-", " ");
	return (
		<Box className={["color-card", props.color]} style={{color: props.textColor || "white"}}>
			{label}
		</Box>
	)
}