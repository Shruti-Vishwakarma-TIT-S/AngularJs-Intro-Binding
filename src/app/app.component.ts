import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hello from BridgeLabz';
  logoUrl = 'assets/logo.jpeg';
  bridgeLabzUrl = 'https://www.bridgelabz.com';

  openBridgeLabzSite() {
    window.open(this.bridgeLabzUrl, '_blank');
  }
}
