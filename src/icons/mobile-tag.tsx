import { ForwardedRef, forwardRef } from "react";
import { Icon, IconProps } from "../components/Icon";


export const MobileTagIcon = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
    return (
		<Icon {...props} ref={ref} viewBox="0 0 50 9" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="50" height="3" rx="1.5" fill="currentColor" />
			<rect x="12" y="6" width="25" height="3" rx="1.5" fill="currentColor" />
		</Icon>
	);
}
)