import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeadComponent } from './head/head.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    HeadComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
  ],
  exports: [
    PageNotFoundComponent,
    HeadComponent,
    TaskComponent
  ]
})
export class SharedModule { }
