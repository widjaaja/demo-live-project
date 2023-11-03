import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { Validators } from '@angular/forms';
import { CustomFormDTO, CustomFormInputDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
import { CommissionServiceService } from 'src/app/shared-module/Services/commission-service/commission-service.service';
import { CommissionService } from "src/app/shared-module/Services/pages/commission.service";
import { Alert, AlertType, AlertTitle } from "src/app/dto/Alert";

@Component({
  selector: 'app-create-commission',
  templateUrl: './create-commission.component.html',
  styleUrls: ['./create-commission.component.scss']
})
export class CreateCommissionComponent {

  public isLoading: boolean = false;
  customFormData!: CustomFormDTO[]
  customFormInputData!: CustomFormInputDTO;
  constructor(
    private router:Router,
    private commissionService: CommissionService
    ) { }

  successMessage:String | undefined;
  errorMessage:String | undefined;

  ngOnInit() {
    this.customFormData = [
      { name: "comm_percent", required:true,  displayName: "Commission Percent", type: TYPE_ENUM.number, defaultValue: false, Validator: Validators.required },
      { name: "partner_id", required:true, displayName: "Partner ID", type: TYPE_ENUM.String, defaultValue: '',Validator: Validators.required  },
    ]

    this.customFormInputData = { title: "Create Commission", customFormDTO: this.customFormData, submitButtonText: "Save" };


  }

  createCommission(formValue: any) {
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
