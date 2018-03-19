import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccordianComponent } from './accordian/accordian.component';
import { StudentComponent } from './student/student.component';
import { StudentService } from './student/student.service';
import { HttpClientModule } from '@angular/common/http';
import { GlobalErrorHandler } from './common/error-handler';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccordianComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    StudentService,
    {
      provide: ErrorHandler, 
      useClass: GlobalErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
