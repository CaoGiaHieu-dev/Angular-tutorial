import { Hero } from './../hero';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-detal',
  templateUrl: './hero-detal.component.html',
  styleUrls: ['./hero-detal.component.css']
})
export class HeroDetalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() hero :Hero;
}
