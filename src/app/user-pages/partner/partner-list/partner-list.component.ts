import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomTableDTO, CustomTableInnerDataDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
import { PartnerService } from 'src/app/shared-module/Services/partner/partner.service';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.scss']
})
export class PartnerListComponent implements OnInit {

  ELEMENT_DATA: any[] = [];

  serviceId='';

  displayedColumns: string[] = ["partner_id", "partner_sid", "partner_name",
    // "partner_files",
    "partner_status",
    "max_cashback",
    "onWalletCreate",
    "is_active",
    "partner_gst",
    "partner_pan",
    // "partner_location",
    "Action"
  ];
  customTableInnerData: CustomTableInnerDataDTO[] = [
    { matColumnDef: "partner_id", matHeaderCellDef: "Partner ID", isAction: false },
    { matColumnDef: "partner_sid", matHeaderCellDef: "Partner SID", isAction: false },
    { matColumnDef: "partner_name", matHeaderCellDef: "Partner Name", isAction: false },
    // { matColumnDef: "partner_files", matHeaderCellDef: "Add Cash on Wallet", isAction: false },
    { matColumnDef: "partner_status", matHeaderCellDef: "Status", isAction: false },
    { matColumnDef: "max_cashback", matHeaderCellDef: "Max CashBack", isAction: false },
    { matColumnDef: "onWalletCreate", matHeaderCellDef: "On Wallet Creat", isAction: false },
    { matColumnDef: "is_active", matHeaderCellDef: " Active", isAction: false },
    { matColumnDef: "partner_gst", matHeaderCellDef: "Partner GST", isAction: false },
    { matColumnDef: "partner_pan", matHeaderCellDef: "Partner Pan", isAction: false },
    // { matColumnDef: "partner_location", matHeaderCellDef: "Partner Location", isAction: false },
    { matColumnDef: "action", matHeaderCellDef: "Action", isAction: true }
  ]

  customTableInputData: CustomTableDTO = {
    displayedColumns: this.displayedColumns,
    ELEMENT_DATA: this.ELEMENT_DATA,
    innerData: this.customTableInnerData
  }


  customFormData = [
    { name: "service_id", displayName: "Service Id", type: TYPE_ENUM.String, defaultValue: '' }

  ]

  customFormInputData = { title: "Filter", 
  customFormDTO: this.customFormData, 
  submitButtonText: "Apply Filter" };

  constructor(private partnerService:PartnerService,private router:Router){
    
  }

  ngOnInit(): void {
  
   this.getAllPartner();
  }

  getAllPartner(){
    let filteredUrl=''
    if(this.serviceId){
      filteredUrl='/service/'+this.serviceId
    }
    this.partnerService.getAllPartner(filteredUrl).subscribe(res=>{
      this.customTableInputData = {...this.customTableInputData, ELEMENT_DATA:res['partnerDetails']}
    })
  }

  editElemet(element: any) {
    this.router.navigateByUrl('user/partner/edit?state='+btoa(JSON.stringify(element)));
  }

  adPromo(event:any){
    this.router.navigateByUrl('user/createCommission');
  }

  applyFilter(serviceId:any){
    console.log(serviceId['service_id']);
    this.serviceId= serviceId['service_id'];
    this.getAllPartner();
  }

}
