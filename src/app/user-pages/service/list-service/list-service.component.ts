import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Alert, AlertType, AlertTitle } from "src/app/dto/Alert";
import { CustomFormDTO, CustomFormInputDTO, CustomTableDTO, CustomTableInnerDataDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
// import { ServiceService } from 'src/app/shared-module/Services/service/service.service';
import { ServicesService } from "src/app/shared-module/Services/pages/services.service";

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.scss']
})
export class ListServiceComponent {

  public isLoading: boolean = false;

  ELEMENT_DATA: any[] =[];
  customTableInputData!:CustomTableDTO;
  customFormInnerData!:CustomTableInnerDataDTO[]; 
  displayedColumns!: string[] 
  queryFilterForm!:FormGroup
  customFormData!: CustomFormDTO[]
  customFormInputData!: CustomFormInputDTO;

  constructor(
    private serviceService: ServicesService,
    private router: Router
  ){}

  ngOnInit(): void {

    this.customFormData = [
      { name: "isActive", displayName: "Is Active", type: TYPE_ENUM.checkbox, defaultValue: false },
    ]

    this.customFormInputData = { title: "Search Filter Service", 
    customFormDTO: this.customFormData, 
    submitButtonText: "Search", additionalButton:["Add Service"] };


    this.displayedColumns= [ "s_id","s_name","is_active","Action"];
    this.customFormInnerData= [
      {matColumnDef:"s_id",matHeaderCellDef:"Service Id",isAction:false},
      {matColumnDef:"s_name",matHeaderCellDef:"Service Name",isAction:false},
      {matColumnDef:"is_active",matHeaderCellDef:"Active",isAction:false},
      {matColumnDef:"Action",matHeaderCellDef:"Action",isAction:true},
    ]

    this.customTableInputData ={
      displayedColumns:this.displayedColumns,
      ELEMENT_DATA:this.ELEMENT_DATA,
      innerData:this.customFormInnerData
    }

    let obj = {
      current_location:""
    }
    this.getListServices(obj);
  }


  getListServices(formData:any){
    let obj = '';
    this.serviceService.getListServices(
      obj,
      res => {
        // Alert.showStatus(
        //   AlertType.SUCCESS,
        //   AlertTitle.SUCCESS,
        //   'The Commission has been successfully created!'
        // );
        console.log(res);
        
        this.customTableInputData = {
          ...this.customTableInputData, 
          ELEMENT_DATA : res['details']
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

  gotoEditService(element:any){
    this.router.navigateByUrl('user/service/edit?state='+btoa(JSON.stringify(element)))
  }

  gotoAddService(event:any){
    this.router.navigateByUrl('user/service/add');
  }
}
