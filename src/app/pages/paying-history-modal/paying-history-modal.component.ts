import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paying-history-modal',
  templateUrl: './paying-history-modal.component.html',
  styleUrls: ['./paying-history-modal.component.scss'],
})
export class PayingHistoryModalComponent  implements OnInit {

  isPayment = [];

  constructor(public router: Router) { 
    this.isPayment.length = 3;
  }

  ngOnInit() {}
  loadMore(){
    this.router.navigateByUrl('tabs/payinghistory');
  }

}
