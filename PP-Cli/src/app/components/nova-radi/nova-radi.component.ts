import { Component, OnInit, ViewChild, ElementRef, HostListener, AfterViewChecked   } from '@angular/core';

@Component({
  selector: 'app-nova-radi',
  templateUrl: './nova-radi.component.html',
  styleUrls: ['./nova-radi.component.css']
})
export class NovaRadiComponent implements OnInit, AfterViewChecked  {

  //html
  public marginTop = 50;
  public marginLeft = 50;

  public oNama = false;

  public loading = false;

  public xxx = 'none';
  


  @HostListener('document:mousemove', ['$event']) 
  
  onMouseMove(e) {
    this.marginTop = e.clientY -250 ;
    this.marginLeft = e.clientX - 55 - 250;
  }

  
  


  constructor() { }


  ngAfterViewChecked(){
    console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
    this.xxx="grid";
  }


  ngOnInit() {
  }

}
 