import React from "react"
import { ICustomFilter } from "./custom-filter.props"


const CustomFilter:React.FC<ICustomFilter> = ({title}):JSX.Element => {
   return (
    <div>{title}</div>
   )
}

export default CustomFilter