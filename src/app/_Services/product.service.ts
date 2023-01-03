import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../_Model/Product.model';
import { environment } from 'src/environments/environment';
import{ Projet } from '../_Model/Projet';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclient: HttpClient) { }

  public addProduct(product : FormData){
    return this.httpclient.post<Product>(environment.apipathback+"/addnewProduct", product);
  }
  public Upload(projet : any){

    return this.httpclient.post<any>(environment.apipathback+"/api/csv/upload", projet);
  }
}
