import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'card-category',
  templateUrl: './card-category.component.html',
  styleUrls: ['./card-category.component.scss']
})
export class CardCategoryComponent implements OnInit {
  @Input() data: any;
  constructor(  
     private router: Router
    ) { }

  showInfo(data: any){
    // this.onChanged.emit(data);
    this.router.navigate(['catalog', data]);
  }

  ngOnInit() {
  }

}
