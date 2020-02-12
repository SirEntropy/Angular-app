import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  @ViewChild('itemInput', {static: false}) itemInputRef: ElementRef;
  @Output() itemAdded = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const newItem = this.itemInputRef.nativeElement.value;
    this.itemAdded.emit(newItem);
  }

}
