import { Component,Input,  OnInit } from '@angular/core';

@Component({
  selector: 'children-category-link',
  templateUrl: './children-category-link.component.html',
  styleUrls: ['./children-category-link.component.scss']
})
export class ChildrenCategoryLinkComponent implements OnInit {
@Input() dataGet: any;
  constructor() { }

  ngOnInit() {
  }

}
