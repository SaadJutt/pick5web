import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public profile: any = [];
  email:any = '';
  name:any = '';
  constructor(public router: Router) {
      this.profile = localStorage.getItem('profile');
    
      this.profile = JSON.parse(this.profile); 
      console.log(this.profile);
      this.email = this.profile[0].email;
      this.name = this.profile[0].name;
  }

  bandList(){
      console.log('call');
      this.router.navigateByUrl('tabs/bandlist');

  }

  isLeaderBoard() {
    this.router.navigateByUrl('tabs/leaderboard');
  }

  isPlayingHistory(){
    this.router.navigateByUrl('tabs/playinghistory');
  }

  isPaymentHistory() {
    this.router.navigateByUrl('tabs/payinghistory');
  }

  isProfile(){
    this.router.navigateByUrl('tabs/profile');
  }

}
