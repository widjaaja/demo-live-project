import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomFormDTO, CustomFormInputDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
import { PartnerService } from 'src/app/shared-module/Services/partner/partner.service';

@Component({
  selector: 'app-create-partner',
  templateUrl: './create-partner.component.html',
  styleUrls: ['./create-partner.component.scss']
})

export class CreatePartnerComponent {

  customFormData!: CustomFormDTO[]
  customFormInputData!: CustomFormInputDTO;
  router: any;
  file: File = new File([""], "filename");

  successMessage:String | undefined;
  errorMessage:String | undefined;

  constructor(
    private partnerService: PartnerService
  ) { }

  ngOnInit() {
    this.customFormData = [
      { name: "partner_name", displayName: "Partner Name", type: TYPE_ENUM.String, defaultValue: '', Validator: Validators.required },
      { name: "partner_description", displayName: "Partner Description", type: TYPE_ENUM.String, defaultValue: '', Validator: Validators.required },
      { name: "partner_pan", displayName: "Partner PAN", type: TYPE_ENUM.String, defaultValue: '', Validator: Validators.required },
      { name: "partner_sid", displayName: "Partner SID", type: TYPE_ENUM.String, defaultValue: '', Validator: Validators.required },
      {
        name: "partner_contact", displayName: "Partner Contact", type: TYPE_ENUM.Group, defaultValue: '', Validator: Validators.required,
        child: [
          { name: "partner_phones", displayName: "Partner Phones", type: TYPE_ENUM.String, defaultValue: '', Validator: Validators.required },
          { name: "partner_emails", displayName: "Partner Emails", type: TYPE_ENUM.String, defaultValue: '', Validator: Validators.required },
        ]
      },
      { name: "partner_gst", displayName: "Partner GST", type: TYPE_ENUM.String, defaultValue: '', Validator: Validators.required },
      {
        name: "partner_location", displayName: "Partner Location", type: TYPE_ENUM.Group, defaultValue: '', Validator: Validators.required,
        child: [
          { name: "partner_address", displayName: "Partner Address", type: TYPE_ENUM.String, defaultValue: '', Validator: Validators.required },
          { name: "partner_latlong", displayName: "Partner Lat long", type: TYPE_ENUM.String, defaultValue: '', Validator: Validators.required },
        ]
      },
      { name: "partner_status", displayName: "Status", type: TYPE_ENUM.checkbox, defaultValue: false, Validator: Validators.required },
      { name: "partner_files", displayName: "Partner Files", type: TYPE_ENUM.file, defaultValue: this.file },
      { name: "is_active", displayName: "is Active", type: TYPE_ENUM.checkbox, defaultValue: false, Validator: Validators.required },
    ]

    this.customFormInputData = { title: "Add Partner", customFormDTO: this.customFormData, submitButtonText: "Save" };
  }

  onSubmit(data: any) {
    console.log(data.formValue);
    let obj = {
      partner_details: data.formValue
    }
    this.partnerService.addAllPartner(obj).subscribe(res => {
      this.successMessage= "Partner added successfully."
        setTimeout(()=>{
            this.successMessage= undefined;
            this.router.navigateByUrl('/user/partner');
        },3000)
      },
      err=>{
        this.errorMessage= "Request failed. Please check your data."
        setTimeout(()=>{
            this.errorMessage= undefined;
        },3000)
      }
    )
  }

}
