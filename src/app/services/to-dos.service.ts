import { Injectable } from '@angular/core';
import { List } from '../models/list';

@Injectable({
    providedIn: 'root'
})

export class ToDosService {

	lists: List[] = [];

	constructor() { 
		this.loadLocalStorage();

	}
	
	createList( titulo: string): number {
		const newList = new List(titulo);
		this.lists.push(newList);
		this.saveLocalStorage();

		return newList.id
	}

	deleteList( list: List) : void {
		this.lists = this.lists.filter( listItem => listItem.id !== list.id);
		this.saveLocalStorage();
	}

	getList( id: number | string): List {
		//Forzar que el id sea un número
		id = Number(id);
		return this.lists.find( list => list.id === id)
	}
	
	saveLocalStorage(): void {
		localStorage.setItem('data', JSON.stringify(this.lists));
	}

	loadLocalStorage(): void {

		if ( localStorage.getItem('data')) {
			this.lists = JSON.parse( localStorage.getItem('data') );
		} else {
			this.lists = [];
		}
	}
}
                 