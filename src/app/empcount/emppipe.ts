import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name : 'genderPipe'
})
export class EmpPipe implements PipeTransform{
    transform(value,gerder){
        if(gerder.toLowerCase() === 'male'){
            return 'Mr. ' + value;
        }else{
            return 'Miss. ' + value;
        }
    }
}