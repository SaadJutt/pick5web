import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../providers/api.service';
import { RegisterUser } from '../../const/interfaceconst';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HandleError } from '../../const/errors';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  body: RegisterUser = {
    name: '',
    email: '',
    password: ''
  };
  ionicForm: FormGroup;
  isSubmitted = false;
  

  constructor(private router: Router, public service: ApiService, public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      agreement: [false, [Validators.required]]
    });
    this.ionicForm.value.agreement = false;
  }

  onSignup(){
    
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      return false;
    } else {
      this.signup();
    }
  }

  get errorControl() {
    return this.ionicForm.controls;
  }


  signup(){

      this.body = {
        name: this.ionicForm.value.name,
        email: this.ionicForm.value.email,
        password: this.ionicForm.value.password
      };
      if (this.ionicForm.value.agreement) {
      this.service.presentLoader();
      this.service.postData('register', this.body).subscribe((data:any) => {
        console.log(data.status);
        if (data.status.code == 200) {
          
          this.service.presentToast(data.status.message);
          this.ionicForm.reset();
          this.router.navigateByUrl('/login');
        }else {
          alert('not created');
        }
        this.service.dismissLoader();
      
      
   }, err => {
      this.service.dismissLoader();
      HandleError(this.service.alertCtrl, err);

   })
  }else {
    this.service.presentAlert('Please Agreed');
  }
}
  
}
