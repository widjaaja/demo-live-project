import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { CustomFormDTO, CustomFormInputDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
import { CommissionService } from "src/app/shared-module/Services/pages/commission.service";
import { Alert, AlertType, AlertTitle } from "src/app/dto/Alert";

@Component({
  selector: 'app-update-commission',
  templateUrl: './update-commission.component.html',
  styleUrls: ['./update-commission.component.scss']
})
export class UpdateCommissionComponent {

  public isLoading: boolean = false;
  customFormData!: CustomFormDTO[]
  comm_id!: number;

  customFormInputData!: CustomFormInputDTO;
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private commissionService: CommissionService
  ) { }

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

          this.customFormInputData = { 
            title: "Update Commission", 
            customFormDTO: this.customFormData, 
            submitButtonText: "Update" 
          };
        }
      } else {

      }

    })
  }

  updateCommission(formValue: any) {
    let obj = {
      id: this.comm_id,
      data: formValue
    }
    this.commissionService.updateCommission(
      obj,
      res => {
        Alert.showStatus(
          AlertType.SUCCESS,
          AlertTitle.SUCCESS,
          'The Commission has been successfully updated!'
        );
        this.router.navigateByUrl('user/commission');
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

  // onSubmit(formValue: any) {
  //   this.commissionService.updateCommission(this.comm_id,formValue).subscribe((res)=>{
  //     this.successMessage= "Commission added successfully."

  //       setTimeout(()=>{
  //           this.successMessage= undefined;
  //           this.router.navigateByUrl('/user/commission');
  //       },3000)
  //   },err=>{
  //     this.errorMessage= "Request failed. Please check your data."

  //     setTimeout(()=>{
  //         this.errorMessage= undefined;
  //     },3000)
  //   })
  //  }

}
