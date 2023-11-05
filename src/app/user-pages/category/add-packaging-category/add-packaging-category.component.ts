import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Alert, AlertType, AlertTitle } from "src/app/dto/Alert";
import { CustomFormDTO, CustomFormInputDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
import { CategoryService } from "src/app/shared-module/Services/pages/category.service";
import { PackagingCategoryService } from 'src/app/shared-module/Services/packaging-category/packaging-category.service';

@Component({
  selector: 'app-add-packaging-category',
  templateUrl: './add-packaging-category.component.html',
  styleUrls: ['./add-packaging-category.component.scss']
})
export class AddPackagingCategoryComponent {

  public isLoading: boolean = false;

  customFormData!: CustomFormDTO[]
  customFormInputData!: CustomFormInputDTO;
  successMessage:String | undefined;
  errorMessage:String | undefined;
  
  constructor(
    private categoryService: CategoryService,
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

  public createPackagingCategory(formValue: any) {
    this.categoryService.createPackageCategory(
      formValue,
      res => {
        Alert.showStatus(
          AlertType.SUCCESS,
          AlertTitle.SUCCESS,
          'Packaging category added successfully.'
        );
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

}
