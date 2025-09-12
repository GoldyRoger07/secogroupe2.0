import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { ContactPage } from './components/pages/contact-page/contact-page';
import { AboutPage } from './components/pages/about-page/about-page';
import { Portail } from './components/pages/portail/portail';
import { FilialePage } from './components/pages/filiale-page/filiale-page';
import { JoinPage } from './components/pages/join-page/join-page';
import { ServiceDetails } from './components/pages/service-details/service-details';

export const routes: Routes = [
    {component: Portail, path: '' },
    {component: ContactPage, path: 'contact'},
    {component: AboutPage, path: 'a-propos'},
    {component: JoinPage, path: 'join-us'},
    {component: Home, path: 'filiales/:pays'},
    {component: FilialePage, path: 'filiales/:pays/:filiale'},
    {component: ServiceDetails, path: 'filiales/:pays/:filiale/:service'}
];
