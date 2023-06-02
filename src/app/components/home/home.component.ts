import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Const } from 'src/app/consts/const';
import { BasketModel } from 'src/app/models/basket.model';
import { ProductModel } from 'src/app/models/product.model';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product : ProductModel = new ProductModel();
  products : ProductModel[] = [
  ];

  constructor(private http: HttpClient,private basket: BasketService) {

  }
  ngOnInit(): void {
   this.getProducts();
  }

  getProducts(){
    this.http.get<any>(Const.baseUrl+"products").subscribe({
      next: (res)=>this.products = res,
      error:(err)=>console.log(err),
    });
  }
  deleteProduct( id :number) {
    this.http.delete<any>(Const.baseUrl+"products/" + id).subscribe({
      next: ()=>this.getProducts(),
      error:(err)=>console.log(err),
    });
  }


  addProduct(){
    this.http.post<any>(Const.baseUrl+"products",this.product).subscribe({
      next:(res) =>{
        this.getProducts();
        this.product= new ProductModel();
      },
      error:(err) =>console.log(err),
    });
  }
  addBasket(model : ProductModel){

    this.http.post(Const.baseUrl+"baskets",model).subscribe({
      next:() => {
        console.log("Ürün eklendi");
        this.getBasket();
      },
      error:(e) => console.log(e),
    });
  }

  getBasket(){
    this.http.get<any>(Const.baseUrl+"baskets").subscribe({
      next:( response)=> this.basket.baskets=response,
      error:(error)=> console.log(error),
    });
  }
}
