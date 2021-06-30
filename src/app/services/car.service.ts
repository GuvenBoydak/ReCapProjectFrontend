import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44354/api/";


  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>> {
    let newURL = this.apiUrl + "cars/getallcardetails";
    return this.httpClient.get<ListResponseModel<Car>>(newURL)
  }

  getDetails(carId : number):Observable<ListResponseModel<CarDto>>{
       let newPath = this.apiUrl + "cars/getallcardetailsbycarId?id="+ carId;
       return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getcardetailbyid(id: number): Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + 'cars/getallcardetailsbycarId?id=' + id;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcarsbybrands?brandId="+brandId;

    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcarsbycolors?colorId="+colorId;

    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getİmagesByCarId(carId : number) : Observable<ListResponseModel<CarDto>>{
    let newPath = this.apiUrl + + "cars/getimagebycarid?id=" + carId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
}



}
