import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-category',
  templateUrl: './card-category.component.html',
  styleUrls: ['./card-category.component.scss']
})
export class CardCategoryComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
