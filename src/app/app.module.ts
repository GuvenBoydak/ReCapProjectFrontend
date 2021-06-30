import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes , Route} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './component/car/car.component';
import { BrandComponent } from './component/brand/brand.component';
import { ColorComponent } from './component/color/color.component';
import { NaviComponent } from './component/navi/navi.component';
import { CustomerComponent } from './component/customer/customer.component';
import { HttpClientModule } from '@angular/common/http';
import { RentalComponent } from './component/rental/rental.component';
import { CarDetailComponent } from './component/car-detail/car-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    NaviComponent,
    CustomerComponent,
    RentalComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    RouterModule.forRoot([
      {path:"cars",component:CarComponent},
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
