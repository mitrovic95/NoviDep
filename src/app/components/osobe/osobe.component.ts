import { Component, OnInit } from '@angular/core';
import { Osoba } from 'src/app/model/osoba';
import { OsobeService } from 'src/app/services/osobe.service';

@Component({
  selector: 'app-osobe',
  templateUrl: './osobe.component.html',
  styleUrls: ['./osobe.component.css']
})
export class OsobeComponent implements OnInit {

  public osobe: Osoba[];
  public osoba: Osoba;
  public id?: number;

  constructor (private osobaService: OsobeService) { }

  ngOnInit() {
    this.osobaService.getOsobe().subscribe((osobe) => {
      this.osobe = osobe;
    });
    this.osobaService.getOsobe();
    this.osobaService.osobe.subscribe(data => console.log(data));

  }
}
