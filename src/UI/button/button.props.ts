import {DetailedHTMLProps,ButtonHTMLAttributes} from "react"
export interface IMyButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>{
title:string
containerStyles?:string
handleClick?:() => void
textStyles?:string
rightIcon?:string
isDisabled?:boolean
}
