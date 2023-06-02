import { Injectable } from '@angular/core';
import { BasketModel } from '../models/basket.model';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Const } from '../consts/const';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baskets : BasketModel[]=[];

  constructor(private http:HttpClient) {
    this.getBasket();
  }
  delete(id : Number){
    this.http.delete<any>(Const.baseUrl+"baskets/" + id).subscribe({
      next: ()=> this.getBasket(),
      error: (e)=> console.log(e)
    });
  }
  getBasket(){
    this.http.get<any>(Const.baseUrl+"baskets").subscribe({
      next:( response)=> this.baskets=response,
      error:(error)=> console.log(error),
    });
  }
}
