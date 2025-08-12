import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.html',
  styleUrl: './banner.scss'
})
export class Banner {
  @Input()
  imgUrl = "url(/images/portailBG.jpg), url(/secogroupe2.0/images/portailBG.jpg)"
}
