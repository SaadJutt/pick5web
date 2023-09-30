import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playing-history',
  templateUrl: './playing-history.component.html',
  styleUrls: ['./playing-history.component.scss'],
})
export class PlayingHistoryComponent  implements OnInit {

  isConcert = [
    {
    concertDate: 'Bearly  Dead - 18-2-2021',
    score: '56/100'
  },
  {
    concertDate: 'The Simon - 18-2-2021',
    score: '56/100'
  },
  {
    concertDate: 'Bearly  Dead - 18-2-2021',
    score: '56/100'
  },
  {
    concertDate: 'Bearly  Dead - 18-2-2021',
    score: '56/100'
  },
  {
    concertDate: 'Bearly  Dead - 18-2-2021',
    score: '56/100'
  },
  {
    concertDate: 'Bearly  Dead - 18-2-2021',
    score: '56/100'
  },
  {
    concertDate: 'Bearly  Dead - 18-2-2021',
    score: '56/100'
  },
  {
    concertDate: 'Bearly  Dead - 18-2-2021',
    score: '56/100'
  },
  {
    concertDate: 'Bearly  Dead - 18-2-2021',
    score: '56/100'
  },

];

  constructor(public router:Router) { }

  ngOnInit() {}

  back(){
    this.router.navigateByUrl('tabs/profile');
  }
  payingHistory(){
    this.router.navigateByUrl('tabs/payinghistory');
  }

}
