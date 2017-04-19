import { Directive,ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective implements AfterViewInit {

  constructor(private element:ElementRef) {
    this.element.nativeElement.style.backgroundColor = "blue";
   }

ngAfterViewInit(){
  var itemValue= this.element.nativeElement.innerText;
  this.element.nativeElement.innerText= itemValue.toUpperCase();
}

}
