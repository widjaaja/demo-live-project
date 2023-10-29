import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';
import { CustomFormDTO, CustomFormInputDTO, TYPE_ENUM } from 'src/app/dto/CustomFormDTO';


@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent implements OnInit {
  
  formGroup!:FormGroup;
  formControlName!:String[];
  formGroupMap:Map<String,FormGroup> = new Map([['empty',new FormGroup([])]]);

  _customFormInputData!:CustomFormInputDTO;
  selectedFile: File | undefined;
  
  @Input()

  get customFormInputData(): CustomFormInputDTO { return this._customFormInputData; }

  set customFormInputData(customFormInputData: CustomFormInputDTO) {
    this._customFormInputData = customFormInputData ;
    this.formGroup= new FormGroup([]);
    customFormInputData?.customFormDTO?.forEach((value:CustomFormDTO)=>{
      if(value.type === TYPE_ENUM.Group){
        let innerFormGroup = new FormGroup([]);
        this.formGroupMap.set(value.name,innerFormGroup);
        this.formGroup.addControl(value.name,innerFormGroup)
          value.child?.forEach((childValue:CustomFormDTO)=>{

          this.formGroupMap?.get(value.name)?.addControl (childValue.name,new FormControl(childValue.defaultValue,childValue.Validator));
          })
      }else{

        this.formGroup.addControl (value.name,new FormControl(value.defaultValue,value.Validator));
      }
    })
   
    console.log(this.formGroup)
  }
 @Input() successMessage:String | undefined;
 
 @Input() errorMessage:String | undefined;
  
  @Output() formDataEmit= new EventEmitter<any>

  @Output() addtionalButtonOutput= new EventEmitter<any>


  constructor(private formBuilder:FormBuilder){

  }
  ngOnInit(): void {
    
   
  }

  onFileChange(event:any,formName:String) {
  
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
     console.log(this.selectedFile)
      this.formGroup.patchValue({
        formName: this.selectedFile 
      });
    }
  }

  onSubmit(){
    console.log(this.formGroup.value)
    if(!this.formGroup.valid){
      this.errorMessage= "Please fill all * mark mandatory field."
       setTimeout(()=>{
          this.errorMessage= undefined;
      },3000)
      return;
      // alert('form is invalid')
      // return;
    }
    if(this.selectedFile){
      let formData = new FormData();
      formData.append("file",this.selectedFile,this.selectedFile.name)
      this.formDataEmit.emit({formValue:this.formGroup.value,formData:formData});
    }else{

      this.formDataEmit.emit(this.formGroup.value);
    }
  }

  onAddtionalButtonClick(name:string){
    this.addtionalButtonOutput.emit(name);
  }




}
