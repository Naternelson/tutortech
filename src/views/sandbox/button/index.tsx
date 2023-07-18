import { Box, Button } from "../../../components";

export const SandboxButtonSection = () => {
	return (
		<section>
			<h2>Button Section</h2>
			<Box className={["sandbox-section", "flex-container", "flex-column", "gap-1"]}>
				<Button fullWidth size="small">
					Full Width Small
				</Button>
				<Button fullWidth size="medium">
					Full Width Medium
				</Button>
				<Button fullWidth size="large">
					Full Width Large
				</Button>
				<Button fullWidth disabled>
					Disabled
				</Button>
				<Box className={["flex-container", "flex-row", "justify-around", "align-center", "gap-1"]}>
					<Button variant="standard" color="primary" size="small">
						Regular Small
					</Button>
					<Button variant="standard" color="primary" size="medium" onClick={() => alert("Secret Message!")}>
						Regular Medium
					</Button>
					<Button variant="standard" color="primary" size="large">
						Regular Large
					</Button>
				</Box>
				<Box className={["flex-container", "flex-row", "justify-around", "align-center", "gap-1"]}>
					<Button variant="outlined" color="primary" size="small">
						Outlined Small
					</Button>
					<Button variant="outlined" color="primary" size="medium">
						Outlined Medium
					</Button>
					<Button variant="outlined" color="primary" size="large">
						Outlined Large
					</Button>
				</Box>
				<Box className={["flex-container", "flex-row", "justify-around", "align-center", "gap-1"]}>
					<Button variant="text" color="primary" size="small">
						Text Small
					</Button>
					<Button variant="text" color="primary" size="medium">
						Text Medium
					</Button>
					<Button variant="text" color="primary" size="large">
						Text Large
					</Button>
				</Box>
			</Box>
		</section>
	);
};
