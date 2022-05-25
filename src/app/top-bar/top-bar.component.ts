import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class LinkValue {
  name:string;
  value:string;
  icon:string;
  constructor(name:string, value:string, icon:string) {
    this.name = name;
    this.value = value;
    this.icon = icon;
  }
}

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})


export class TopBarComponent {
  items = this.getMenuItems();
  constructor(private http: HttpClient) {}
  getMenuItems() {
    return this.http.get<{ name: string; checkout_icon: string; feedback_icon: string; links: Array<LinkValue> }[]>(
      '/assets/menu.json'
    );
  }
  toggleDropdown() {
    let dropdown = document.getElementById("myDropdown");
    if (dropdown!=null) {
      dropdown.classList.toggle("show");
    }
    console.warn(dropdown?.classList);
  }


}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/