import { Component, Input,Output, OnInit,EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CustomTableDTO } from 'src/app/dto/CustomFormDTO';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {

 

  _customTableInputData!:CustomTableDTO;
  

  dataSource!:MatTableDataSource<any[]>;
  
  @Input()
  get customTableInputData(): CustomTableDTO { return this._customTableInputData; }
  set customTableInputData(customTableInputData: CustomTableDTO) {
    this._customTableInputData = customTableInputData ;
    this.dataSource= new MatTableDataSource(customTableInputData.ELEMENT_DATA);
  }

  @Output() actionEmit= new EventEmitter<any>


  ngOnInit(): void {
  
  }

  onAction(element:any){
      this.actionEmit.emit(element)
  }

}
