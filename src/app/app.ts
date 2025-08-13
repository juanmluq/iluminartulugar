import { Component, computed, inject, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiceElectric } from './services/service-electric';
import { Data } from './models';
import { HydrateComponent } from './hydrate-component/hydrate-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HydrateComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'WebElectric';
  dataService = inject(ServiceElectric);

  datas: Signal<Data[] | undefined > = computed(()=>
  this.dataService.getFormattedDatas(),)
}
