import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ISearchButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>{
    otherClasses:string
}