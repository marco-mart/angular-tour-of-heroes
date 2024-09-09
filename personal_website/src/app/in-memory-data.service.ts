import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Hero } from './heroes/hero';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    const heroes = [
      {id: 12, name: "Dr. Boombastic"},
      {id: 13, name: "Bruh-man"},
      {id: 14, name: "Terrence the Executioner"},
      {id: 15, name: "Lampley-man"},
      {id: 16, name: "Hoo-Hah"},
      {id: 17, name: "Quesadilla-man"},
      {id: 18, name: "Foo-man"},
      {id: 19, name: "Fine-dining-and-breathing-man"},
    ];

    return {heroes};
  }

  /**
   * Overrides the genId method to ensure that a hero always has an id.
   * If the heroes array is empty,2
   * the method below return the initial number (11).
   * If the heroes array is not empty, the method below returns the highest
   * hero id + 1.
   */
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id as number)) + 1 : 11;
  }
  
}
