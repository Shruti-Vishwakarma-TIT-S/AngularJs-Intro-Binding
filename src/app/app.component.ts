import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userName: string = '';
  errorMessage: string = '';

  validateName(): void {
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
    if (!this.userName.match(namePattern)) {
      this.errorMessage = 'Name must start with a capital letter and have at least 3 characters.';
    } else {
      this.errorMessage = '';
    }
  }

  openBridgeLabz(): void {
    window.open('https://www.bridgelabz.com', '_blank');
  }
}
