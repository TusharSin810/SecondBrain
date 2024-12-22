import { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;   
    onClick: () => void;
}

const defaultStyles = "rounded-md flex items-center"

const sizeStyles = {
    "sm": "py-1 px-2",
    "md": "py-2 px-3",
    "lg": "py-3 py-4",
} 

const variantstyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-500", 
}

export const Button = (props: ButtonProps) => {
    return <button className={`${variantstyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>{props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null} {props.text} {props.endIcon ? <div className="pl-2">{props.endIcon}</div>: null}</button>

}

