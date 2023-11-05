import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Alert, AlertType, AlertTitle } from "src/app/dto/Alert";
import { CustomFormDTO, CustomFormInputDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
// import { CategoryService } from 'src/app/shared-module/Services/category/category.service';
import { CategoryService } from "src/app/shared-module/Services/pages/category.service";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {

  public isLoading: boolean = false;

  customFormData!: CustomFormDTO[]
  customFormInputData!: CustomFormInputDTO;
  successMessage:String | undefined;
  errorMessage:String | undefined;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.getListSuperCategory();
  }

  public getListSuperCategory() {
    this.categoryService.getListSuperCategory(
      {'filter':{}},
      res => {
        const super_cat_data = res.super_cat_list.map((list:any) => {
          return {'id':list['super_cat_id'],'value': list['name']}
        })
        this.customFormData = [
          { name: "super_cat_id",  required:true, displayName: "Super Category", type: TYPE_ENUM.select, defaultValue: '', Validator: Validators.required, value:super_cat_data },
          { name: "name", displayName: "Name",  required:true,  type: TYPE_ENUM.String, defaultValue: '', Validator: Validators.required },
        ]
        this.customFormInputData = { title: "Add Category", customFormDTO: this.customFormData, submitButtonText: "Save" };
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

  public createCategory(formValue: any) {
    this.categoryService.createCategory(
      formValue,
      res => {
        Alert.showStatus(
          AlertType.SUCCESS,
          AlertTitle.SUCCESS,
          'Category added successfully.'
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

  // onSubmit(formValue: any) {
  //   this.categoryService.addCategory(formValue).subscribe(res => {
  //       this.successMessage= "Category added successfully."

  //       setTimeout(()=>{
  //           this.successMessage= undefined;
  //       },3000)
  //   },err=>{
  //     this.errorMessage= "Request failed. Please check your data."

  //     setTimeout(()=>{
  //         this.errorMessage= undefined;
  //     },3000)
  //   })
  //   console.log('form data is ', formValue);
  // }

}
