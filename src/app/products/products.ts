import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  // discontinued--not available  anymore
  discontinued=true;
  stockcount=10;
  items=[
    {name:'Task A',status:'completed'},
     {name:'Task B',status:'InProgress'},
      {name:'Task C',status:'New'},
      {name:'Task D',status:'New'},
      {name:'Task D',status:'InProgress'},
  ]
  
}
