import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomFormDTO, CustomFormInputDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
import { PartnerService } from 'src/app/shared-module/Services/partner/partner.service';

@Component({
  selector: 'app-edit-partner',
  templateUrl: './edit-partner.component.html',
  styleUrls: ['./edit-partner.component.scss']
})
export class EditPartnerComponent implements OnInit {


  partner_id!: string;

  customFormData!: CustomFormDTO[]

  customFormInputData!: CustomFormInputDTO;

  constructor(private route: ActivatedRoute,
    private partnerService: PartnerService, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (!!params['state']) {
        let partner = JSON.parse(atob(params['state']));

        if (!!partner) {
          this.partner_id = partner.partner_id;
          this.customFormData = [
            { name: "partner_name", displayName: "Parner Name", type: TYPE_ENUM.String, defaultValue: partner.partner_name, Validator: Validators.required },
            { name: "partner_description", displayName: "Description", type: TYPE_ENUM.String, defaultValue: partner.partner_description, Validator: Validators.required },
            { name: "partner_pan", displayName: "PAN", type: TYPE_ENUM.String, defaultValue: partner.partner_pan, Validator: Validators.required },
            { name: "partner_status", displayName: "Status", type: TYPE_ENUM.checkbox, defaultValue: partner.partner_status, Validator: Validators.required },
            { name: "partner_sid", displayName: "SID", type: TYPE_ENUM.String, defaultValue: partner.partner_sid, Validator: Validators.required },
            { name: "is_active", displayName: "is Active", type: TYPE_ENUM.checkbox, defaultValue: partner.is_active, Validator: Validators.required },
            { name: "partner_gst", displayName: "gst", type: TYPE_ENUM.String, defaultValue: partner.partner_gst, Validator: Validators.required },
            {
              name: "partner_location", displayName: "Location", type: TYPE_ENUM.Group, defaultValue: partner.partner_location, Validator: Validators.required,
              child: [
                { name: "partner_address", displayName: "Partner Address", type: TYPE_ENUM.String, defaultValue: partner.partner_location.partner_address, Validator: Validators.required },
                { name: "partner_latlong", displayName: "Partner Lat long", type: TYPE_ENUM.String, defaultValue: partner.partner_location.partner_latlong, Validator: Validators.required },
              ]
            },
            {
              name: "partner_contact", displayName: "Partner Contact", type: TYPE_ENUM.Group, defaultValue: '', Validator: Validators.required,
              child: [
                { name: "partner_phones", displayName: "Partner Phones", type: TYPE_ENUM.String, defaultValue: partner.partner_contact.partner_emails[0], Validator: Validators.required },
                { name: "partner_emails", displayName: "Partner Emails", type: TYPE_ENUM.String, defaultValue: partner.partner_contact.partner_phones[0], Validator: Validators.required },
              ]
            },
            { name: "partner_files", displayName: "Files", type: TYPE_ENUM.file, defaultValue: partner.partner_files },
          ]

          this.customFormInputData = { title: "Edit Partner", customFormDTO: this.customFormData, submitButtonText: "Save" };

        } else {
          console.log("error")
          alert("error");
        }
      } else {
        this.router.navigateByUrl('/user/promo')
      }
    });
  }



  onSubmit(data:any) {

   
    if (data.formData === undefined) {
      data = { ...data, partner_id: this.partner_id }
      this.partnerService.editPartnerByPartnerID(data).subscribe((res) => {

        this.router.navigateByUrl('/user/partner')
      })
    } else {
      data.formValue = { ...data.formValue, partner_id: this.partner_id }
      this.partnerService.uploadImage(data.formData).subscribe(res => {
        data.formValue['partner_files'] = [res.details];
        this.partnerService.editPartnerByPartnerID(data.formValue).subscribe((res) => {

          this.router.navigateByUrl('/user/partner')
        })
      })
    }



  }

}
