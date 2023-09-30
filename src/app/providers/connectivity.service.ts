import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
declare var Connection: any;

@Injectable({
  providedIn: 'root'
})
export class ConnectivityService {

  onDevice: boolean;
  constructor( public network: Network) {
    console.log('Hello ConnectivityProvider Provider');
  }

  isOnline(): boolean {
    if (this.onDevice && this.network.type){
      alert(Connection.NONE);
      return Network !== Connection.NONE;
    } else {
      return navigator.onLine;
    }
  }

  isOffline(): boolean {
    if (this.onDevice && this.network.type){
      return this.network.type === Connection.NONE;
    } else {
      return !navigator.onLine;
    }
  }
onDisConnect(){
return  this.network.onDisconnect().subscribe(() => {
    console.log('network was disconnected :-(');

  });
}
  
  
}
