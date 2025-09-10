import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slogan',
  imports: [],
  templateUrl: './slogan.html',
  styleUrl: './slogan.scss'
})
export class Slogan {
  @Input()
  text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni inventore nobis dolorum deleniti laboriosam quisquam magnam maiores illum unde aspernatur sapiente enim iure pariatur, itaque, ad dolor aut id est?"
}
