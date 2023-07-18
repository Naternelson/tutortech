import { Link } from "react-router-dom";
import { Box } from "../../components";
import { SandboxAnimationSection } from "./animations";
import { SandboxButtonSection } from "./button";
import { SandboxColorsSection } from "./colors";
import "./style.css";
export const Sandbox = () => {
	return (
		<Box className={"sandbox"}>

			<Box>
				<h1>Sandbox</h1>
				<Link to="/">Home</Link>
				<hr />
				<SandboxColorsSection/>
				<SandboxButtonSection/>
				<SandboxAnimationSection/>
			</Box>
		</Box>
	);
};

