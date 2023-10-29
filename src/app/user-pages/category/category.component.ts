import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomFormDTO, CustomFormInputDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
import { CategoryService } from 'src/app/shared-module/Services/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  customFormData!: CustomFormDTO[]

  customFormInputData!: CustomFormInputDTO;
  constructor(private categoryService: CategoryService) { }

  successMessage:String | undefined;

  errorMessage:String | undefined;



  ngOnInit() {
    this.categoryService.getSuperCategoryList().subscribe(res=>{
      console.log(res.super_cat_list)
     const super_cat_data= res.super_cat_list.map((list:any)=>{
        return {'id':list['super_cat_id'],'value': list['name']}
      })
      this.customFormData = [
        { name: "super_cat_id",  required:true, displayName: "Super Cat Id", type: TYPE_ENUM.select, defaultValue: '', Validator: Validators.required, value:super_cat_data },
        { name: "name", displayName: "Name",  required:true,  type: TYPE_ENUM.String, defaultValue: '', Validator: Validators.required },
        ]
        this.customFormInputData = { title: "Add Category", customFormDTO: this.customFormData, submitButtonText: "Save" };  
    })
  

   


  }

 

  onSubmit(formValue: any) {

    this.categoryService.addCategory(formValue).subscribe(res => {
        this.successMessage= "Category added successfully."

        setTimeout(()=>{
            this.successMessage= undefined;
        },3000)
    },err=>{
      this.errorMessage= "Request failed. Please check your data."

      setTimeout(()=>{
          this.errorMessage= undefined;
      },3000)
    })
    console.log('form data is ', formValue);
  }

}
