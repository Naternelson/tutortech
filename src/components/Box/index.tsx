import { ForwardedRef, PropsWithChildren, forwardRef } from "react";
import { BaseProps, resolveProps } from "../utilities";


export type BoxProps = PropsWithChildren<BaseProps<HTMLDivElement>>;
export const Box = forwardRef((props: BoxProps, ref:ForwardedRef<HTMLDivElement>) => {
    const resolvedProps = resolveProps(props);
    return (
		<div ref={ref} {...resolvedProps}/>
	);
})