import { Component } from '@angular/core';
import { Header } from '../../header/header';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-about-page',
  imports: [Header,Footer],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss'
})
export class AboutPage {

}
