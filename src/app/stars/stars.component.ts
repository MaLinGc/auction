import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  stars: boolean[];

  //只有当属性 rating 输出属性 ratingChange 才能使用双向绑定语法 [(ratingChange)]
  @Input()
  rating: number = 0;

  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter();

  @Input()
  readonly: boolean = true;

  constructor() {
  }

  ngOnInit() {

  }

  //输入属性改变是触发
  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

  clickStar(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }

}
