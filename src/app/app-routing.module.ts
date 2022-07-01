import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeWithBackupComponent } from './home-with-backup/home-with-backup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'withBackUp', component: HomeWithBackupComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
