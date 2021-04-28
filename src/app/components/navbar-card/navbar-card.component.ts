import { Component,EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'navbar-card',
  templateUrl: './navbar-card.component.html',
  styleUrls: ['./navbar-card.component.scss']
})
export class NavbarCardComponent implements OnInit {
@Input() dataGet: any;
@Output() onChanged = new EventEmitter<boolean>();
  constructor(
    ) { }

  showInfo(data: any){
    // this.onChanged.emit(data);
  }

  ngOnInit() {
  }

}
