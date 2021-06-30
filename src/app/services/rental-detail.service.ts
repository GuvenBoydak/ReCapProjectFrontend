import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../models/rental';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class RentalDetailService {

  apiUrl="https://localhost:44354/api/rentals/getallrentaldetails"

  constructor(private httpClient:HttpClient) { }

  getReantalDetails():Observable<ListResponseModel<Rental>>{
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl)

  }
}
