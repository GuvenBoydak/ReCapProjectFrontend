import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/listResponseModel';
@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl="https://localhost:44354/api/";

  constructor(private httpClient:HttpClient) { }

getDetails(carId : number):Observable<ListResponseModel<CarDto>>{
  let newPath = this.apiUrl + "cars/getallcardetails?id="+ carId;
  return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
}

}
