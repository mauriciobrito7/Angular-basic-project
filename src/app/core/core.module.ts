import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { MainContentComponent } from './shell/main-content/main-content.component';
import { SharedModule } from '../shared/shared.module'
const routes: Routes = [
  {
    path:'',
    loadChildren:'./../home/home.module#HomeModule' 
  },
  {
    path:'about',
    loadChildren:'./../about/about.module#AboutModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule
    
  ],
  declarations: [
    ShellComponent, 
    TopBarComponent, 
    MainContentComponent
  ],
  exports:[ShellComponent]
})
export class CoreModule { }
