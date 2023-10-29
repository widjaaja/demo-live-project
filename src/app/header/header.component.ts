import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared-module/Services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
        private accountService: AccountService,
        private router: Router,
    ) { }

  @Output() toggleSideNavEvent = new EventEmitter<boolean>();

  toggleSideNav(){
    this.toggleSideNavEvent.emit(true);
  }
  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/login');
  }
}
