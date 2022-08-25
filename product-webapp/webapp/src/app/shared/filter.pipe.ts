import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value : any[],filterString:string,propName:string):any[] {
    const result:any=[];
    if(!value || filterString==='' || propName ===''){
      return value;
    }
  value.forEach ((b:any)=>{
    if(b[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
      result.push(b);
    }
  });
  return result;
  }

}
