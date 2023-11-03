import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CustomFormDTO, CustomFormInputDTO, CustomTableDTO, CustomTableInnerDataDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
import { ServiceService } from 'src/app/shared-module/Services/service/service.service';

@Component({
  selector: 'app-list-consumer',
  templateUrl: './list-consumer.component.html',
  styleUrls: ['./list-consumer.component.scss']
})
export class ListConsumerComponent {

  ELEMENT_DATA: any[] =[];
  customTableInputData!:CustomTableDTO;
  customFormInnerData!:CustomTableInnerDataDTO[]; 
  displayedColumns!: string[] 
  queryFilterForm!:FormGroup
  customFormData!: CustomFormDTO[]
  customFormInputData!: CustomFormInputDTO;

  constructor(
    private serviceService:ServiceService,
    private router:Router
  ){}

  ngOnInit(): void {

    this.customFormData = [
      { name: "isActive", displayName: "Is Active", type: TYPE_ENUM.checkbox, defaultValue: false },
    ]

    this.customFormInputData = { title: "Search Filter Service", 
    customFormDTO: this.customFormData, 
    submitButtonText: "Search", additionalButton:["Add Service"] };


    this.displayedColumns= [ "service_id","service_name","Action"];
    this.customFormInnerData= [
      {matColumnDef:"service_id",matHeaderCellDef:"Service Id",isAction:false},
      {matColumnDef:"service_name",matHeaderCellDef:"Service Name",isAction:false},
      {matColumnDef:"Action",matHeaderCellDef:"Action",isAction:true},
    ]

    this.customTableInputData ={
      displayedColumns:this.displayedColumns,
      ELEMENT_DATA:this.ELEMENT_DATA,
      innerData:this.customFormInnerData
    }

    this.getListConsumer();
  }

  getListConsumer() {
    this.serviceService.getListService().subscribe((res: any)=>{
      this.customTableInputData= {...this.customTableInputData, ELEMENT_DATA: res['comm_list'] }
    })
  }

  addItem(event:any){
    this.router.navigateByUrl('user/service/add');
  }

  editItem(element:any){
    this.router.navigateByUrl('user/updateCommission?state='+btoa(JSON.stringify(element)))
  }

}
