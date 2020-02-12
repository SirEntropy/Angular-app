import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  @ViewChild ('toSearch') toSearch: ElementRef;
  public items: string[] = ['New Task'];
  target: string;
  found = false;
  result: string;

  constructor() { }

  ngOnInit(): void {
  }

  onItemAdded(item: string) {
    this.items.push(item);
  }

  onRemoveItem(item: string) {
    delete this.items[this.items.indexOf(item)];
  }

  onSearch() {
    this.target = this.toSearch.nativeElement.value;
    for (const item of this.items) {
      if (item.includes(this.target)) {
        this.found = true;
        this.result = item;
        if (item === this.target) {
          this.result = item;
          break;
        }
      }
    }
  }


}
