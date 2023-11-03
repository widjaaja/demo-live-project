import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { CustomFormDTO, CustomFormInputDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
import { ServiceService } from 'src/app/shared-module/Services/service/service.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent {
  customFormData!: CustomFormDTO[]

  customFormInputData!: CustomFormInputDTO;
  router: any;
  constructor(
    private serviceService:ServiceService,
  ){}

  successMessage:String | undefined;
  errorMessage:String | undefined;

  ngOnInit() {
    this.customFormData = [
      { name: "service_name", required:true,  displayName: "Services Name", type: TYPE_ENUM.String, defaultValue: '', Validator: Validators.required },
      { name: "service_icon", required:true, displayName: "Services Icon", type: TYPE_ENUM.String, defaultValue: '',Validator: Validators.required  },
      { name: "service_desc", required:true,  displayName: "Services Description", type: TYPE_ENUM.String, defaultValue: '', Validator: Validators.required },
    ]

    this.customFormInputData = { title: "Create Service", customFormDTO: this.customFormData, submitButtonText: "Save" };


  }

  onSubmit(formData: any) {
    let obj = {
      "s_name": formData.service_name,
      "s_description": formData.service_desc,
      "details":{
        "s_icon": formData.service_icon
      }
    }
    this.serviceService.addService(obj).subscribe((res: any) => {
       this.successMessage= "Service added successfully."

        setTimeout(()=>{
            this.successMessage= undefined;
            this.router.navigateByUrl('/user/service/list');
        },3000)
    },
    err => {
      this.errorMessage= "Request failed. Please check your data."

      setTimeout(()=>{
          this.errorMessage= undefined;
      },3000)
    })
  }
}
