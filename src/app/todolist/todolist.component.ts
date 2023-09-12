import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../model/Todo';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  constructor(public todos : TodoService,private toast : ToastrService) { }
  showSave:boolean=false;
  toggleInputFirld = true;
  inputListText:any

  onChange(todo:Todo){
    todo.isCompleted = !todo.isCompleted;
    if(todo.isCompleted){
      todo.isCompleted ? this.toast.success('Task Completed') : "";
  }}
  isFavorite(){

  }
  deleteTodo(todo:any){
    this.todos.deleteLi(todo)    
    

  }
  toggle(todo:Todo){
    
    if (todo.isCompleted) {
      return 'bg-success';
    } else {
      return '';
    }
  }
  editTodo(i:number ,todoE :Todo){
    console.log(i);
    todoE.isEdit =! todoE.isEdit
    todoE.inputTexts = ! todoE.inputTexts
    

  }
  SaveTodo(i:number ,todoS:Todo){
    todoS.isEdit =! todoS.isEdit
    todoS.inputTexts = ! todoS.inputTexts;
    this.todos.saveEdit(todoS,i)
}
}