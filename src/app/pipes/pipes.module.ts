import { NgModule } from '@angular/core';
import { FinishedFilterPipe } from './finished-filter.pipe';
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
      FinishedFilterPipe
    ],
  imports: [
	CommonModule
  ],
  exports: [
	FinishedFilterPipe
  ]
})
export class PipesModule { }
