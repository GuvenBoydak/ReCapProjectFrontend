import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/Rental';
import { RentalDetailService } from 'src/app/services/rental-detail.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals:Rental[]=[]

  constructor(private rentalDetailService:RentalDetailService) { }

  ngOnInit(): void {
    this.getReantalDetails();
  }

  getReantalDetails(){
    this.rentalDetailService.getReantalDetails().subscribe(response=>{
      this.rentals=response.data;
    });
  }

}
