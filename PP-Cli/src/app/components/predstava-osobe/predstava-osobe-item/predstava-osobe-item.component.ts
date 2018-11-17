import { Predstava } from "src/app/model/predstava";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Input } from "@angular/core";
import { PredstavaOsoba } from "src/app/model/predstavaOsoba";
import { PredstavaOsobeService } from "src/app/services/predstava-osobe.service";

import { Slike } from "src/app/model/slike";
import { SlikeService } from "src/app/services/slike.service";
import { ActivatedRoute } from "@angular/router";

import { timer } from "rxjs/observable/timer";

@Component({
  selector: "app-predstava-osobe-item",
  templateUrl: "./predstava-osobe-item.component.html",
  styleUrls: ["./predstava-osobe-item.component.css"]
})
export class PredstavaOsobeItemComponent implements OnInit {
  public predstavaOsobe: any;

  public osoba: PredstavaOsoba;
  public id: number;
  public isDataAvailable: boolean;

  //slike
  public slike: Slike[];
  public trazeneSlike: Slike[] = new Array();
  public slikaUnizu: number;
  public slika: Slike;
  public brojSlike: number;

  public proba: any;

  @ViewChild("panel", { read: ElementRef }) public panel;
  @ViewChild("right", { read: ElementRef }) public right;

  constructor(
    private slikeService: SlikeService,
    private predstavaOsobeItemService: PredstavaOsobeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadPhotos();
    this.brojSlike = 0;
  }

  loadData() {
    this.route.params.subscribe(params => {
      this.isDataAvailable = false;
      this.id = +params["id"];

      this.predstavaOsobeItemService
        .getPredstavaOsobeId(this.id)
        .subscribe(data => {
          this.predstavaOsobe = data;
          this.slike = this.slike.filter(
            s => s.namena === this.predstavaOsobe[0].predstava.naslov
          );
          // tslint:disable-next-line:no-unused-expression
          this.isDataAvailable;
        });
    });
  }

  loadPhotos() {
    this.slikeService.getSlika(0, 20000).subscribe(data => {
      this.slike = data.body;
      this.loadData();
    });
  }

  provera(x, y) {
    if (x == y) {
      this.brojSlike = this.brojSlike + 1;
      if (this.brojSlike < 5) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  scroll(el) {
    el.scrollIntoView();
    console.log(el);
  }

  public spustanje(): void {
    this.proba = setInterval(() => {
      this.panel.nativeElement.scrollTop += 10;
    }, 50);
  }

  public podizanje(): void {
    this.proba = setInterval(() => {
      this.panel.nativeElement.scrollTop -= 10;
    }, 50);
  }

  public zaustavljanje() {
    clearInterval(this.proba);
  }
  
  public spustanjeRight(): void {
    this.proba = setInterval(() => {
      this.right.nativeElement.scrollTop += 10;
    }, 50);
  }

  public podizanjeRight(): void {
    this.proba = setInterval(() => {
      this.right.nativeElement.scrollTop -= 10;
    }, 50);
  }

  public zaustavljanjeRight() {
    clearInterval(this.proba);
  }
  

  

  public goYouTube(link) {
    window.open(link)
  }

  // izvlaci kategoriju iz opisa - potrebno je da opis u svom sadrzaju ima podeljen sadrzaj sa * primer: komedija*Ovo je predstava o tome i tome...
  public tekst(s?: string) {
    const array = s.split("*");
    return array[1];
  }

  public rezija(s?: string) {
    const array = s.split("*");
    return array[2];
  }
}
