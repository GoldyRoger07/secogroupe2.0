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
  title1 = "Title 1"

  @Input()
  title2 = "Title 2"

  @Input()
  cover = ""
}
