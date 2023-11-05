import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Alert, AlertType, AlertTitle } from "src/app/dto/Alert";
import { CustomFormDTO, CustomFormInputDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
// import { PromoServiceService } from 'src/app/shared-module/Services/promo-service/promo-service.service';
import { PromoService } from "src/app/shared-module/Services/pages/promo.service";

@Component({
  selector: 'app-add-promo',
  templateUrl: './add-promo.component.html',
  styleUrls: ['./add-promo.component.scss']
})
export class AddPromoComponent {

  public isLoading: boolean = false;

  customFormData!: CustomFormDTO[]
  customFormInputData!: CustomFormInputDTO;
  successMessage:String | undefined;
  errorMessage:String | undefined;

  constructor(
    private router: Router,
    private promoService: PromoService
  ) { }

  ngOnInit() {
    this.customFormData = [
      { name: "promo_code", required:true, displayName: "Promo Code", type: TYPE_ENUM.String, defaultValue: '', Validator: Validators.required },
      { name: "max_cashback", required:true, displayName: "Max Cashback", type: TYPE_ENUM.number, defaultValue: '', Validator: Validators.required },
      { name: "min_bill", required:true, displayName: "Min Bill", type: TYPE_ENUM.number, defaultValue: '', Validator: Validators.required },
      { name: "expiry", required:true, displayName: "Expiry", type: TYPE_ENUM.number, defaultValue: '', Validator: Validators.required },
      { name: "promo_percent", required:true, displayName: "Promo Percent", type: TYPE_ENUM.number, defaultValue: '', Validator: Validators.required },
      { name: "service_id", required:true, displayName: "Service ID", type: TYPE_ENUM.String, defaultValue: '' },
      { name: "partner_id", required:true, displayName: "Partner ID", type: TYPE_ENUM.String, defaultValue: '' },
      { name: "addCashOnWalletCreate", displayName: "Add Cash on Wallet Create", type: TYPE_ENUM.checkbox, defaultValue: false, Validator: Validators.required },
      { name: "onWalletCreate", displayName: "On Wallet Create", type: TYPE_ENUM.checkbox, defaultValue: false, Validator: Validators.required },
      { name: "isActive", displayName: "is Active", type: TYPE_ENUM.checkbox, defaultValue: false, Validator: Validators.required },
    ]

    this.customFormInputData = { title: "Add Promo", customFormDTO: this.customFormData, submitButtonText: "Save" };
  }

  createPromo(formValue:any){
    this.promoService.createPromo(
      formValue,
      res => {
        Alert.showStatus(
          AlertType.SUCCESS,
          AlertTitle.SUCCESS,
          'Promo added successfully.'
        );
        this.router.navigateByUrl('/user/promo');
      },
      errMessage => {
        
        Alert.showStatus(
          AlertType.ERROR,
          AlertTitle.ERROR,
          errMessage.message
        );
      },
      () => {
        this.isLoading = false;
      }
    )
  }

}
