import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Alert, AlertType, AlertTitle } from "src/app/dto/Alert";
import { CustomFormDTO, CustomFormInputDTO, CustomTableDTO, CustomTableInnerDataDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
// import { CommissionServiceService } from 'src/app/shared-module/Services/commission-service/commission-service.service';
import { CommissionService } from "src/app/shared-module/Services/pages/commission.service";

@Component({
  selector: 'app-list-commission',
  templateUrl: './list-commission.component.html',
  styleUrls: ['./list-commission.component.scss']
})
export class ListCommissionComponent {

  public isLoading: boolean = false;

  ELEMENT_DATA: any[] =[];
  customTableInputData!:CustomTableDTO;
  customFormInnerData!:CustomTableInnerDataDTO[]; 
  displayedColumns!: string[] 
  queryFilterForm!:FormGroup
  customFormData!: CustomFormDTO[]
  customFormInputData!: CustomFormInputDTO;

  constructor(
    private commissionService: CommissionService,
    private router: Router
  ){ }

  ngOnInit(): void {
    this.customFormData = [
      { name: "partner_id", displayName: "Partner ID", type: TYPE_ENUM.String, defaultValue: '' }

    ]

    this.customFormInputData = { title: "Search Filter Commission", 
    customFormDTO: this.customFormData, 
    submitButtonText: "Search", additionalButton:["Create Commission"] };


    this.displayedColumns= [ "comm_id","comm_percent","partner_id",'Action'
    ];
    this.customFormInnerData= [
      {matColumnDef:"comm_id",matHeaderCellDef:"Commission Id",isAction:false},
      {matColumnDef:"comm_percent",matHeaderCellDef:"Commission Percent",isAction:false},
      {matColumnDef:"partner_id",matHeaderCellDef:"Partner ID",isAction:false},
      {matColumnDef:"Action",matHeaderCellDef:"Action",isAction:true},
    ]

    this.customTableInputData ={
      displayedColumns:this.displayedColumns,
      ELEMENT_DATA:this.ELEMENT_DATA,
      innerData:this.customFormInnerData
    }

    let obj = {
      partner_id: ""
    }
    this.getListCommission(obj);
  }

  public getListCommission(formData:any) {
    this.commissionService.getListCommission(
      formData,
      res => {
        // Alert.showStatus(
        //   AlertType.SUCCESS,
        //   AlertTitle.SUCCESS,
        //   'The Commission has been successfully created!'
        // );
        this.customTableInputData = {
          ...this.customTableInputData, 
          ELEMENT_DATA: res['comm_list']
        }
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

  // onSubmit(formData:any){
  //   this.commissionService.queryCommission(formData).subscribe(res=>{
  //     this.customTableInputData= {...this.customTableInputData, ELEMENT_DATA: res['comm_list'] }
  //   })
  // }

  gotoEditCommission(element:any){
    this.router.navigateByUrl('user/commission/edit?state='+btoa(JSON.stringify(element)))
  }

  gotoAddCommission(event:any){
    this.router.navigateByUrl('user/commission/add');
  }

}
