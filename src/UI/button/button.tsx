import Image from "next/image"
import { IMyButton } from "./button.props"
import React from "react"

const Button:React.FC<IMyButton> = ({textStyles,rightIcon,...props}):JSX.Element => {
  return (
   <button
  {...props}
  disabled={false}
  type="button"
  className={`custom-btn ${props.containerStyles}`}

   >
   <span className={`flex-1 ${textStyles}`}>
     {props.title}
   </span>
   </button>
  )
}

export default Button
