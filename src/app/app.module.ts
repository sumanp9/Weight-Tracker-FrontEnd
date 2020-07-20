import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { TrackerApplicationComponent } from './tracker-application/tracker-application.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { EnterWeightComponent } from './enter-weight/enter-weight.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { UserweightdataComponent } from './userweightdata/userweightdata.component';
import {MatTableModule} from '@angular/material/table';
import {DatePipe} from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    TrackerApplicationComponent,
    NotFoundComponent,
    SignUpPageComponent,
    HomeComponent,
    ProfileComponent,
    EnterWeightComponent,
    UserweightdataComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatDialogModule,
        MatInputModule,
        FormsModule,
        MatStepperModule,
        MatTooltipModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        MatTableModule,
        MatExpansionModule
    ],
  providers: [MatDatepickerModule, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
