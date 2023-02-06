import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ProductComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    console.log(1);
  }
}
