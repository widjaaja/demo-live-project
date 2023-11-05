import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { Validators } from '@angular/forms';

import { Alert, AlertType, AlertTitle } from "src/app/dto/Alert";
import { CustomFormDTO, CustomFormInputDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
import { BillingService } from "src/app/shared-module/Services/pages/billing.service";

@Component({
  selector: 'app-add-billing',
  templateUrl: './add-billing.component.html',
  styleUrls: ['./add-billing.component.scss']
})
export class AddBillingComponent {

  public isLoading: boolean = false;

  customFormData!: CustomFormDTO[]
  customFormInputData!: CustomFormInputDTO;
  successMessage:String | undefined;
  errorMessage:String | undefined;

  constructor(
    private router:Router,
    private billingService: BillingService,
  ) { }

  ngOnInit() {
    this.customFormData = [
      { name: "promo_id", required:true, displayName: "Promo ID", type: TYPE_ENUM.String, defaultValue: '', Validator: Validators.required },
      { name: "commission_id", required:true, displayName: "Commission ID", type: TYPE_ENUM.String, defaultValue: '', Validator: Validators.required },
      { name: "partner_id", required:true, displayName: "Partner ID", type: TYPE_ENUM.String, defaultValue: '', Validator: Validators.required },
      { name: "unit", required:true, displayName: "Unit", type: TYPE_ENUM.String, defaultValue: 'COUNT', Validator: Validators.required },
      { name: "type", required:true, displayName: "Type", type: TYPE_ENUM.String, defaultValue: 'Retail', Validator: Validators.required },
      { name: "wholesale_limits", required:true, displayName: "Wholesale Limits", type: TYPE_ENUM.number, defaultValue: 0 },
    ]

    this.customFormInputData = { title: "Create Commission", customFormDTO: this.customFormData, submitButtonText: "Save" };
  }

  createBilling(formValue: any) {
    this.billingService.createBilling(
      formValue,
      res => {
        Alert.showStatus(
          AlertType.SUCCESS,
          AlertTitle.SUCCESS,
          'The Billing has been successfully created!'
        );
        this.router.navigateByUrl('user/billing');
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
