import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { QueryPromo } from 'src/app/dto/APIResponseDTO';
import { CustomFormDTO, CustomFormInputDTO, CustomTableDTO,CustomTableInnerDataDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
import { BillingService } from 'src/app/shared-module/Services/billing/billing.service';


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  ELEMENT_DATA: QueryPromo[] =[];

  customTableInputData!:CustomTableDTO;

  customFormInnerData!:CustomTableInnerDataDTO[]; 

  displayedColumns!: string[] 

  queryFilterForm!:FormGroup

  customFormData!: CustomFormDTO[]

  customFormInputData!: CustomFormInputDTO;

  constructor(private billingService:BillingService,
    private router:Router){
  
  }
  ngOnInit(): void {

    this.customFormData = [
      { name: "isActive", displayName: "Is Active", type: TYPE_ENUM.checkbox, defaultValue: false },
      { name: "partner_id", displayName: "Partner Id", type: TYPE_ENUM.String, defaultValue: '' },

    ]

    this.customFormInputData = { title: "Search Filter", 
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
  }

  onSubmit(formData:any){
    this.billingService.getBilling(formData).subscribe(res=>{
      this.customTableInputData= {...this.customTableInputData, ELEMENT_DATA:res['billingList']}
      
    })
  }
  editElemet(element:QueryPromo){
    this.router.navigateByUrl('user/editBilling?state='+btoa(JSON.stringify(element)))
  }
  adBilling(event:any){
    this.router.navigateByUrl('user/addBilling');
  }

}
