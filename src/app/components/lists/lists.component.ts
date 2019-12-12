import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

import { List } from '../../models/list';
import { ToDosService } from '../../services/to-dos.service';

@Component({
  selector: 'lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

	@ViewChild( IonList , {static:false}) list: IonList;
	@Input() finishedList: boolean;


	constructor(
		public toDosService: ToDosService,
		public alertController: AlertController,

		private route: Router,
	) { }

	ngOnInit() {}

	async editTitleList(list: List) {

		const alert = await this.alertController.create({
			header: 'Editar',
			inputs: [
				{
					name:'titulo',
					type:'text',
					value: list.title,
					placeholder:'Nuevo nombre de la lista'
				}
			],
			buttons: [
				{
					text: 'Cancelar',
					role: 'cancel',
					handler: () => {
						console.log('Cancelar');
						this.list.closeSlidingItems();

					}
				}, 
				{
					text: 'Modificar',
					handler: ( data ) => {
						list.title = data.titulo;
						this.toDosService.saveLocalStorage();
						this.list.closeSlidingItems();
					}
				}
			]
		});
		
		await alert.present();

	}


	deleteList(list: List): void {
		this.toDosService.deleteList(list);
		alert('La lista se borró correctamente')	
	}

	selectedList (list: List) {

		if (this.finishedList) {
			this.route.navigateByUrl(`tabs/tab2/add/${list.id}`);
		} else {
			this.route.navigateByUrl(`tabs/tab1/add/${list.id}`);
		}
	}
}
