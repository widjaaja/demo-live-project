import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { Validators } from '@angular/forms';

import { Alert, AlertType, AlertTitle } from "src/app/dto/Alert";
import { CustomFormDTO, CustomFormInputDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
import { CommissionService } from "src/app/shared-module/Services/pages/commission.service";

@Component({
  selector: 'app-add-commission',
  templateUrl: './add-commission.component.html',
  styleUrls: ['./add-commission.component.scss']
})
export class AddCommissionComponent {

  public isLoading: boolean = false;

  customFormData!: CustomFormDTO[]
  customFormInputData!: CustomFormInputDTO;
  successMessage:String | undefined;
  errorMessage:String | undefined;

  constructor(
    private router:Router,
    private commissionService: CommissionService
  ) { }

  ngOnInit() {
    this.customFormData = [
      { name: "comm_percent", required:true,  displayName: "Commission Percent", type: TYPE_ENUM.number, defaultValue: 0, Validator: Validators.required },
      { name: "partner_id", required:true, displayName: "Partner ID", type: TYPE_ENUM.String, defaultValue: '',Validator: Validators.required  },
    ]

    this.customFormInputData = { title: "Create Commission", customFormDTO: this.customFormData, submitButtonText: "Save" };
  }

  public createCommission(formValue: any) {
    this.commissionService.createCommission(
      formValue,
      res => {
        Alert.showStatus(
          AlertType.SUCCESS,
          AlertTitle.SUCCESS,
          'The Commission has been successfully created!'
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

}
