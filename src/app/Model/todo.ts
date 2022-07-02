export class Todo {
   
    id:number=0;
    description:string="";

    constructor(values:Object={}){
        Object.assign(this,values);
    }
}