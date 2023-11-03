import { Component } from '@angular/core';
import { CustomFormDTO, CustomFormInputDTO, CustomTableDTO, CustomTableInnerDataDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommissionServiceService } from 'src/app/shared-module/Services/commission-service/commission-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commision',
  templateUrl: './commision.component.html',
  styleUrls: ['./commision.component.scss']
})
export class CommisionComponent {

  ELEMENT_DATA: any[] =[];

  customTableInputData!:CustomTableDTO;

  customFormInnerData!:CustomTableInnerDataDTO[]; 

  displayedColumns!: string[] 

  queryFilterForm!:FormGroup

  customFormData!: CustomFormDTO[]

  customFormInputData!: CustomFormInputDTO;

  constructor(private commissionService:CommissionServiceService,
    private router:Router){
  }

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
    this.onSubmit(obj);
  }

  onSubmit(formData:any){
    this.commissionService.queryCommission(formData).subscribe(res=>{
      this.customTableInputData= {...this.customTableInputData, ELEMENT_DATA: res['comm_list'] }
    })
  }

  editElemet(element:any){
    this.router.navigateByUrl('user/updateCommission?state='+btoa(JSON.stringify(element)))
  }

  adPromo(event:any){
    this.router.navigateByUrl('user/createCommission');
  }


}
