import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { StudentCrudComponent } from './views/student-crud/student-crud.component';
import { StudentCreateComponent } from './views/student-crud/student-create/student-create.component';
import { ClassCrudComponent } from './views/class-crud/class-crud.component';
import { ClassCreateComponent } from './views/class-crud/class-create/class-create.component';
import { SearchComponent } from './views/search/search.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'students',
    component: StudentCrudComponent
  },
  {
    path: 'students/create',
    component: StudentCreateComponent
  },
  {
    path: 'classes',
    component: ClassCrudComponent
  },
  {
    path: 'classes/create',
    component: ClassCreateComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
