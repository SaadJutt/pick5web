import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paying-history',
  templateUrl: './paying-history.component.html',
  styleUrls: ['./paying-history.component.scss'],
})
export class PayingHistoryComponent  implements OnInit {

  isPayment = [];

  constructor( public router:Router) {
    this.isPayment.length = 10;
   }

  ngOnInit() {}
  back(){
    this.router.navigateByUrl('tabs/profile');
  }

}
