import { ListItem } from './list-item';

export class List {

    id: number;
    title: string;
    timeStart: Date;
    timeEnd: Date;
    finished: boolean;
    items: ListItem[];

    constructor ( title: string ) {
        this.title = title;

        this.timeStart = new Date();
        this.finished = false;
        this.items = [];

        this.id = new Date().getTime();

    }
}