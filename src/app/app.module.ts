import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeWithBackupComponent } from './home-with-backup/home-with-backup.component';
import { HttpClientModule } from '@angular/common/http';
import { BackupService } from './backup.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeWithBackupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    BackupService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
