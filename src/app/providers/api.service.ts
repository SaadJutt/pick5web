import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: any = 'http://143.244.138.191:9010/api/';
  band_id: any = '';
  band_name: any = '';
  concert_id: any = '';
  loader: any;
  // url: any = 'http://app.alingo.co.uk/api/';

  constructor(public http: HttpClient, private toastCtrl: ToastController, private loadingCtrl: LoadingController, public alertCtrl: AlertController) { }

  postData(bodyurl: any, body: any) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this.http.post(this.url + bodyurl, body, { headers: headers });
  }

  postWithToken(bodyurl: any, body: any, api_token: any) {
  
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Accept": 'application/json',
      'Authorization': 'Bearer ' + api_token
    });
    return this.http.post(this.url + bodyurl, body, { headers: headers });
  }

  getData(bodyUrl: any) {
    return this.http.get(this.url + bodyUrl);
  }

  getWithToken(bodyurl: any, api_token: any) {
 
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Accept": 'application/json',
      'Authorization': 'Bearer ' + api_token
    });
    return this.http.get(this.url + bodyurl, { headers: headers });
  }

  async presentLoader() {
    this.loader = await this.loadingCtrl.create({
      cssClass: 'loader-css',
      message: 'Please wait...',
    });
    await this.loader.present();

  }
   dismissLoader() {
    this.loader.dismiss();  
  }


  async presentAlert(msg: string) {
    const alert = await this.alertCtrl
      .create({
        cssClass: 'alertCss',
        animated: true,
        // title: 'Error',
        message: msg,
        buttons: ['OK']
      });
    alert.present();
  }

  
  presentToast(msg: string) {
    this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: "top"
    }).then((toastData) => {
      toastData.present();
    });
  }

}
