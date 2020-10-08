import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data } from '@angular/router';
import { Pokemones } from 'src/app/clases/pokemon';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.scss']
})
export class PokemonesComponent implements OnInit {
  @Input() results = [];
  @Input() count = 0;
  @Input() next = '';
  @Input() previous = '';
  @Input() pokemones: Pokemones[] = [];
  @Output() pokeSeleccionado: EventEmitter<Pokemones> = new EventEmitter();

  constructor(private http : HttpService) { }

  ngOnInit(): void {
  }

  verDetallePokemon(pokemon: Pokemones) {
    this.pokeSeleccionado.emit(pokemon);
  }

}
