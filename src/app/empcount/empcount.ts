import { Component,Input,Output,EventEmitter  } from "@angular/core";

@Component({
    selector:'emp-count',
    templateUrl:'empcount.html'
})
export class EmpCount{
    @Input()
    all:number;
    @Input()
    male:number;
    @Input()
    female:number;
    radioButtonValue: string = 'all';
    search:string;
    @Output()
    customEventForRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();
    @Output()
    customEventFoSearchSelection: EventEmitter<string> = new EventEmitter<string>();

    changeRadioBtnFun(){  
        this.customEventForRadioButtonSelectionChanged.emit(this.radioButtonValue);
     }

     changeSearchFun(){
         this.customEventFoSearchSelection.emit(this.search);
     }
    

}