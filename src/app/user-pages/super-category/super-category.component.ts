import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomFormDTO, CustomFormInputDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';
import { SuperCategoryService } from 'src/app/shared-module/Services/super-category/super-category.service';


@Component({
  selector: 'app-super-category',
  templateUrl: './super-category.component.html',
  styleUrls: ['./super-category.component.scss']
})
export class SuperCategoryComponent {
  customFormData!: CustomFormDTO[]

  customFormInputData!: CustomFormInputDTO;
  constructor(private superCategoryService: SuperCategoryService) { }

  successMessage:String | undefined;

  errorMessage:String | undefined;


  ngOnInit() {
    this.customFormData = [
      { name: "name", required:true, displayName: "Name", type: TYPE_ENUM.String, defaultValue: '', Validator: Validators.required },
      ]

    this.customFormInputData = { title: "Add Super Category", customFormDTO: this.customFormData, submitButtonText: "Save" };


  }

  onSubmit(formValue: any) {
    this.superCategoryService.addSuperCategory(formValue).subscribe(res => {
     this.successMessage= "Super category added successfully."

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
