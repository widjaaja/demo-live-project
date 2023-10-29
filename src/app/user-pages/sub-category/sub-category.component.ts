import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomFormDTO, CustomFormInputDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
import { SubCategoryService } from 'src/app/shared-module/Services/sub-category/sub-category.service';


@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent {
  customFormData!: CustomFormDTO[]

  customFormInputData!: CustomFormInputDTO;
  constructor(private subCategoryService: SubCategoryService) { }

  successMessage:String | undefined;

  errorMessage:String | undefined;

  ngOnInit() {
     this.subCategoryService.getCategoryList().subscribe(res=>{
      console.log(res.cat_list)
     const cat_data= res.cat_list.map((list:any)=>{
        return {'id':list['cat_id'],'value': list['name']}
      })
    this.customFormData = [
      { name: "cat_id", required:true, displayName: "Category Name", type: TYPE_ENUM.select, defaultValue: '', Validator: Validators.required, value:cat_data },
      { name: "name", required:true, displayName: "Name", type: TYPE_ENUM.String, defaultValue: '', Validator: Validators.required },
      ]

    this.customFormInputData = { title: "Add Sub-Category", customFormDTO: this.customFormData, submitButtonText: "Save" };
    })

  }
  onSubmit(formValue: any) {
    this.subCategoryService.addSubCategory(formValue).subscribe(res => {
      this.successMessage= "Sub Category added successfully."

        setTimeout(()=>{
            this.successMessage= undefined;
        },3000)
    },err=>{
      this.errorMessage= "Request failed. Please check you data."

      setTimeout(()=>{
          this.errorMessage= undefined;
      },3000)
    })
    console.log('form data is ', formValue);
  }

}
