import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { ContactPage } from './components/pages/contact-page/contact-page';
import { AboutPage } from './components/pages/about-page/about-page';

export const routes: Routes = [
    {component: Home, path: '' },
    {component: ContactPage, path: 'contact'},
    {component: AboutPage, path: 'a-propos'}
];
