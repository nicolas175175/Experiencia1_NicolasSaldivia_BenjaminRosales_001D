import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes : Componente[] = [
{
  icon: 'game-controller',
  name: 'Ir a intro de Rincon Retro',
  redirecTo: '/desc'
},
{
  icon: 'game-controller',
  name: 'Ir a guia de Persona 5',
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
  redirecTo: '/mortalkombat'
},
{
  icon: 'game-controller',
  name: 'Ir a Guia de Mundos y bosses de Mortal Kombat',
  redirecTo: '/mk'
},
]
  constructor(private menuController:MenuController) { }
  ngOnInit() {
  }
    mostrarMenu(){
      this.menuController.open('first');
  
    }
}
