import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-fund',
  templateUrl: './add-fund.component.html',
  styleUrls: ['./add-fund.component.scss'],
})
export class AddFundComponent  implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {}

  back() {
    this.router.navigateByUrl('tabs/payout');
  }

  payout() {
    this.router.navigateByUrl('tabs');
  }

}
