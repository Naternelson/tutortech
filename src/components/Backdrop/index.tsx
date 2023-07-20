import { MouseEvent } from "react";
import { Box } from "../Box";
import "./style.css"

export type BackdropProps = {
    show?: boolean;
    onClick?: (showing: boolean, event: MouseEvent | undefined) => void;
}
export const Backdrop = (props: BackdropProps) => {
    return (<Box className={["backdrop"]} aria-hidden data-shown={props.show} onClick={((e) => props.onClick?.(!!props.show, e))}/>)
}