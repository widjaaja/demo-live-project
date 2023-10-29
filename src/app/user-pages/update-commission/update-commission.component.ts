import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { CustomFormDTO, CustomFormInputDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
import { CommissionServiceService } from 'src/app/shared-module/Services/commission-service/commission-service.service';

@Component({
  selector: 'app-update-commission',
  templateUrl: './update-commission.component.html',
  styleUrls: ['./update-commission.component.scss']
})
export class UpdateCommissionComponent {

  customFormData!: CustomFormDTO[]

  comm_id!: number;

  customFormInputData!: CustomFormInputDTO;
  constructor(private route: ActivatedRoute,
     private commissionService: CommissionServiceService,private router:Router) { }

    successMessage:String | undefined;

    errorMessage:String | undefined;


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (!!params['state']) {
        let commission = JSON.parse(atob(params['state']));

        if (!!commission) {
          this.comm_id = commission.comm_id;
          this.customFormData = [
            {
              name: "comm_percent",
              displayName: "Commission Percent",
              type: TYPE_ENUM.number,
              defaultValue: commission.comm_percent,
              Validator: Validators.required,
              required:true,
            },
            {
              name: "partner_id",
              displayName: "Partner ID",
              type: TYPE_ENUM.String, defaultValue: commission.partner_id,
              Validator: Validators.required,
              required:true,
            },
          ]



          this.customFormInputData = { title: "Update Commission", customFormDTO: this.customFormData, submitButtonText: "Update" };
        }
      } else {

      }

    })
  }


  onSubmit(formValue: any) {
    this.commissionService.updateCommission(this.comm_id,formValue).subscribe((res)=>{
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
