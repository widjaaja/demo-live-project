import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthOTPGeneration } from '../dto/APIResponseDTO';
import { AccountService } from '../shared-module/Services/account.service';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent {

  title = '';
  user?: AuthOTPGeneration | null;
  fillerNav = ["dashboard","promo",'commission']

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    logout() {
        this.accountService.logout();
    }

  
  
}
