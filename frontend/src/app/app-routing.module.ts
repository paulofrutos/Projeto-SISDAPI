import { StudentDeleteComponent } from './views/student-crud/student-delete/student-delete.component';
import { ClassDeleteComponent } from './views/class-crud/class-delete/class-delete.component';
import { ClassUpdateComponent } from './views/class-crud/class-update/class-update.component';
import { StudentUpdateComponent } from './views/student-crud/student-update/student-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { StudentCrudComponent } from './views/student-crud/student-crud.component';
import { StudentCreateComponent } from './views/student-crud/student-create/student-create.component';
import { StudentReadComponent } from './views/student-crud/student-read/student-read.component';
import { ClassCrudComponent } from './views/class-crud/class-crud.component';
import { ClassCreateComponent } from './views/class-crud/class-create/class-create.component';
import { ClassReadComponent } from './views/class-crud/class-read/class-read.component';
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
    path: 'students/read',
    component: StudentReadComponent
  },
  {
    path: 'students/update/:id',
    component: StudentUpdateComponent
  },
  {
    path: 'students/delete/:id',
    component: StudentDeleteComponent
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
    path: 'classes/read',
    component: ClassReadComponent
  },
  {
    path: 'classes/update/:id',
    component: ClassUpdateComponent
  },
  {
    path: 'classes/delete/:id',
    component: ClassDeleteComponent
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
