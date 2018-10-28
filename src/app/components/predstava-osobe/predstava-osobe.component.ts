import { Component, OnInit } from '@angular/core';
import { PredstavaOsoba } from 'src/app/model/predstavaOsoba';
import { PredstavaOsobeService } from 'src/app/services/predstava-osobe.service';

@Component({
  selector: 'app-predstava-osobe',
  templateUrl: './predstava-osobe.component.html',
  styleUrls: ['./predstava-osobe.component.css']
})
export class PredstavaOsobeComponent implements OnInit {

    public predstavaOsobe: PredstavaOsoba[];
    public predstavaOsoba: PredstavaOsoba;
    public id?: number;

    constructor (private predstavaOsobeService: PredstavaOsobeService) { }

    ngOnInit() {
      this.predstavaOsobeService.getPredstavaOsobe().subscribe((predstavaOsobe) => {
        this.predstavaOsobe = predstavaOsobe;
      });
      this.predstavaOsobeService.getPredstavaOsobe();
      // this.istorijatService.istorijats.subscribe(data => console.log(data));

    }
  }
