import { Injectable } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { Todo } from './model/Todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList:Todo[]=[]
  constructor() { }
  addList(title:any){
    let id = this.todoList.length + 2
    const item: Todo = {
      id: id,
      isCompleted: false,
      isFavorite: false,
      date: new Date(),
      title: title,
      isEdit : false,
      inputTexts : true
    }
    if(title != "" && title != null){
    this.todoList.push(item)
    console.log(this.todoList);}
    
  }
  deleteLi(id:any){
   console.log(id);
   this.todoList.splice(id,1)
   
  }
  saveEdit(todoE:Todo , i :number){
    console.log(todoE);
    
   
  }
}
