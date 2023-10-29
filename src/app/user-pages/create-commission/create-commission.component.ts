import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { CustomFormDTO, CustomFormInputDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
import { CommissionServiceService } from 'src/app/shared-module/Services/commission-service/commission-service.service';

@Component({
  selector: 'app-create-commission',
  templateUrl: './create-commission.component.html',
  styleUrls: ['./create-commission.component.scss']
})
export class CreateCommissionComponent {

  customFormData!: CustomFormDTO[]

  customFormInputData!: CustomFormInputDTO;
  router: any;
  constructor(private commissionService: CommissionServiceService) { }

  successMessage:String | undefined;

  errorMessage:String | undefined;

  ngOnInit() {
    this.customFormData = [
      { name: "comm_percent", required:true,  displayName: "Commission Percent", type: TYPE_ENUM.number, defaultValue: false, Validator: Validators.required },
      { name: "partner_id", required:true, displayName: "Partner ID", type: TYPE_ENUM.String, defaultValue: '',Validator: Validators.required  },
    ]

    this.customFormInputData = { title: "Create Commission", customFormDTO: this.customFormData, submitButtonText: "Save" };


  }

  onSubmit(formValue: any) {
    this.commissionService.createCommission(formValue).subscribe(res => {
       this.successMessage= "Commission added successfully."

        setTimeout(()=>{
            this.successMessage= undefined;
            this.router.navigateByUrl('/user/commission');
        },3000)
    },err=>{
      this.errorMessage= "Request failed. Please check your data."

      setTimeout(()=>{
          this.errorMessage= undefined;
      },3000)
    })
  }
}
