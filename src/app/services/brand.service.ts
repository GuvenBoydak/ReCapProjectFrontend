import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44354/api/brands/getall";

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
  return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl)

}

carDetails():Observable<ListResponseModel<Car>>{
  let newPath = this.apiUrl +"brands/getcardetails"
  return this.httpClient.get<ListResponseModel<Car>>(newPath)
}

}
