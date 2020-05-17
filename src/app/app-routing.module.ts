import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { AboutComponent } from './about/about.component';
import { MusicCardComponent } from './music-card/music-card.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BrowserModule } from '@angular/platform-browser';
import { ChildComponent } from './child/child.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
    {
        path: 'test',
        component: SampleComponent
    }, {
        path: 'list/:id',
        component: AboutComponent,
        children: [
            {
                path: 'child',
                component: ChildComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'lazy',
        loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
    },
    {
        path: '**',
        component: PagenotfoundComponent
    }
];

@NgModule({
    declarations: [AboutComponent, SampleComponent, MusicCardComponent, PagenotfoundComponent, ChildComponent, LoginComponent],
    imports: [RouterModule.forRoot(routes), BrowserModule, ReactiveFormsModule],
    exports: [RouterModule, AboutComponent, SampleComponent, MusicCardComponent, PagenotfoundComponent, ChildComponent, LoginComponent]
})
export class AppRoutingModule { }
