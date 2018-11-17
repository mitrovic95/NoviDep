import { Component, OnInit, ViewChild, ElementRef, HostListener  } from '@angular/core';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

  public poruka = false;

  ngOnInit() {
  }
}
