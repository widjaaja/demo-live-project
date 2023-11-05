import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomFormDTO, CustomFormInputDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
import { PackagingCategoryService } from 'src/app/shared-module/Services/packaging-category/packaging-category.service';

@Component({
  selector: 'app-add-packaging-category',
  templateUrl: './add-packaging-category.component.html',
  styleUrls: ['./add-packaging-category.component.scss']
})
export class AddPackagingCategoryComponent {

  customFormData!: CustomFormDTO[]
  customFormInputData!: CustomFormInputDTO;

  successMessage:String | undefined;
  errorMessage:String | undefined;
  
  constructor(
    private packagingCategoryService: PackagingCategoryService
  ) { }

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
