import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ValuesComponent } from './values/values.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './_services/users.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvide } from './_interceptions/ErrorInterceptor';
import { SnackbarGlobalErrorComponent } from './snackbar-global-error/snackbar-global-error.component';
import { SnackbarGlobalErrorService } from './_services/snackbar-global-error.service';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';

@NgModule({
   declarations: [
      AppComponent,
      ValuesComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      SnackbarGlobalErrorComponent,
      MemberListComponent,
      MessagesComponent,
      ListsComponent
   ],
   imports: [
      FormsModule,
      BrowserModule,
      ReactiveFormsModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
      MaterialModule,
      FlexLayoutModule
   ],
   providers: [
      UsersService,
      SnackbarGlobalErrorService,
      ErrorInterceptorProvide,
      AuthGuard
   ],
   entryComponents: [
      SnackbarGlobalErrorComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
