import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ListsComponent } from './lists/lists.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
	declarations: [
		ListsComponent
	],	
	imports: [
		CommonModule,
		IonicModule,
		PipesModule
	], 
	exports: [
		ListsComponent
	]
})

export class ComponentsModule { }
