import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph = "none";
  myLog = [];
  count = 1;
  onDisplay(){
    // if(this.showParagraph === true){
    //   this.showParagraph = false; 
    // }else{
    //   this.showParagraph = true;
    // } 
    if(this.showParagraph === "none"){
      this.showParagraph = "block"; 
    }else{
      this.showParagraph = "none";
    }
    this.myLog.push(this.count);
    this.count++; 
    console.log(this.showParagraph);
    console.log(this.myLog);
  }
  onSetStyle(){
    
  }
}
