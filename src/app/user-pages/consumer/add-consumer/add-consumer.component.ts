import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { Validators } from '@angular/forms';

import { Alert, AlertType, AlertTitle } from "src/app/dto/Alert";
import { CustomFormDTO, CustomFormInputDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
import { CommissionService } from "src/app/shared-module/Services/pages/commission.service";
import { ConsumerService } from "src/app/shared-module/Services/pages/consumer.service";

@Component({
  selector: 'app-add-consumer',
  templateUrl: './add-consumer.component.html',
  styleUrls: ['./add-consumer.component.scss']
})
export class AddConsumerComponent {

  public isLoading: boolean = false;

  customFormData!: CustomFormDTO[]
  customFormInputData!: CustomFormInputDTO;
  successMessage:String | undefined;
  errorMessage:String | undefined;

  constructor(
    private router:Router,
    private consumerService: ConsumerService,
    private commissionService: CommissionService,
  ) { }

  ngOnInit() {
    this.customFormData = [
      { name: "consumer_phone", required: true, displayName: "Consumer Phone", type: TYPE_ENUM.number, defaultValue: '', Validator: Validators.required },
      { name: "consumer_email", required:true, displayName: "Consumer Email", type: TYPE_ENUM.String, defaultValue: '',Validator: Validators.required  },
      { name: "consumer_addresses_name", required:true,  displayName: "Consumer Address Name", type: TYPE_ENUM.String, defaultValue: '', Validator: Validators.required },
      { name: "consumer_addresses", required:false,  displayName: "Consumer Address", type: TYPE_ENUM.String, defaultValue: '' },
      { name: "consumer_addresses_latlong", required:false,  displayName: "Consumer Address Latlong", type: TYPE_ENUM.String, defaultValue: '' },
      { name: "consumer_kyc_name", required:true, displayName: "Consumer KYC Name", type: TYPE_ENUM.String, defaultValue: '', Validator: Validators.required },
      { name: "consumer_kyc_desc", required:true, displayName: "Consumer KYC Desc", type: TYPE_ENUM.String, defaultValue: '', Validator: Validators.required },
      { name: "consumer_kyc_attachment_url", required:false, displayName: "Consumer KYC Attachment URL", type: TYPE_ENUM.String, defaultValue: '', },
      { name: "consumer_kyc_verification", required:false, displayName: "Consumer KYC Verification", type: TYPE_ENUM.String, defaultValue: '', },
    ]

    this.customFormInputData = { title: "Create Service", customFormDTO: this.customFormData, submitButtonText: "Save" };
  }

  public createService(formData: any) {
    
    let obj = {
      "user_id": "",
      "consumer_phone": formData.consumer_phone,
      "consumer_email": formData.consumer_email,
      "consumer_addresses": [{
        "consumer_id": "",
        "consumer_address_name": formData.consumer_addresses_name,
        "consumer_address": formData.consumer_addresses,
        "consumer_address_status": "Active",
        "consumer_address_latlong": formData.consumer_addresses_latlong
      }],
      "consumer_kyc": [{
        "kycId":"1",
        "kycName": formData.consumer_kyc_name,
        "kycDescription": formData.consumer_kyc_desc,
        "kycAttachmentPath": [formData.consumer_kyc_attachment_url],
        "kycVerification": formData.consumer_kyc_verification

      }]
    }
    console.log(obj);
    this.consumerService.createConsumer(
      obj,
      res => {
        Alert.showStatus(
          AlertType.SUCCESS,
          AlertTitle.SUCCESS,
          'The Consumer has been successfully created!'
        );
        this.router.navigateByUrl('/user/consumer/list');
      },
      errMessage => {
        Alert.showStatus(
          AlertType.ERROR,
          AlertTitle.ERROR,
          ''
        );
      },
      () => {
        this.isLoading = false;
      }
    )
  }
}
