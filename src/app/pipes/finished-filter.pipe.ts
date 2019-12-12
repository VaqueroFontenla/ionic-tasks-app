import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list';

@Pipe({
  name: 'finishedFilter',
  pure: false
})
export class FinishedFilterPipe implements PipeTransform {

  transform(lists: List[], finished:boolean): List[] {

	return lists = lists.filter(list => list.finished);
	
  }

}
