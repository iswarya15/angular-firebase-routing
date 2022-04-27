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
          data: PreloadGuard,
        },
      },
    ],
  },
  {
    path: '',
    component: HelloComponent,
  },
  {
    path: 'animalss',
    redirectTo: 'animal',
    pathMatch: 'full',
  },
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
