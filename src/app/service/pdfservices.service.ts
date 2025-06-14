import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface OfficeSelection{
  page: number;
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class PdfservicesService {


private selectionSubject = new BehaviorSubject<OfficeSelection | null>(null);
selection$ = this.selectionSubject.asObservable();

setOfficeSelection(page:number, name:string){
  this.selectionSubject.next({page,name});
}

  constructor() { }
}
