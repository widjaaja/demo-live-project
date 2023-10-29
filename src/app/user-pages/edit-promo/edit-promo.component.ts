import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QueryPromo } from 'src/app/dto/APIResponseDTO';
import { CustomFormDTO, CustomFormInputDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
import { PromoServiceService } from 'src/app/shared-module/Services/promo-service/promo-service.service';

@Component({
  selector: 'app-edit-promo',
  templateUrl: './edit-promo.component.html',
  styleUrls: ['./edit-promo.component.scss']
})
export class EditPromoComponent implements OnInit {

  promoFormData!: FormGroup
  promo_id!:number;
  
  customFormData!: CustomFormDTO[]

  customFormInputData!: CustomFormInputDTO;
  
  constructor(private route: ActivatedRoute, 
    private promoService:PromoServiceService,private router:Router) {}

  successMessage:String | undefined;

  errorMessage:String | undefined;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => { 
      if(!!params['state']){
        let promo:QueryPromo = JSON.parse(atob(params['state'])); 

        if(!!promo){
          this.promo_id=promo.promo_id;
          this.customFormData = [
            { name: "promo_code", required:true, displayName: "Promo Code", type: TYPE_ENUM.String, defaultValue: promo.promo_code, Validator: Validators.required },
            { name: "max_cashback", required:true, displayName: "Max Cashback", type: TYPE_ENUM.number, defaultValue: promo.max_cashback, Validator: Validators.required },
            { name: "min_bill", required:true, displayName: "Min Bill", type: TYPE_ENUM.number, defaultValue: promo.min_bill, Validator: Validators.required },
            { name: "expiry", required:true, displayName: "Expiry", type: TYPE_ENUM.number, defaultValue: promo.expiry, Validator: Validators.required },
            { name: "promo_percent", required:true, displayName: "Promo Percent", type: TYPE_ENUM.number, defaultValue: promo.promo_percent, Validator: Validators.required },
            { name: "service_id", required:true, displayName: "Service ID", type: TYPE_ENUM.String, defaultValue: '' },
            { name: "partner_id", required:true, displayName: "Partner ID", type: TYPE_ENUM.String, defaultValue: '' },
            { name: "onWalletCreate", displayName: "On Wallet Create", type: TYPE_ENUM.checkbox, defaultValue: promo.onWalletCreate, Validator: Validators.required },
            { name: "addCashOnWalletCreate", displayName: "Add Cash on Wallet Create", type: TYPE_ENUM.checkbox, defaultValue: promo.addCashOnWalletCreate, Validator: Validators.required },
            { name: "isActive", displayName: "is Active", type: TYPE_ENUM.checkbox, defaultValue: promo.isActive, Validator: Validators.required },
            
          ]
      
          this.customFormInputData = { title: "Update Promo", customFormDTO: this.customFormData, submitButtonText: "Save" };     
       
      }else{
        console.log("error")
        alert("error");
      }
    }else{
      this.router.navigateByUrl('/user/promo')
    }
    });
  }

 

  onSubmit(formValue: any) {
   this.promoService.editPromo(formValue,this.promo_id).subscribe((res)=>{
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
  }

}
