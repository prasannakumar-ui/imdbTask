import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';

// const routes: Routes = [];
const routes:Routes=[{path:'',redirectTo:'page',pathMatch:'full'},
{path:'page',component:PageComponent}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
