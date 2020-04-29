import { Component } from '@angular/core';

@Component({
  selector: 'app-ass2',
  templateUrl: './ass2.component.html',
})
export class Ass2Component {
  serverId: number = 10;
  serverStatus: string = 'offline';
  username = '';
  serverTxt = 'There is no id';
  getServerStatus() {
    return this.serverStatus;
  }

  onCreate() {
    this.serverTxt = `Id is ${this.username}`;
  }

  onIdAdd(e: Event) {
    this.username = (<HTMLInputElement>e.target).value;
  }
}
