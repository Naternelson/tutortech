import { Box } from "../../../components"
import "./style.css"

export const SandboxColorsSection = () => {
    return (
		<section>
			<h2>Colors Section</h2>
			<Box className={["grid-container", "grid-cols-4", "gap-1", "color-pallete"]}>
				<BrandColors />
				{/* <TextBrandColors/> */}
				<DenotiveColors />
				<LayoutColors />
				<InteractiveColors/>
			</Box>
		</section>
	);
}


const ColorCard = (props: {color: string, label: string}) => {
    return (
        <Box className={["color-card", props.color,  "flex-container", "flex-column", "justify-center", "align-center"]}>
            {props.label}
        </Box>
    )
}

const BrandColors = () => {
    return (
        <Box className={["flex-container", "flex-column"]}>
            {Array(5).fill(0).map((_, i) => <ColorCard key={i} color={`brand-color-${i+1}`} label={`brand ${i+1}`}/>)}
        </Box>
    )
}


const DenotiveColors = () => {
    return (
		<Box className={["flex-container", "flex-column"]}>
			<ColorCard color={"den-error"} label={"Error"} />
			<ColorCard color={"den-success"} label={"Success"} />
			<ColorCard color={"den-disabled-light"} label={"Disabled Light"} />
			<ColorCard color={"den-disabled-dark"} label={"Disabled Dark"} />
		</Box>
	);
}

const LayoutColors = () => {
    return (
		<Box className={["flex-container", "flex-column"]}>
			<ColorCard color={"bg-dark"} label={"BG Dark"} />
			<ColorCard color={"bg-light"} label={"BG Light"} />
			<ColorCard color={"p-main"} label={"Primary"} />
			<ColorCard color={"l-hc1"} label={"Light HC - 1"} />
			<ColorCard color={"l-hc2"} label={"Light HC - 2"} />
			<ColorCard color={"l-lc1"} label={"Light LC - 1"} />
			<ColorCard color={"d-hc1"} label={"Dark HC - 1"} />
			<ColorCard color={"d-hc2"} label={"Dark HC - 2"} />
			<ColorCard color={"d-lc1"} label={"Dark LC - 1"} />
		</Box>
	);
}

const InteractiveColors = () => {
    return (
		<Box className={["flex-container", "flex-column"]}>
			<ColorCard color={"i-p-lighter"} label={"p lighter"} />
			<ColorCard color={"i-p-light"} label={"p light"} />
			<ColorCard color={"i-p-main"} label={"primary"} />
			<ColorCard color={"i-p-dark"} label={"p dark"} />
			<ColorCard color={"i-p-darker"} label={"p darker"} />
		</Box>
	);
}
