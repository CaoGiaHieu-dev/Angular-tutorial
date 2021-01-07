import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messenger: String[] =[];
  constructor()
  {

  }

  addMessenger(messenger:string) : void
  {
    this.messenger.push(messenger);
  }
  clearMessenger()
  {
    this.messenger =[];
  }
}
