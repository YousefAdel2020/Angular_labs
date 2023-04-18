import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderComponent } from './components/slider/slider.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentsComponent } from './components/students/students.component';
import { RegistrationComponent } from './components/lab4/registration/registration.component';
import { StudentDetailsComponent } from './components/lab4/student-details/student-details.component';
import { ErrorComponent } from './components/lab4/error/error.component';
import { AllStudentsComponent } from './components/lab4/all-students/all-students.component';
import { HeaderComponent } from './components/lab4/header/header.component';
import { FooterComponent } from './components/lab4/footer/footer.component';
import { RouterModule,Routes } from '@angular/router';


let routes:Routes=[

    {path:"register",component: RegistrationComponent},
    {path:"students",component: AllStudentsComponent},
    {path:"students/:id",component: StudentDetailsComponent},
    {path:"**",component: ErrorComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SliderComponent,
    RegisterComponent,
    StudentsComponent,
    RegistrationComponent,
    StudentDetailsComponent,
    ErrorComponent,
    AllStudentsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,

    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
