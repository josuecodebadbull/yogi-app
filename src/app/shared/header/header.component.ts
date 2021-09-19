import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor() { }

  public hiddenMenu : boolean;
  public messageService: string;

  ngOnInit(): void {
  }

  showMenu(){
    this.hiddenMenu = !this.hiddenMenu;
  }

}
