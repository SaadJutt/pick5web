import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playing-history-modal',
  templateUrl: './playing-history-modal.component.html',
  styleUrls: ['./playing-history-modal.component.scss'],
})
export class PlayingHistoryModalComponent  implements OnInit {
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
  }
];

constructor(public router: Router)  { }

  ngOnInit() {}

  loadMore(){
    this.router.navigateByUrl('tabs/payinghistory');
  }

}
