import { Component, Input } from '@angular/core';

@Component({
    selector: 'foto-app',
    templateUrl: './foto.component.html'
})

export class FotoComponent{
  @Input() url:string;
  @Input() title:String;
  @Input() descricao:string;
  @Input() vrdd = 'checked';
}