import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Pokemones } from './../../clases/pokemon';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  pokemones = [];
  hidden = false;
  constructor(private http : HttpService) { }

  ngOnInit(): void {
    this.http.GetListado().subscribe((aux)=>{
      let i = 1;
      console.log(aux);
      aux.results.forEach(element => {

        this.pokemones.push(new Pokemones(element, i));
        i++;
      });
      this.hidden = true;
    })
  }

  
}
