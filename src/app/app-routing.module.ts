import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalComponent } from './animal/animal.component';
import { HelloComponent } from './hello.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { ErrorComponent } from './error/error.component';
import { AdminGuard } from './admin.guard';
import { PreloadGuard } from './preload.guard';
const Routes = [
  {
    path: 'animal',
    component: AnimalComponent,
    canActivate: [AdminGuard],
    children: [
      //route for children will be /animal/animalName
      {
        path: ':name',
        component: AnimalDetailComponent,
        resolve: {
          // data property will store an observable and we can access it from ActivatedRoute and subscribe to it in child component
          data: PreloadGuard,
        },
      },
    ],
  },
  {
    path: '',
    component: HelloComponent,
  },
  // Incase of redirect, pathMatch property is required
  {
    path: 'animalss',
    redirectTo: 'animal',
    pathMatch: 'full',
  },
  // Wildcard route should always be the last
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
