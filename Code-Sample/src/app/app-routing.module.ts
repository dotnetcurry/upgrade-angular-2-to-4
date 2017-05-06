import { NgModule } from '@angular/core';
import { DinoListComponent } from './dino-list/dino-list.component';
import { BasicComponent } from './basic/basic.component';
import { RandomDinoComponent } from './random-dino/random-dino.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: DinoListComponent,
    children: []
  },
  {
    path: 'basic',
    component: BasicComponent,
    children: []
  },
  {
    path: 'random',
    component: RandomDinoComponent,
    children: []
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
