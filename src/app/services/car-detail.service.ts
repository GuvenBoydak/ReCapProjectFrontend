import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailResponseModel } from '../models/carDetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl="https://localhost:44354/api/cars/getallcardetails";

  constructor(private httpClient:HttpClient) { }

getDetails():Observable<CarDetailResponseModel>{
  return this.httpClient.get<CarDetailResponseModel>(this.apiUrl)
}

}
