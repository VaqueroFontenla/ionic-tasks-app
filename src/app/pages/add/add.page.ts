import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ToDosService } from '../../services/to-dos.service';
import { List } from '../../models/list';
import { ListItem } from '../../models/list-item';

@Component({
	selector: 'app-add',
	templateUrl: './add.page.html',
	styleUrls: ['./add.page.scss'],
})
export class AddPage  {

	list: List;
	item: string;

	constructor(
		private toDosService: ToDosService,
		private route: ActivatedRoute,
	) { 
		this.getList();
	}

	addItem() {
		if ( this.item.length === 0) {
			return;
		}

		const newItem = new ListItem(this.item);
		this.list.items.push(newItem);
		this.item = '';
		this.toDosService.saveLocalStorage();
	}

	deleteTask(i: number) {
		this.list.items.splice(i,1);
		this.toDosService.saveLocalStorage();
	}

	updateCompleted(item: ListItem) {
		const unfinishedTasks = this.list.items.filter( item => !item.completed).length;
		if ( unfinishedTasks === 0 ) {
			this.list.timeEnd = new Date();
			this.list.finished = true
		} else {
			this.list.timeEnd = null;
			this.list.finished = false;
		}

		this.toDosService.saveLocalStorage();
	}

	private getList() {
		const id = this.route.snapshot.paramMap.get('idList');
		this.list = this.toDosService.getList(id);
	}

}
