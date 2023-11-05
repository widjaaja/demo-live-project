import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { Validators } from '@angular/forms';

import { Alert, AlertType, AlertTitle } from "src/app/dto/Alert";
import { CustomFormDTO, CustomFormInputDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
// import { ServiceService } from 'src/app/shared-module/Services/service/service.service';
import { ServicesService } from "src/app/shared-module/Services/pages/services.service";


@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent {

  public isLoading: boolean = false;

  customFormData!: CustomFormDTO[]
  customFormInputData!: CustomFormInputDTO;

  successMessage:String | undefined;
  errorMessage:String | undefined;

  constructor(
    private router:Router,
    private servicesService:ServicesService,
  ) { }



  ngOnInit() {
    this.customFormData = [
      { name: "service_name", required:true,  displayName: "Services Name", type: TYPE_ENUM.String, defaultValue: '', Validator: Validators.required },
      { name: "service_icon", required:true, displayName: "Services Icon", type: TYPE_ENUM.String, defaultValue: '',Validator: Validators.required  },
      { name: "service_desc", required:true,  displayName: "Services Description", type: TYPE_ENUM.String, defaultValue: '', Validator: Validators.required },
      { name: "is_active", displayName: "Active", type: TYPE_ENUM.checkbox, defaultValue: false, Validator: Validators.required },
    ]

    this.customFormInputData = { title: "Create Service", customFormDTO: this.customFormData, submitButtonText: "Save" };
  }

  public createService(formData: any) {
    let obj = {
      "s_name": formData.service_name,
      "s_description": formData.service_desc,
      "is_active": formData.is_active,
      "details":{
        "s_icon": formData.service_icon
      }
    }
    this.servicesService.createServices(
      obj,
      res => {
        Alert.showStatus(
          AlertType.SUCCESS,
          AlertTitle.SUCCESS,
          'The Services has been successfully created!'
        );
        this.router.navigateByUrl('/user/service/list');
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
