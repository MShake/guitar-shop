import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as map from 'rxjs/add/operator/map';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  
  products$: Observable<Product[]>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.products$ = this.http
      .get<Product[]>('http://localhost:3000/products');
  }



}
