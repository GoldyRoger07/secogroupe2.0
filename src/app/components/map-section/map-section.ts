import { Component, Input } from '@angular/core';

@Component({
  selector: 'map-section',
  imports: [],
  templateUrl: './map-section.html',
  styleUrl: './map-section.scss'
})
export class MapSection {
  @Input()
  map = "usa"
}
