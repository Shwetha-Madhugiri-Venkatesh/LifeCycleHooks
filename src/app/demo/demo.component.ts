import { Component, ContentChild, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges,OnInit,DoCheck{
  normal_var="this is normal variable";
  // @Input() msg="hi";
  @Input() msg:string='';

  @Input() msg1:string='';
  @ViewChild('para') para:ElementRef;
  constructor(){
    console.log("Demo component is executing");
    console.log(this.normal_var);
    console.log(this.msg);
  }
  new_msg="ammu";
  @ContentChild('content') con:ElementRef;
  ngOnChanges(){
    console.log("ngOnchanges hook is called!");
    console.log(this.msg);
    // this.msg=this.new_msg;
    //this is executed before the html is rendered
  }

  ngOnInit(){
    console.log("ngOnInit is called!");
    // console.log(this.con.nativeElement);
  }

  ngDoCheck(){
    console.log("ngDoCheck is called");
    //console.log(this.con.nativeElement.innerHTML);
    if(this.con){
       console.log(this.con.nativeElement.innerHTML);
    }else{
      console.log("not initialized");
    }
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit is called");
    console.log(this.con.nativeElement);
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked is called");
     console.log(this.con.nativeElement.innerHTML);
     console.log(this.para);
  }

  ngAfterViewInit(){
     console.log("ngAfterViewInit is called");
    console.log(this.para.nativeElement);
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked is called");
    console.log(this.para.nativeElement);
  }

  ngOnDestroy(){
   console.log("ngOnDestroy is called");
  }

  childvar:{}={name:"shwetha","marks":100};
  @Output()
  childEvent:EventEmitter<object> = new EventEmitter<object>;

  emit_event(){
    this.childEvent.emit(this.childvar);
  }

}
