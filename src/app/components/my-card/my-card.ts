import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-card',
  imports: [],
  templateUrl: './my-card.html',
  styleUrl: './my-card.scss',
})
export class MyCard {

  @Input()
  version = 1

  @Input()
  title1 = "Seco Agro Industries"

  @Input()
  title2 = "Seco Groupe"

  @Input()
  cover = ""
}
