import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent {

  get historial(): string[] {
    return this.gifsService.historial;
  }

  constructor( private gifsService: GifsService ) { }

  buscar(termino: string) {
    this.gifsService.buscarGifs(termino);
  }

}
