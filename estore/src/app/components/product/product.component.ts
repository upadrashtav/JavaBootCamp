import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  doClick(){
    alert("Button Clicked");
  }
  @Input() title?:string;
  @Input() description?:string;
}
