import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';

//decerator D P
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[
    NavbarComponent,
    FormsModule 
  ]
})



export class AppComponent {


  text= "";
  title = "بسم الله";
  imgUrl = "./favicon.ico";
  List: string[] = [];
  test(val:string){
    alert(val)
  }

  addItem(){
    console.log("button clicked");
    
    if(this.text.length<3){
      alert("Invalid Text")
    }
    else{
      this.List.push(this.text)
      this.text = "";
    }
  }
  deleteItem(_t16: string) {
    const index = this.List.indexOf(_t16);
    if (index > -1) {
      this.List.splice(index, 1);
    }
  }
  updateItem(_t16: string) {
    const index = this.List.indexOf(_t16);
    if (index > -1) {
      this.text = _t16;
      this.List.splice(index, 1);
      
      this.List[index] = "Updated Item";
      }
      
    }
    editItem(_t16: string) {
      const index = this.List.indexOf(_t16);
      if (index > -1) {
        this.List[index] = "Edited Item";
      }
    }



}


/**
 * 
 * text = '';
  title= "بسم الله"
  imgurl = "./favicon.ico"
  list:string[] = []

  test(val:string){
    alert(val)
  }

  add(){
    console.log("button clicked");
    
    if(this.text.length<3){
      alert("Invalid Text")
    }
    else{
      this.list.push(this.text)
    }
  }
 */