import { Component,Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-list';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  HousingLocationList:Array<HousingLocation>=[];
  housingService = inject(HousingService)

  constructor(){
    this.HousingLocationList = this.housingService.getAllHousingList();
    console.log("hello");
    
  }
}
