
import { DetailedHTMLProps, HTMLAttributes } from "react";
export type ClassName = string | Array<string | undefined | null | false>;
export type BaseProps<T extends HTMLElement> = Omit<DetailedHTMLProps<HTMLAttributes<T>, T>, "className"> & {
	className?: ClassName;
	// toggle?: boolean; // Transition the component from 'entering' to 'entered' when the value is true, and from 'exiting' to 'exited' when the value is false.
	// transitionState?: "entering" | "entered" | "exiting" | "exited"; // The current transition state of the component. Overrides the default behavior.
	// timeout?: number | { enter?: number; exit?: number }; // The duration of the transition, in milliseconds
	// onEnter?: () => void; // Callback fired before the "entering" status is applied.
	// onEntering?: () => void; // Callback fired after the "entering" status is applied.
	// onEntered?: () => void; // Callback fired after the "entered" status is applied.
	// onExit?: () => void; // Callback fired before the "exiting" status is applied.
	// onExiting?: () => void; // Callback fired after the "exiting" status is applied.
	// onExited?: () => void; // Callback fired after the "exited" status is applied.
	// "data-transition-state"?: "entering" | "entered" | "exiting" | "exited";
};


export const resolveCN = (...args: ClassName[]): string => {
	return args.filter(Boolean).flat(Infinity).join(" ");
};


export const resolveProps = <T extends HTMLElement>(props: BaseProps<T>): Omit<BaseProps<T>, "className"> & {
    className: string
} => {
    return {
        ...props,
        className: resolveCN(props.className || [])
    }
}