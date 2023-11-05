import { Component } from '@angular/core';
import { AuthOTPGeneration } from './dto/APIResponseDTO';
import { AccountService } from './shared-module/Services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  user?: AuthOTPGeneration | null;
  mode='side'
  isOpened = true;

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    logout() {
        this.accountService.logout();
    }

    toggleSideNav(item: boolean) {
      console.log(item, 'navbar');
      this.isOpened = item;
    }
}
