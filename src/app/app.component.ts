import { Component, Inject } from '@angular/core';
import { DataService } from "./dataservice";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent{
  employeeData;
  selectedEmployeeCountRadioButton:string = 'all';
  input:string;

  constructor(private myservice:DataService){
    this.employeeData = this.myservice.getData();
  }

  getAllEmployeeCount(){
    return this.employeeData.length;
  }

  getAllMaleEmployeeCount(){
    return this.employeeData.filter(e=>e.gender === 'male').length;
  }

  getAllFemaleEmployeeCount(){
    return this.employeeData.filter(e=>e.gender === 'female').length;
  }

  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    //alert(selectedRadioButtonValue)
  }

  onSearchChanges(input){
    this.input = input;
  }


}
