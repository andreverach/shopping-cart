import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//router-outlet
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    NavbarComponent,
    LayoutComponent    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    LayoutComponent    
  ]
})
export class SharedModule { }
