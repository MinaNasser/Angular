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
  text = '';
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


}
