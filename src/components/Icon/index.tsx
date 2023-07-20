import { ForwardedRef, SVGProps, forwardRef } from "react";
import { ClassName, resolveSVGProps } from "../utilities";

export type IconProps = Omit<SVGProps<SVGSVGElement>, "className"> & {className?: ClassName};

export const Icon = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
    const p = resolveSVGProps(props)
    return (<svg {...p} ref={ref}/>)
})