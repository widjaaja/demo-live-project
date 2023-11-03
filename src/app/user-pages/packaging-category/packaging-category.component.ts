import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomFormDTO, CustomFormInputDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
import { PackagingCategoryService } from 'src/app/shared-module/Services/packaging-category/packaging-category.service';


@Component({
  selector: 'app-packaging-category',
  templateUrl: './packaging-category.component.html',
  styleUrls: ['./packaging-category.component.scss']
})
export class PackagingCategoryComponent {
  customFormData!: CustomFormDTO[]

  customFormInputData!: CustomFormInputDTO;
  constructor(
    private packagingCategoryService: PackagingCategoryService
  ) { }

  successMessage:String | undefined;
  errorMessage:String | undefined;

  ngOnInit() {
    this.customFormData = [
      { 
        name: "name", 
        required:true, 
        displayName: "Name", 
        type: TYPE_ENUM.String, 
        defaultValue: '', 
        Validator: Validators.required 
      },
    ]

    this.customFormInputData = { 
      title: "Add Packaging Category", 
      customFormDTO: this.customFormData, 
      submitButtonText: "Save" 
    };
  }

onSubmit(formValue: any) {
    this.packagingCategoryService.addPackagingCategory(formValue).subscribe(res => {
     this.successMessage= "Packaging category added successfully."

        setTimeout(()=>{
            this.successMessage= undefined;
        },3000)
    },err=>{
      this.errorMessage= "Request failed. Please check your data."

      setTimeout(()=>{
          this.errorMessage= undefined;
      },3000)
    })
  }

}
