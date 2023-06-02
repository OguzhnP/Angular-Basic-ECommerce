import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Const } from 'src/app/consts/const';
import { BasketModel } from 'src/app/models/basket.model';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterContentChecked {
  baskets : BasketModel[]=[];
  constructor(private http : HttpClient,private basket:BasketService) {

  }
  ngAfterContentChecked(): void {
  this.getBasket();
  }



  getBasket(){
  this.baskets= this.basket.baskets
  }



}
