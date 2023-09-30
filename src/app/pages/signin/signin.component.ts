import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../providers/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { loginUser } from '../../const/interfaceconst';
import { Router } from '@angular/router';
import { HandleError } from '../../const/errors';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent  implements OnInit {
  body: loginUser = {
    email: '',
    password: ''
  }
  ionicForm: FormGroup;
  isSubmitted = false;
  constructor(public service:ApiService,  public formBuilder: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  onLogin() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      return false;
    } else {
          this.signin(this.ionicForm.value);
    }
  }

  signin(value: any){
    this.body = value;

    this.service.presentLoader();
    this.service.postData('auth/login', this.body).subscribe((data:any) => {
      console.log(data);
      if (data.status.code == 200) {
        console.log(data);

        localStorage.setItem('apiToken', data.authorization.token);
        localStorage.setItem('profile', JSON.stringify(data.data));
        this.ionicForm.reset();
       this.router.navigateByUrl('/tabs');
      }else {
        alert(data.status.message);
      }
    this.service.dismissLoader();
  }, err => {
    this.service.dismissLoader();
     HandleError(this.service.alertCtrl, err);

  })
}


get errorControl() {
  return this.ionicForm.controls;
}

}
