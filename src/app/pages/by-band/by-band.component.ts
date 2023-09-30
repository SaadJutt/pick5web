import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-by-band',
  templateUrl: './by-band.component.html',
  styleUrls: ['./by-band.component.scss'],
})
export class ByBandComponent  implements OnInit {

  isActive = true;

  isByBand = [
    {
    bandName: 'Bearly Dead',
    bandPoints: '12'
  },
  {
    bandName: 'Neughbor',
    bandPoints: '8'
  },
  {
    bandName: 'Beoga',
    bandPoints: '6'
  },
  {
    bandName: '84 Tigers',
    bandPoints: '6'
  },
  {
    bandName: 'The simon & garfunke story',
    bandPoints: '4'
  },
  {
    bandName: 'Jerry Cantral',
    bandPoints: '2'
  },
  {
    bandName: 'Bearly Dead',
    bandPoints: '1'
  },
];

isByConcert = [
  {
  bandName: 'Bearly Dead',
  location: 'Providence',
  date: '6.3.23',
  score: '12-20'
},
{
  bandName: 'Neughbor',
  location: 'Uniondale',
  date: '6.3.23',
  score: '12-80'
},
{
  bandName: 'Beoga',
  location: 'Uniondale',
  date: '6.3.23',
  score: '12-20'
},
{
  bandName: '84 Tigers',
  location: 'Providence',
  date: '6.3.23',
  score: '12-20'
},
{
  bandName: 'Bearly Dead',
  location: 'Providence',
  date: '6.3.23',
  score: '12-20'
},
{
  bandName: 'Bearly Dead',
  location: 'Providence',
  date: '6.3.23',
  score: '12-20'
},
{
  bandName: 'Bearly Dead',
  location: 'Providence',
  date: '6.3.23',
  score: '12-20'
},
];

isBandListFlag = false;

  constructor(public router: Router) { }

  ngOnInit() {}

  back(){
    this.router.navigateByUrl('tabs/leaderboard');
  }

  playing() {
    this.router.navigateByUrl('tabs/playinghistory');
  }

  isBand() {
    console.log('call');
    this.isBandListFlag = false;
   
      this.isActive = true;
    
  }

  isConcert() {
    this.isBandListFlag = true;
    this.isActive = false;
  }

}
