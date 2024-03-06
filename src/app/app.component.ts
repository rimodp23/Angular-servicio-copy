import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ListadoNoticiasComponent } from './Components/listado-noticias/listado-noticias.component';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoticiasService } from './Servicio/noticias.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    NavbarComponent,
    FormularioComponent, 
    CommonModule, 
    ListadoNoticiasComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularServicio';

  constructor(private _api:NoticiasService) 
  { 
      
  }

  buscarNoticias(parametro:any){
   // console.log(parametro);
  this._api.getNoticias(parametro).subscribe(result=>
    {
      console.log(result)
    }
    )
  }
}
