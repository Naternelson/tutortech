import { Box } from "../../components";
import { SandboxButtonSection } from "./button";
import { SandboxColorsSection } from "./colors";
import "./style.css";
export const Sandbox = () => {
	return (
		<Box className={"sandbox"}>
			<Box>
				<h1>Sandbox</h1>
				<hr />
				<SandboxColorsSection/>
				<SandboxButtonSection/>
			</Box>
		</Box>
	);
};

