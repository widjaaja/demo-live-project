import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomFormDTO, CustomFormInputDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
import { PromoServiceService } from 'src/app/shared-module/Services/promo-service/promo-service.service';

@Component({
  selector: 'app-add-promo',
  templateUrl: './add-promo.component.html',
  styleUrls: ['./add-promo.component.scss']
})
export class AddPromoComponent {

  customFormData!: CustomFormDTO[]

  customFormInputData!: CustomFormInputDTO;
  router: any;
  constructor(private promoService: PromoServiceService) { }

  successMessage:String | undefined;

  errorMessage:String | undefined;


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

  onSubmit(formValue: any) {
    this.promoService.addPromo(formValue).subscribe(res => {
     this.successMessage= "Promo added successfully."

        setTimeout(()=>{
            this.successMessage= undefined;
            this.router.navigateByUrl('/user/promo');
        },3000)
    },err=>{
      this.errorMessage= "Request failed. Please check your data."

      setTimeout(()=>{
          this.errorMessage= undefined;
      },3000)
    })
    console.log('form data is ', formValue);
  }

}
