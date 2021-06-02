import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './pages/card/card.component';
import { RepositoriesComponent } from './pages/repositories/repositories.component';

const routes: Routes = [
  {
    path: '',
    component: CardComponent
  },
  {
    path: 'repositories/:login',
    component: RepositoriesComponent
  },
  {
    path: '**',
    component: CardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
