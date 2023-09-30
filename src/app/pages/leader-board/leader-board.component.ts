import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/providers/api.service';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.scss'],
})
export class LeaderBoardComponent  implements OnInit {

  isActive = true;
  isBandListFlag = false;
  token: any = '';
  band_id: any = '';
  topRanker: any = {
    top_point1: '',
    top_point2: '',
    top_point3: '',
    top_name1: '',
    top_name2: '',
    top_name3: ''
  }

  public leaderBoard : any = [];

@ViewChild(IonModal) modal: IonModal;
@ViewChild('dateModal') modal2: any;
public mydate:any;
public name: any;
public message: any;

public bandList: any = [];
isWeekday = (dateString: string) => {
  const date = new Date(dateString);
  const utcDay = date.getUTCDay();

  /**
   * Date will be enabled if it is not
   * Sunday or Saturday
   */
  return utcDay !== 0 && utcDay !== 6;
};
  constructor(private router: Router, public service: ApiService, private modalCtrl: ModalController) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.token = localStorage.getItem('apiToken');
    this.getLeaderBoard();
    this.getByBand(1);
    this.getBandlists();
  }

  back(){
    this.router.navigate(['tabs']);
  }

  byBand() {
    this.router.navigate(['tabs/byband']);
  }

  getLeaderBoard() {
    this.service.presentLoader();
    this.service.getWithToken('leader-board', this.token).subscribe((data: any) => {
      console.log('Leader Board => ',data.data);
      if (data.data.length > 0) {
         this.topRanker.top_point1 = data.data[0].total_points;
         this.topRanker.top_point2 = data.data[1].total_points;
         this.topRanker.top_point3 = data.data[2].total_points;
         this.topRanker.name1 = data.data[0].user.name;
         this.topRanker.name2 = data.data[1].user.name;
         this.topRanker.name3 = data.data[2].user.name;
        console.log(this.topRanker.name1);
        
      } else {
        this.service.presentAlert('No Data Found');
      }
    
      this.service.dismissLoader();
    });
  }

  getByBand(id: any) {
   // this.service.presentLoader();
    this.band_id = id;
    this.service.getWithToken('leader-board/by-band?band_id='+this.band_id, this.token).subscribe((data: any) => {
      console.log('Leader Board => ',data.data);
      if (data.data.length > 0) {
        this.leaderBoard = data.data;
      } else {
        this.service.presentAlert('No Data Found');
        this.leaderBoard = [];
      }
     // this.service.dismissLoader();
    })
  }

  getBandlists() {
    this.service.getWithToken('bands', this.token).subscribe((data: any) => {
      if (data.data.length > 0) {
        this.bandList = data.data;
        console.log(this.bandList);
      } else {
        this.service.presentAlert('No Data Found');
      }
    })
  }

  isBand() {
    console.log('call');
    this.isBandListFlag = false;
   
      this.isActive = true;
    
  }

  isYear() {
    this.isBandListFlag = true;
    this.isActive = false;
  }


  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm(id: any) {
    this.modal.dismiss(id, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      console.log(ev.detail.data);
      this.band_id = ev.detail.data;
      this.getByBand(this.band_id);
    }
  }


  onWillDismissDate(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      console.log(ev.detail.data);
      this.getLaderByDate(ev.detail.data);
    }
  }

  confirmDate() {
    this.modal2.dismiss(this.mydate.split('T')[0], 'confirm');
  }

  cancelDate() {
    this.modal2.dismiss(null, 'cancel');
  }

  getLaderByDate(date: any) {
    this.service.getWithToken('leader-board/by-date?date='+date, this.token).subscribe((data: any) => {
      console.log('Leader Board => ',data.data);
      if (data.data.length > 0) {
        this.leaderBoard = data.data;
      } else {
        this.service.presentAlert('No Data Found');
        this.leaderBoard = [];
      }
     // this.service.dismissLoader();
    })
  }
}
