import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LifeCycleHooks';
  inputMsg:string='';

  inputMsg1:string='';

  normal:string='Bleven';
  Destroy:boolean=true;
  constructor(){
    console.log("App Component is executing!");
  }

  assignInputMsg(inpEl:HTMLInputElement){
    this.inputMsg=inpEl.value;
  }
   assignInputMsg1(inpEl:HTMLInputElement){
    this.inputMsg1=inpEl.value;
  }

  focus(){
    console.log("hi");
    this.fuc();
  }

  fuc(){
    this.normal="Nick";
  }
  ngAfterViewInit(){
    console.log("AppComponent hook");
  }

  DestroyComp(){
    this.Destroy=!this.Destroy;
  }
}
