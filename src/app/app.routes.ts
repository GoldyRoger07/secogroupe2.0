import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { ContactPage } from './components/pages/contact-page/contact-page';
import { AboutPage } from './components/pages/about-page/about-page';
import { Filiale } from './models/Filiale';
import { Portail } from './components/pages/portail/portail';

export const routes: Routes = [
    {component: Portail, path: '' },
    {component: ContactPage, path: 'contact'},
    {component: AboutPage, path: 'a-propos'},
    {component: Home, path: 'filiales/:pays'},
    {component: Filiale, path: 'filiale/:pays/:id'}
];
