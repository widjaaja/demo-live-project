import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Alert, AlertType, AlertTitle } from "src/app/dto/Alert";
import { QueryPromo } from 'src/app/dto/APIResponseDTO';
import { CustomFormDTO, CustomFormInputDTO, CustomTableDTO,CustomTableInnerDataDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
// import { BillingService } from 'src/app/shared-module/Services/billing/billing.service';
import { BillingService } from "src/app/shared-module/Services/pages/billing.service";

@Component({
  selector: 'app-list-billing',
  templateUrl: './list-billing.component.html',
  styleUrls: ['./list-billing.component.scss']
})
export class ListBillingComponent {

  public isLoading: boolean = false;

  ELEMENT_DATA: QueryPromo[] =[];
  customTableInputData!:CustomTableDTO;
  customFormInnerData!:CustomTableInnerDataDTO[]; 
  displayedColumns!: string[] 
  queryFilterForm!:FormGroup
  customFormData!: CustomFormDTO[]
  customFormInputData!: CustomFormInputDTO;

  constructor(
    private billingService: BillingService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.customFormData = [
      { name: "isActive", displayName: "Is Active", type: TYPE_ENUM.checkbox, defaultValue: false },
      { name: "partner_id", displayName: "Partner Id", type: TYPE_ENUM.String, defaultValue: '' },
    ]

    this.customFormInputData = { title: "Search Filter Billing", 
    customFormDTO: this.customFormData, 
    submitButtonText: "Search", additionalButton:["Add Billing"] };

    this.displayedColumns= [ 
    "unit",
    "type",
    "promo_id",
    "commission_id",
    "partner_id",
    "Action"
    ];
    this.customFormInnerData= [
      {matColumnDef:"unit",matHeaderCellDef:"Unit",isAction:false},
      {matColumnDef:"type",matHeaderCellDef:"Type",isAction:false},
      {matColumnDef:"promo_id",matHeaderCellDef:"Promo ID",isAction:false},
      {matColumnDef:"commission_id",matHeaderCellDef:"Commission ID",isAction:false},
      {matColumnDef:"partner_id",matHeaderCellDef:"Partner ID",isAction:false},
      {matColumnDef:"Action",matHeaderCellDef:"Action",isAction:true},
    ]

    this.customTableInputData ={
      displayedColumns:this.displayedColumns,
      ELEMENT_DATA:this.ELEMENT_DATA,
      innerData:this.customFormInnerData
    }

    let obj = {
      isActive: true,
      partner_id: ""
    }
    this.getListBilling(obj);
  }

  getListBilling(formData:any){
    let obj = {
      is_active: formData.isActive,
      partner_id: formData.partner_id
    }
    this.billingService.getListBilling(
      {filters: obj},
      res => {
        // Alert.showStatus(
        //   AlertType.SUCCESS,
        //   AlertTitle.SUCCESS,
        //   'The Commission has been successfully created!'
        // );
        this.customTableInputData = {
          ...this.customTableInputData, 
          ELEMENT_DATA : res['promoList']
        }
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

  gotoEditBilling(element:QueryPromo){
    this.router.navigateByUrl('user/billing/edit?state='+btoa(JSON.stringify(element)))
  }
  gotoAddBilling(event:any){
    this.router.navigateByUrl('user/billing/add');
  }
}
