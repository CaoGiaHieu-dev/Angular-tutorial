import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import{ HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

//   hero  = HEROES;
//
  selectedHero : Hero;
  constructor(private heroService : HeroService , private messageService : MessageService)
  {
    this.getHeroes();
  }
  heroes: Hero[];
  getHeroes() : void
  {
    this.heroService.getHeros().subscribe(values => this.heroes = values);
  }

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void
  {
    this.selectedHero = hero;
    this.messageService.addMessenger(this.selectedHero.name);
  }
}
