import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Alert, AlertType, AlertTitle } from "src/app/dto/Alert";
import { QueryPromo } from 'src/app/dto/APIResponseDTO';
import { CustomFormDTO, CustomFormInputDTO, CustomTableDTO,CustomTableInnerDataDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
// import { PromoServiceService } from 'src/app/shared-module/Services/promo-service/promo-service.service';
import { PromoService } from "src/app/shared-module/Services/pages/promo.service";

@Component({
  selector: 'app-list-promo',
  templateUrl: './list-promo.component.html',
  styleUrls: ['./list-promo.component.scss']
})

export class ListPromoComponent implements OnInit {

  public isLoading: boolean = false;

  ELEMENT_DATA: QueryPromo[] =[];
  customTableInputData!:CustomTableDTO;
  customFormInnerData!:CustomTableInnerDataDTO[]; 
  displayedColumns!: string[] 
  queryFilterForm!:FormGroup
  customFormData!: CustomFormDTO[]
  customFormInputData!: CustomFormInputDTO;

  constructor(
    private promoService:PromoService,
    private router:Router
  ){ }

  ngOnInit(): void {

    this.customFormData = [
      { name: "isActive", displayName: "Is Active", type: TYPE_ENUM.checkbox, defaultValue: false },
      { name: "service_id", displayName: "Service Id", type: TYPE_ENUM.String, defaultValue: '' },
    ]

    this.customFormInputData = { title: "Search Filter Promo", 
    customFormDTO: this.customFormData, 
    submitButtonText: "Search", additionalButton:["Add Promo"] };


    this.displayedColumns= [ "promo_id","promo_code","promo_percent",
    "addCashOnWalletCreate",
    "isActive",
    "max_cashback",
    "onWalletCreate",
    "min_bill",
    "expiry",
    "Action"
    ];
    this.customFormInnerData= [
      {matColumnDef:"promo_id",matHeaderCellDef:"Promo Id",isAction:false},
      {matColumnDef:"promo_code",matHeaderCellDef:"Promo Code",isAction:false},
      {matColumnDef:"promo_percent",matHeaderCellDef:"Promo Percent",isAction:false},
      {matColumnDef:"addCashOnWalletCreate",matHeaderCellDef:"Add Cash on Wallet",isAction:false},
      {matColumnDef:"isActive",matHeaderCellDef:"is Active",isAction:false},
      {matColumnDef:"max_cashback",matHeaderCellDef:"Max CashBack",isAction:false},
      {matColumnDef:"onWalletCreate",matHeaderCellDef:"On Wallet Creat",isAction:false},
      {matColumnDef:"min_bill",matHeaderCellDef:"Min Bill",isAction:false},
      {matColumnDef:"expiry",matHeaderCellDef:"Expiry",isAction:false},
      {matColumnDef:"Action",matHeaderCellDef:"Action",isAction:true},
    ]

    this.customTableInputData ={
      displayedColumns:this.displayedColumns,
      ELEMENT_DATA:this.ELEMENT_DATA,
      innerData:this.customFormInnerData
    }

    let obj = {
      isActive: true,
      service_id: ""
    }
    this.getListPromo(obj)
  }

  getListPromo(formData:any){
    let obj = {
      filters: formData
    }
    this.promoService.getListPromo(
      obj,
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
  
  gotoEditPromo(element:QueryPromo){
    this.router.navigateByUrl('user/promo/edit?state='+btoa(JSON.stringify(element)));
  }

  gotoCreatePromo(event:any){
    this.router.navigateByUrl('user/promo/add');
  }

}
