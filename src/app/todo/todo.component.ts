import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {
  inputText:any= []
  constructor(public todo : TodoService , private toast : ToastrService) { }

  addList(){
    this.todo.addList(this.inputText)    
    if(this.inputText != ""){
    this.toast.success("Added Successfully")
  }else {
    this.toast.warning('Please Add Something')

  }
  this.inputText =""


}
}
