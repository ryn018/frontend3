import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private _product:ProductService) { }

  ngOnInit(): void {
  }
loginUser()
{
  this._product.loginUser()
}
}
