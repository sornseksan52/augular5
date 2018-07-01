import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
//ประกาศตัวแปร 
itemCount : number  = 4;
addItem : string = 'เพิ่มรายการ';
listText:string = 'รายการเริ่มต้น'; //twoway binding model
allList = [];
  constructor() { }
//หน้า page โหลดมาครั้งแรก 
  ngOnInit() {
    this.itemCount = this.allList.length ;
  }

  additem(){
    if(this.listText != ''){

      this.allList.push(this.listText);
      this.listText = '';
      this.itemCount = this.allList.length ;
    }else{
      alert('กรอกน่ะขอร้อง');
    }
    //clear
  }

}
