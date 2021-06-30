import { CarImage } from "./carImage";

export interface CarDto{
    carId : number;
    brandId:number;
    colorId:number;
    colorName : string;
    brandName : string;
    dailyPrice : number;
    modelYear:number;
    description:string;
    carImage: CarImage[];
    imagePath : string[];
    carName:string;

}