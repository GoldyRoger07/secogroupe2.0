import { Component } from '@angular/core';
import { Footer } from '../../footer/footer';
import { Header } from '../../header/header';

@Component({
  selector: 'app-contact-page',
  imports: [Footer,Header],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss'
})
export class ContactPage {

}
