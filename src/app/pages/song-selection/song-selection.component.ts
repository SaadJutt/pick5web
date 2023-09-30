import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HandleError } from '../../const/errors';
import { ApiService } from '../../providers/api.service';

@Component({
  selector: 'app-song-selection',
  templateUrl: './song-selection.component.html',
  styleUrls: ['./song-selection.component.scss'],
})
export class SongSelectionComponent  implements OnInit {
  public progress = 0.5;
  opener: any = '';
  one: any = '';
  two: any = '';
  three: any = '';
  four: any = '';
  five: any = '';
  enclose: any = '';
  token: any;
  songFlag: boolean = false;
  public band_songs: any = [];
  public band_id: any = ''; 
  concert_id: any = '';
  temp_bands: any = [];
  public select_song: any = ['0','0','0','0','0','0','0'];
  public position: any = ['first', '1', '2', '3', '4', '5', 'last'];
  public checkSongs: any = ['0','0','0','0','0','0','0'];
  public isnewSelect: boolean = true;

  public leaderBoard = [
    {
    name: 'Jessica',
    points: '21, 714 k'
  },
  {
    name: 'Shawn',
    points: '18, 555 k'
  },
  {
    name: 'Jack',
    points: '10, 714 k'
  },
];

  constructor(private router: Router, public service: ApiService) {
   
   }

  ngOnInit() {}

  ionViewWillEnter(){
    this.token = localStorage.getItem('apiToken');
    this.band_id = this.service.band_id;
    this.concert_id = this.service.concert_id;
    this.getBandSongs();
    this.editAble();
    
  }

  getBandSongs() {
    this.service.presentLoader();
    this.service.getWithToken('band/'+this.band_id+'/song', this.token).subscribe((data: any) => {
      console.log('band songs => ',data.data[0]);
      if (data.data[0].length > 0) {
        this.band_songs = data.data[0];
        this.temp_bands = this.band_songs;
      } else {
        this.service.presentAlert(data.status.message);
      }
    
      this.service.dismissLoader();
    })
  }
  

    back(){
      this.router.navigate(['bandDetail']);
    }

    isUpdateData() {
      let body = {
        song_title: this.select_song,
        position: this.position,
        band_id: this.band_id,
        concert_id: this.concert_id
    }
    console.log(body);
    this.service.presentLoader();
    this.service.postWithToken('user-answer/update', body, this.token).subscribe((data:any) => {
      console.log(data);
      if (data.status.code == 200) {
        console.log(data);
       //this.router.navigateByUrl('/tabs');
       this.service.presentAlert(data.status.message);
       this.editAble();
      }else {
        this.service.presentAlert(data.status.message);
      }
    this.service.dismissLoader();
  }, err => {
    this.service.dismissLoader();
     HandleError(this.service.alertCtrl, err);

  });
    }
    
    isSetSong(){
     if (this.opener == '' ||
         this.one == '' ||
         this.two == '' ||
         this.three == '' ||
         this.four == '' ||
         this.five == '' ||
         this.enclose == '' 
     ){
      this.service.presentAlert('Please Select all songs');
     }else {
      console.log(this.select_song);
      console.log(this.position);

      let body = {
        song_title: this.select_song,
        position: this.position,
        band_id: this.band_id,
        concert_id: this.concert_id
    }
    console.log(body);
    this.service.presentLoader();
    this.service.postWithToken('user-answer', body, this.token).subscribe((data:any) => {
      console.log(data);
      if (data.status.code == 200) {
        console.log(data);
       //this.router.navigateByUrl('/tabs');
       this.service.presentAlert(data.status.message);
       this.editAble();
      }else {
        this.service.presentAlert(data.status.message);
      }
    this.service.dismissLoader();
  }, err => {
    this.service.dismissLoader();
     HandleError(this.service.alertCtrl, err);

  });
  } 
}

editAble() {
    this.service.getWithToken('user/'+this.band_id+'/answer/'+this.concert_id+'/edit', this.token).subscribe((data: any) => {
      if (data.data[0].length > 0) {
        this.isnewSelect = false;
        let dataArray = data.data[0];
        this.opener = dataArray[0].song_id;
        this.one = dataArray[1].song_id;
        this.two = dataArray[2].song_id;
        this.three = dataArray[3].song_id;
        this.four = dataArray[4].song_id;
        this.five = dataArray[5].song_id;
        this.enclose = dataArray[6].song_id;
        for (let i = 0; i < this.select_song.length; i++) {
          this.select_song[i] = dataArray[i].song_id;
        }
      } else {
        
      }
      this.service.dismissLoader();
    });
}

    selectSongOpener(event: any, id: any) {
         this.pushIfNotExists(id, 0);
    }

    selectSongOne(event: any, id: any) {
      this.pushIfNotExists(id, 1);
    }

    selectSongTwo(event: any, id: any) {
      this.pushIfNotExists(id, 2);
    }

    selectSongThree(event: any, id: any) {
      this.pushIfNotExists(id, 3);
    }

    selectSongFour(event: any, id: any) {
      this.pushIfNotExists(id, 4);
    }

    selectSongFive(event: any, id: any) {
      this.pushIfNotExists(id, 5);
    }

    selectSongEnclose(event: any, id: any) {
      this.pushIfNotExists(id, 6);
    }


    pushIfNotExists(id: any, index: any) {
      if (!this.select_song.includes(id)) {
        this.select_song.splice(index, 1, id);
        this.songFlag = true;
      } else {
        this.service.presentAlert('Please select another song');
        this.select_song.splice(index, 1, 0);
        this.songFlag = false;
      }
    }
    
}
