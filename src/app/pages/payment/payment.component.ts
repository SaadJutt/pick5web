import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent  implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {}

  back() {
    this.router.navigateByUrl('tabs');
  }

  payout() {
    this.router.navigateByUrl('tabs/payout');
  }

}
