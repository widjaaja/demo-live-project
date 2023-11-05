import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Alert, AlertType, AlertTitle } from "src/app/dto/Alert";
import { CustomFormDTO, CustomFormInputDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
import { SuperCategoryService } from 'src/app/shared-module/Services/super-category/super-category.service';
import { CategoryService } from "src/app/shared-module/Services/pages/category.service";

@Component({
  selector: 'app-add-super-category',
  templateUrl: './add-super-category.component.html',
  styleUrls: ['./add-super-category.component.scss']
})
export class AddSuperCategoryComponent {

  public isLoading: boolean = false;

  customFormData!: CustomFormDTO[]
  customFormInputData!: CustomFormInputDTO;
  successMessage:String | undefined;
  errorMessage:String | undefined;

  constructor(
    private router: Router,
    private superCategoryService: SuperCategoryService,
    private categoryService: CategoryService,
  ) { }

  ngOnInit() {
    this.customFormData = [
      { name: "name", required:true, displayName: "Name", type: TYPE_ENUM.String, defaultValue: '', Validator: Validators.required },
    ]

    this.customFormInputData = { title: "Add Super Category", customFormDTO: this.customFormData, submitButtonText: "Save" };
  }
  
  public createSuperCategory(formValue: any) {
    this.categoryService.createSuperCategory(
      formValue,
      res => {
        Alert.showStatus(
          AlertType.SUCCESS,
          AlertTitle.SUCCESS,
          'Super Category added successfully.'
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
