import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public token: any  = '';
  constructor(public router: Router) {
    this.token = localStorage.getItem('apiToken');
    if (this.token) {
        this.router.navigateByUrl('tabs');
    }else {
      this.router.navigateByUrl('login');
    }
  }

}
