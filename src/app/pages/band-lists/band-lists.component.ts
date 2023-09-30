import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from '../../providers/api.service';
import * as moment from 'moment';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-band-lists',
  templateUrl: './band-lists.component.html',
  styleUrls: ['./band-lists.component.scss'],
})
export class BandListsComponent  implements OnInit {


  public bandList: any = [];
  upComingConcerts: any = [];

   isActive = true;
   isBandListFlag = false;
   token: any ;
   

   isUpcommingArray = [
    {
      day: '',
      date: '',
      bandsList: [
        {
        bandName: 'Bearly Dead - Providence',
        price :'$20'
      },
      {
        bandName: 'Neughbor- Uniondale',
        price :'$20'
      },{
        bandName: 'Beoga - Providence ',
        price :'$20'
      },
      {
        bandName: '84 Tigers - Providence',
        price :'$20'
      }
    ]
   },
   {
    day: 'Sunday',
    date: 'May, 24 2023',
    bandsList: [
      {
      bandName: 'Jerry Cantral - Providence',
      price :'$20'
    },
    {
      bandName: 'Goose - Uniondale',
      price :'$20'
    },{
      bandName: 'Phish - Uniondale ',
      price :'$20'
    }
  ]
 },
 {
  day: 'Monday',
  date: 'May, 25 2023',
  bandsList: [
    {
    bandName: 'Jerry Cantral - Providence',
    price :'$20'
  },
  {
    bandName: 'Goose - Uniondale',
    price :'$20'
  },{
    bandName: 'Phish - Uniondale ',
    price :'$20'
  }
]
},{
  day: 'Tuesday',
  date: 'May, 26 2023',
  bandsList: [
    {
    bandName: 'Jerry Cantral - Providence',
    price :'$20'
  },
  {
    bandName: 'Goose - Uniondale',
    price :'$20'
  },{
    bandName: 'Phish - Uniondale ',
    price :'$20'
  }
]
}
  ];

  constructor(private router: Router, public service: ApiService) {
    this.token = localStorage.getItem('apiToken');

   }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.getBandlists();
  }

  getBandlists() {
    this.service.presentLoader();
    this.service.getWithToken('bands', this.token).subscribe((data: any) => {
      if (data.data.length > 0) {
        this.bandList = data.data;
        console.log(this.bandList);
      } else {
        this.service.presentAlert('No Data Found');
      }
    
      this.service.dismissLoader();
    })
  }

  getConcertList() {
    this.service.presentLoader();
    this.service.getWithToken('upcoming/concert', this.token).subscribe((data: any) => {
      console.log(data.data);
      if (data.data.length > 0) {
        this.upComingConcerts = data.data;
        
      } else {
        this.service.presentAlert('No Data Found');
      }
    
      this.service.dismissLoader();
    })
  }

  isBandList() {
    this.isBandListFlag = false;
    this.getBandlists();
    if (!this.isActive) {
      this.isActive = !this.isActive;

    }
  }

  isUpcomming() {
    this.isBandListFlag = true;
    this.isActive = !this.isActive;
    this.getConcertList();
  }

  back(){
    this.router.navigate(['tabs']);
  }

  getBandDetail(id: any, name: any){
    this.service.band_id = id;
    this.service.band_name = name;
    this.router.navigate(['/tabs/locationSchedule']);
  }

  selectSong(band_id: any, concert_id: any) {
    console.log(band_id, concert_id);
    this.service.band_id = band_id;
    this.service.concert_id = concert_id;
    this.router.navigateByUrl('tabs/selectsong');
  }

}
