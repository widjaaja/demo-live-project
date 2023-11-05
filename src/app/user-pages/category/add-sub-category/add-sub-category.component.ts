import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Alert, AlertType, AlertTitle } from "src/app/dto/Alert";
import { CustomFormDTO, CustomFormInputDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
import { CategoryService } from "src/app/shared-module/Services/pages/category.service";

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.scss']
})
export class AddSubCategoryComponent {

  public isLoading: boolean = false;

  customFormData!: CustomFormDTO[]
  customFormInputData!: CustomFormInputDTO;
  successMessage:String | undefined;
  errorMessage:String | undefined;

  constructor(
    private categoryService: CategoryService,
  ) { }

  ngOnInit() {
    this.getListCategory();
  }

  public getListCategory() {
    this.categoryService.getListCategory(
      {'filter':{}},
      res => {
        const cat_data = res.cat_list.map((list:any) => {
          return {'id':list['cat_id'],'value': list['name']}
        })
        this.customFormData = [
          { name: "cat_id", required:true, displayName: "Category Name", type: TYPE_ENUM.select, defaultValue: '', Validator: Validators.required, value:cat_data },
          { name: "name", required:true, displayName: "Name", type: TYPE_ENUM.String, defaultValue: '', Validator: Validators.required },
        ]
        this.customFormInputData = { title: "Add Sub-Category", customFormDTO: this.customFormData, submitButtonText: "Save" };
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

  public createSubCategory(formValue: any) {
    this.categoryService.createSubCategory(
      formValue,
      res => {
        Alert.showStatus(
          AlertType.SUCCESS,
          AlertTitle.SUCCESS,
          'Sub Category added successfully.'
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
