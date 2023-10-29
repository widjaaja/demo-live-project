
import { ValidationErrors} from '@angular/forms';


export interface CustomFormInputDTO{
    title:string,
    customFormDTO:CustomFormDTO[]
    submitButtonText?:string
    additionalButton?:string[]
}

export interface CustomFormDTO{
    name:string,
    displayName:string,
    required?:boolean,
    type:TYPE_ENUM,
    value?:any,
    defaultValue:any
    Validator?:ValidationErrors | null
    child?:CustomFormDTO[] 
}

export enum TYPE_ENUM{
    String='string',checkbox='checkbox',number='number',textarea='textarea', select='select', file='file',Group='group'
}

export interface CustomTableInnerDataDTO{
    matColumnDef:string,
    matHeaderCellDef:string,
    isAction:boolean
    onClick?:Function
}

export interface CustomTableDTO{
        ELEMENT_DATA:any[]
        displayedColumns:string[]
        innerData:CustomTableInnerDataDTO[]
}


