import { CommonModule } from '@angular/common';
import { Component ,EventEmitter,OnInit, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  @Output() parametrosSeleccionados = new EventEmitter<any>();
  
  categoriaSeleccionada="general";
  paisSeleccionado="br"

  categorias : any[]=[
    {value : 'general',nombre :'general'},
    {value : 'business',nombre :'negocio'},
  ]

  paises : any[]=[
    {value : 'ar',nombre :'argentina'},
    {value : 'br',nombre :'brasil'},
  ]

  constructor(){}

  ngOnInit():void{}

  BuscarNoticia(){
    //console.log(this.categoriaSeleccionada);
    const PARAMETROS ={
      categoria:this.categoriaSeleccionada,
      pais:this.paisSeleccionado
    }

    this.parametrosSeleccionados.emit(PARAMETROS);
  }
}


