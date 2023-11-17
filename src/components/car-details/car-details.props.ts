import { ICarData } from "@/constants";

export interface ICarDetailsProps {
    data:ICarData
    closeModal:() => void
    isShow:boolean
}