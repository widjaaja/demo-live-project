import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared-module/Services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public isSideNav: boolean = false;

  constructor(
    private accountService: AccountService,
    private router: Router,
  ) { }

  @Output() toggleSideNavEvent = new EventEmitter<boolean>();

  public toggleSideNav(){
    this.isSideNav = !this.isSideNav;
    this.toggleSideNavEvent.emit(this.isSideNav);
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/login');
  }
}
