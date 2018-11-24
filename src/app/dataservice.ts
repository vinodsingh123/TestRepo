import { Injectable } from "@angular/core";
import { IEmployee } from "./empcount/empmodel";

@Injectable()
export class DataService{

    getData():IEmployee[]{
        return [
            {name:"nanda",gender:'female',mobile:56475675,email:"test@gmail.com",address:"delhi"},
            {name:"sunny",gender:'male',mobile:56475675,email:"test@gmail.com",address:"agra"},
            {name:"dheeraj",gender:'male',mobile:56475675,email:"test@gmail.com",address:"goa"},
            {name:"pooja",gender:'female',mobile:56475675,email:"test@gmail.com",address:"jaipur"}
        ];
    }
}