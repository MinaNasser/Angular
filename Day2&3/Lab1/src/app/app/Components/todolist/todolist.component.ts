import { Component } from '@angular/core';
import { IToDoItem } from '../../../Models/todo';


//decerator D P
@Component({
  selector: 'app-root',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
  standalone: false,
})



export class todolistComponent {
  text = '';
  title= "بسم الله"
  imgurl = "./favicon.ico"
  list:IToDoItem[] = []

  test(val:string){
    alert(val)
  }

  add(){
    console.log("button clicked");
    
    if(this.text.length<3){
      alert("Invalid Text")
    }
    else{
      this.list.push({
        id:this.list.length+1,
        text: this.text,
        isDone:false
      })
    }

    console.log(this.list);
    
  }

  change(id:number){
    this.list.forEach(item=>{
      if(item.id == id){
        item.isDone = !item.isDone
      }
    })
  }


}
