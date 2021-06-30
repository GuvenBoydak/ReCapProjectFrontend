import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { CarDto } from 'src/app/models/carDto';
import { Car } from 'src/app/models/car';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarımageService } from 'src/app/services/carImage.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  
  cars: Car[];
  carsDto: CarDto[]=[];
  carImages:CarImage[];
  carId:number;
  currentCar : Car;
  car : Car;
  imgUrl:string="https://localhost:44354/images/"
  defaultImage="default.jpg";
  


  constructor(private carService:CarService,private carImageService:CarımageService, 
    private activatedRoute:ActivatedRoute ) { }

 
  dataLoaded=false;
 
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params['brandId'])
      { this.getCarsByBrand(params["brandId"])
      }

      // else if (params["carId"]) {
      //   this.getCarDetails(params["carId"]); 
      //  }
    
     else if(params["colorId"])
       {this.getCarsByColor(params["colorId"])
       }
    
    
     else { 
        this.getCars()
       }
       })
  }
  

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
      this.dataLoaded=true;
    })
  }


 
    getCarsByBrand(brandId:number){
      this.carService.getCarsByBrand(brandId).subscribe(response=>{
        this.cars = response.data
        this.dataLoaded=true;
      })
    }

    getCarsByColor(colorId:number){
      this.carService.getCarsByColor(colorId).subscribe(response=>{
        this.cars = response.data
        this.dataLoaded=true;
      })
    }

    setCurrentCar(car : Car){
      this.currentCar = car
    }
  
    getCurrentCarClass(car : Car){
      if(car == this.currentCar)
      return "table-success"
      else
      return ""
    }
  

    
}
