import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payout',
  templateUrl: './payout.component.html',
  styleUrls: ['./payout.component.scss'],
})
export class PayoutComponent  implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {}

  back() {
    this.router.navigateByUrl('tabs/wallet');
  }

  payout() {
    this.router.navigateByUrl('tabs/addfund');
  }

}
