import { Component } from '@angular/core';
interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] = [
    {
      icon: 'game-controller',
      name: 'Ir a  intro de Rincon Retro',
      redirecTo: '/desc'
    },
    {
      icon: 'game-controller',
      name: 'Ir a Guia de Persona 5',
      redirecTo: '/sk'
    },
    {
      icon: 'game-controller',
      name: 'Ir a Registro',
      redirecTo: '/formulario'
    },
    {
      icon: 'game-controller',
      name: 'Ir a Guia de Mortal Kombat shaolin monks',
      redirecTo: '/motalkombat'
    },
    {
      icon: 'game-controller',
      name: 'Ir a Guia de Mortal Kombat shaolin monks',
      redirecTo: '/mk'
    },
    ]


}
