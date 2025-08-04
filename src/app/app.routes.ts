import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { ContactPage } from './components/pages/contact-page/contact-page';
import { AboutPage } from './components/pages/about-page/about-page';
import { Portail } from './components/pages/portail/portail';
import { FilialePage } from './components/pages/filiale-page/filiale-page';

export const routes: Routes = [
    {component: Portail, path: '' },
    {component: ContactPage, path: 'contact'},
    {component: AboutPage, path: 'a-propos'},
    {component: Home, path: 'filiales/:pays'},
    {component: FilialePage, path: 'filiales/:pays/:filiale'}
];
