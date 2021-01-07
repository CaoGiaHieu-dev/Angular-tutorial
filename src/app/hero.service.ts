import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService : MessageService)
  {

  }

  getHeros() :Observable<Hero[]>
  {
    this.messageService.addMessenger('Heros messenger');
    return of(HEROES);
  }
}
