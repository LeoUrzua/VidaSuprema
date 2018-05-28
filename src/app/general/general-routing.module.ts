import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailComponent } from '@app/general/article-detail/article-detail.component';

const routes: Routes = [
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   data: {
  //     title: 'Home'
  //   }
  // },
  {
    path: 'i/:id',
    component: ArticleDetailComponent,
    data: {
      title: 'Article detail'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
