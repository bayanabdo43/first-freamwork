import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { portfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"portfolio",component:portfolioComponent},
    {path:"contact",component:ContactComponent},
    {path:"**",component:NotfoundComponent}
];
