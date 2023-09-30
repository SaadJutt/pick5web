import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/providers/api.service';

@Component({
  selector: 'app-location-schedule',
  templateUrl: './location-schedule.component.html',
  styleUrls: ['./location-schedule.component.scss'],
})
export class LocationScheduleComponent  implements OnInit {

  public id: any; 
  public token: any;
  public band_name: any;
  public isConcertArray: any = [];

  constructor( private router: Router, public service: ApiService) {
    
   }

  ngOnInit() {

  }

  ionViewWillEnter(){
    this.token = localStorage.getItem('apiToken');
    this.id = this.service.band_id;
    this.band_name = this.service.band_name;
    this.getBandDetail();
  }

  back(){
    this.router.navigateByUrl('tabs/bandlist');
  }

  selectSong(id: any) {
    this.service.concert_id = id;
    this.router.navigateByUrl('tabs/selectsong');
  }

  getBandDetail() {
    this.service.presentLoader();
    this.service.getWithToken('band/'+this.id+'/concert', this.token).subscribe((data: any) => {
      console.log('band Conserts => ',data);
      if (data.data.length > 0) {
        this.isConcertArray = data.data;
      } else {
        this.service.presentAlert(data.status.message);
        this.isConcertArray = [];
      }
    
      this.service.dismissLoader();
    })
  }
}

//band/1/concert