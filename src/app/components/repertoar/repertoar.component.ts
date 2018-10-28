import { Component, OnInit } from '@angular/core';
import { Repertoar } from 'src/app/model/repertoar';
import { RepertoarService } from 'src/app/services/repertoar.service';

@Component({
  selector: 'app-repertoar',
  templateUrl: './repertoar.component.html',
  styleUrls: ['./repertoar.component.css']
})
export class RepertoarComponent implements OnInit {

  public repertoars: Repertoar[];
  public repertoar: Repertoar;
  public id?: number;

  constructor (private repertoarService: RepertoarService) { }

  ngOnInit() {
    this.repertoarService.getRepertoar().subscribe((repertoars) => {
      this.repertoars = repertoars;
    });
    this.repertoarService.getRepertoar();
    // this.istorijatService.istorijats.subscribe(data => console.log(data));

  }

  // izvlaci kategoriju iz opisa - potrebno je da opis u svom sadrzaju ima podeljen sadrzaj sa * primer: komedija*Ovo je predstava o tome i tome...
  public kategorija(s?: string) {
   let array = s.split("*");
   return array[0];
  }

}
