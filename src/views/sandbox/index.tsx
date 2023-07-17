import { Box } from "../../components";
import { SandboxColorsSection } from "./colors";
import "./style.css";
export const Sandbox = () => {
	return (
		<Box className={"sandbox"}>
			<Box>
				<h1>Sandbox</h1>
				<hr />
				<SandboxColorsSection/>
			</Box>
		</Box>
	);
};

