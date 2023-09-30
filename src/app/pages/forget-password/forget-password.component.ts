import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../providers/api.service';
import { HandleError } from '../../const/errors';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent  implements OnInit {

  email: any;

  constructor(private router: Router, public service:ApiService) { }

  ngOnInit() {}

    
  back(){
    this.router.navigate(['login']);
  }

  forgetPass() {
    let body = {
      "email": this.email
  }
    this.service.presentLoader();
    this.service.postData('auth/password-reset', body).subscribe((data:any) => {
      console.log(data);
      if (data.status.code == 200) {
       this.router.navigateByUrl('/login');
      }else {
        alert(data.status.message);
      }
    this.service.dismissLoader();
  }, err => {
    this.service.dismissLoader();
     HandleError(this.service.alertCtrl, err);

  })

  }
  

}
