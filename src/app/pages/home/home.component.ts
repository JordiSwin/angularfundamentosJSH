import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  //propiedades que son atributos
  nombre:string = "Jordi";
  apellido: string="";
  calificacion: number = 8;
  encendido: boolean=true;

  personas: string[]=["juan","pedro","luisa"];

  constructor(){}

  //metodo que cambia los valores de las propiedades

  cambiarvalores(){
    this.nombre = "Pepe";
    this.calificacion=10;
    this.encendido=false;
  }

  

}
