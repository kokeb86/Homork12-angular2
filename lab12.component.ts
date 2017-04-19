import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-lab12',
  template: `
    <ul>
        <li *ngFor= "let name of namedList" appUpper> {{name}} </li>
        
  </ul>`,
  styles: []
})
export class Lab14Component  {

  constructor() {
    
   }

@Input() namedList: string[];


}
