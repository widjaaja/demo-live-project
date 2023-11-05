import { ChangeDetectorRef, Component, Input, EventEmitter, Output } from '@angular/core';
import { AuthOTPGeneration } from '../dto/APIResponseDTO';
import { AccountService } from '../shared-module/Services/account.service';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent {

  @Input() opened: boolean = false;
  @Output() toggleSideNavEvent = new EventEmitter<boolean>();

  title = '';
  user?: AuthOTPGeneration | null;
  fillerNav = ["dashboard","promo",'commission']

    constructor(
      private accountService: AccountService
    ) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    public toggleSideNav(){
      this.opened = !this.opened;
      this.toggleSideNavEvent.emit(this.opened);
    }

    logout() {
        this.accountService.logout();
    }

  
  
}
