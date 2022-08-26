import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  backgroundColor = "environment.navBarBackgroundColor";
  constructor() { }

  ngOnInit() {
  }

  onBtn(btn: any) {
    console.log("btn click." + btn.value);
  }

}
