import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { CarımageService } from 'src/app/services/carImage.service';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carImages:CarImage[]=[];
  cars: Car[] = [];
  carDetails:CarDto[]=[];
  carId:number;
  currentDetail: Car;

  images: CarDto[] = [];
  imgUrl="https://localhost:44354/images/"
 
  currentimagesDetail : CarDto;
  currentImage:CarImage;
  
  
  

  constructor(private carService:CarService,private carImageService:CarımageService, private activateRoute:ActivatedRoute) { }

  dataLoaded=false;

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarsByCarDetail(params['carId']);
        this.getCarImagesByCarId(params['carId']);
      }
    });


  }

  getCarsById(carId: number) {
    this.carService.getDetails(carId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded=true
      console.log(response.data);
      console.log(this.cars);
    });
  }

  getCarsByCarDetail(carId: number) {
    console.log('params:' + carId);
    this.carService.getDetails(carId).subscribe((response) => {
      this.cars = response.data;
      console.log(response.data);
      console.log(this.cars);
    });
  }

  getCarImagesByCarId(carId: number) {
    this.carImageService.getCarImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
      console.log(response.data);
    });
  }

  getPath(){
    return this.imgUrl;
  }
  
  getButtonClass(image:CarImage){
    if (image=this.carImages[0]) {
      return "active";
    }
    else{
      return "";
    }
  }

  setCurrentImageClass(image:CarImage){
    this.currentImage = image;
  }
  

  
  getCurrentImageClass(image:CarImage){
    if(this.carImages[0]==image){
      return "carousel-item active";
    } else {
      return "carousel-item ";
    }
  }

  }

  
