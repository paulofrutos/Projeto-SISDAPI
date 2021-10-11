import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { StudentCrudComponent } from './views/student-crud/student-crud.component';
import { StudentCreateComponent } from './views/student-crud/student-create/student-create.component';
import { ClassCrudComponent } from './views/class-crud/class-crud.component';
import { ClassCreateComponent } from './views/class-crud/class-create/class-create.component';
import { SearchComponent } from './views/search/search.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http';

import { CrudService } from 'src/app/services/crud.service';

@NgModule({
  
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    StudentCrudComponent,
    StudentCreateComponent,
    ClassCrudComponent,
    ClassCreateComponent,
    SearchComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // ==================== Material Design Module ==================== //
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,

    // ==================== Http Client Module ==================== //
    HttpClientModule

  ],

  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
