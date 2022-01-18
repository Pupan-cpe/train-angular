import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  windowInnerWidth: any;
  menuCollapsed: boolean;
  subMenuOpened: boolean;
  subMenuSelected: boolean;
  isCollapsed = false;


  constructor() {

    this.menuCollapsed = true;
    this.subMenuOpened = false;
    this.subMenuSelected = false;
    
   }

   ngOnInit(): void {
    this.windowInnerWidth = window.innerWidth;

    if (this.windowInnerWidth < 576) {
      this.menuCollapsed = true;
      console.log('mobile');

    } else {
      this.menuCollapsed = false;
      console.log('pc');


    }
    this.subMenuOpened = false;
  }
  @HostListener('window:resize', ['$event'])
  onResize = (): void => {
    this.windowInnerWidth = window.innerWidth;
    if (this.windowInnerWidth < 576) {
      this.menuCollapsed = true;
      console.log('mobile');

    }
  };
  forceDeselectSubMenu = (): void => {
    this.subMenuSelected = true;
    setTimeout(() => {
      this.subMenuSelected = false;
    }, 0);
  };
}
