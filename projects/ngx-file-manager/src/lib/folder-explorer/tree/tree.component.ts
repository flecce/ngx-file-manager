import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { zip } from 'rxjs';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  @Input() parentId: string;
  @Input() dataList: any[];

  @Output('select') selectChange = new EventEmitter<any>();

  selected: any;
  hasAnotherDropZoneOver: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  test(item) {
    debugger;
    this.dataList.forEach(x => {
      if (item.id !== x.id)
        x.selected = false;
    })
  }

  createUploader(): FileUploader {
    return new FileUploader({
      url: URL,
      disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
      formatDataFunctionIsAsync: true,
      formatDataFunction: async (item) => {
        return new Promise((resolve, reject) => {
          resolve({
            name: item._file.name,
            length: item._file.size,
            contentType: item._file.type,
            date: new Date()
          });
        });
      }
    });
  }

  removeCurrentLevelItems(datalist, parentId): any[] {
    return datalist.filter(item => item.parent != parentId);
  }

  expand(event, item): void {
    item.closed = !item.closed;
    event.stopPropagation();
  }

  hasChildren(item): boolean {
    return this.dataList.find(x => x.parent === item.id);
  }

  fileOver(event: any, item: any): void {
    item.hasAnotherDropZoneOver = event;
  }

  select(event, item): void {
    item.selected = !item.selected;
    this.selectChange.emit(item);

    event.stopPropagation();
  }

}
