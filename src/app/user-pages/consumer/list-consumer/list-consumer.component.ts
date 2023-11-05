import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Alert, AlertType, AlertTitle } from "src/app/dto/Alert";
import { CustomFormDTO, CustomFormInputDTO, CustomTableDTO, CustomTableInnerDataDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
// import { ServiceService } from 'src/app/shared-module/Services/service/service.service';
import { ConsumerService } from "src/app/shared-module/Services/pages/consumer.service";

@Component({
  selector: 'app-list-consumer',
  templateUrl: './list-consumer.component.html',
  styleUrls: ['./list-consumer.component.scss']
})
export class ListConsumerComponent {

  public isLoading: boolean = false;
  public customerDetails: any = {
    "user_id": "",
    "consumer_phone": "",
    "consumer_email": "",
    "consumer_addresses": [{
      "consumer_id": "",
      "consumer_address_name": "",
      "consumer_address": "",
      "consumer_address_status": "Active",
      "consumer_address_latlong": ""
    }],
    "consumer_kyc": [{
      "kycId":"1",
      "kycName": "",
      "kycDescription": "",
      "kycAttachmentPath": [""],
      "kycVerification": ""

    }]
  };

  customFormData!: CustomFormDTO[]
  customFormInputData!: CustomFormInputDTO;
  successMessage:String | undefined;
  errorMessage:String | undefined;

  constructor(
    private consumerService: ConsumerService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.getDetailConsumer();


    

   
  }

  getDetailConsumer(){
    this.consumerService.getConsumerDetail(
      res => {
        // Alert.showStatus(
        //   AlertType.SUCCESS,
        //   AlertTitle.SUCCESS,
        //   'The Commission has been successfully created!'
        // );
        this.customerDetails = res['customerDetails'];
        this.customFormData = [
          { name: "consumer_phone", required: true, displayName: "Consumer Phone", type: TYPE_ENUM.String, defaultValue: this.customerDetails.consumer_phone || '', Validator: Validators.required },
          { name: "consumer_email", required:true, displayName: "Consumer Email", type: TYPE_ENUM.String, defaultValue: this.customerDetails.consumer_email || '', Validator: Validators.required  },
          { name: "consumer_addresses_name", required:true,  displayName: "Consumer Address Name", type: TYPE_ENUM.String, defaultValue: this.customerDetails.consumer_addresses[0].consumer_address_name || '', Validator: Validators.required },
          { name: "consumer_addresses", required:false,  displayName: "Consumer Address", type: TYPE_ENUM.String, defaultValue: this.customerDetails.consumer_addresses[0].consumer_address || '' },
          { name: "consumer_addresses_latlong", required:false,  displayName: "Consumer Address Latlong", type: TYPE_ENUM.String, defaultValue: this.customerDetails.consumer_addresses[0].consumer_address_latlong || '' },
          { name: "consumer_kyc_name", required:true, displayName: "Consumer KYC Name", type: TYPE_ENUM.String, defaultValue: this.customerDetails.consumer_kyc[0].kycName || '', Validator: Validators.required },
          { name: "consumer_kyc_desc", required:true, displayName: "Consumer KYC Desc", type: TYPE_ENUM.String, defaultValue: this.customerDetails.consumer_kyc[0].kycDescription || '', Validator: Validators.required },
          { name: "consumer_kyc_attachment_url", required:false, displayName: "Consumer KYC Attachment URL", type: TYPE_ENUM.String, defaultValue: this.customerDetails.consumer_kyc[0].kycAttachmentPath[0] || '', },
          { name: "consumer_kyc_verification", required:false, displayName: "Consumer KYC Verification", type: TYPE_ENUM.String, defaultValue: this.customerDetails.consumer_kyc[0].kycVerification || '', },
        ]
        this.customFormInputData = { title: "Consumer Details", customFormDTO: this.customFormData, submitButtonText: "Save" };
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

  gotoAddConsumer(event:any){
    this.router.navigateByUrl('user/consumer/add');
  }

  gotoEditConsumer(element:any){
    this.router.navigateByUrl('user/consumer/edit?state='+btoa(JSON.stringify(element)))
  }

}
