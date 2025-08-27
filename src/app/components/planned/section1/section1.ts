import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section1',
  imports: [],
  templateUrl: './section1.html',
  styleUrl: './section1.scss'
})
export class Section1 {
    @Input()
    version = 1
}
