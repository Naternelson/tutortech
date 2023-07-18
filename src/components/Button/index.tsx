import { ForwardedRef, forwardRef } from "react";
import { BaseProps, resolveProps } from "../utilities"
import "./style.css"

export type ButtonProps = BaseProps<HTMLButtonElement> & {
    variant?: "standard" | "outlined" | "text";
    color?: "primary" | "error" | "disabled";
    size?: "small" | "medium" | "large";
    fullWidth?: boolean;
    disabled?: boolean;
}

export const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {className, variant, color, size,fullWidth, ...rest} = props;
    const cn = [className, fullWidth && "btn-full-width", `btn-${variant || "standard"}`, `btn-${color|| "primary"}`, `btn-${size || "medium"}`].flat()
    const p = resolveProps({...rest, className: cn});
    return <button {...p} ref={ref}/>
    
})
