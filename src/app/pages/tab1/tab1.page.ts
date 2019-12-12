import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { ToDosService } from '../../services/to-dos.service';
import { List } from '../../models/list';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

	lists : List[];

  	constructor(
		private toDosService: ToDosService,
		private route: Router,
		public alertController: AlertController

	) {

	}

	async addList() {

		
		const alert = await this.alertController.create({
			header: 'Nueva lista',
			inputs: [
				{
					name:'titulo',
					type:'text',
					placeholder:'Nombre de la lista'
				}
			],
			buttons: [
				{
					text: 'Cancelar',
					role: 'cancel',
					handler: () => {
						console.log('Cancelar');
					}
				}, 
				{
					text: 'Crear',
					handler: ( data ) => {
						
						if( data.titulo === 0 ) {
							return;
						}

						const idList= this.toDosService.createList( data.titulo );
						this.route.navigateByUrl(`tabs/tab1/add/${idList}`);

					}
				}
			]
		});
		
		await alert.present();

	}

}
