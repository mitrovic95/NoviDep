import { Component, OnInit } from '@angular/core';
import { Slike } from 'src/app/model/slike';
import { SlikeService } from 'src/app/services/slike.service';

@Component({
  selector: 'app-slike',
  templateUrl: './slike.component.html',
  styleUrls: ['./slike.component.css']
})
export class SlikeComponent implements OnInit {

  public slike: Slike[];
  public slika: Slike;
  public id?: number;

  constructor (private slikeService: SlikeService) { }

  ngOnInit() {
    this.slikeService.getSlike().subscribe((slike) => {
      this.slike = slike;
    });
    this.slikeService.getSlike();
    this.slikeService.slike.subscribe(data => console.log(data));

  }

}
