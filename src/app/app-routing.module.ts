import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './sample/sample.component';


const routes: Routes = [{
  path: 'test',
  component: SampleComponent
}, {
  path:'',
  pathMatch: 'full',
  redirectTo: 'test'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
