import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Subscription } from 'rxjs';
import { TreeService } from '../tree.service';

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit, OnDestroy {
  @Input() parentId: string;
  @Input() dataList: any[];
  @Input() uploadUrl: string;

  uploaders: FileUploader[] = [];

  subscription: Subscription;
  selected: any;
  hasAnotherDropZoneOver: boolean;

  constructor(
    private treeService: TreeService) {
    this.subscription = treeService.select$.subscribe(msg => {
      this.dataList.forEach(x => {
        if (msg.node.item.id !== x.id) {
          x.selected = false;
        }
      });
    });
  }

  ngOnInit() {
    for (const item of this.dataList) {
      item.uploader = new FileUploader({
        url: this.uploadUrl,
        autoUpload: true
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  createUploader(): FileUploader {
    return new FileUploader({
      url: this.uploadUrl,
      autoUpload: true,
      // disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
      // formatDataFunctionIsAsync: true,
      // formatDataFunction: async (item) => {
      //   return new Promise((resolve, reject) => {
      //     resolve({
      //       name: item._file.name,
      //       length: item._file.size,
      //       contentType: item._file.type,
      //       date: new Date()
      //     });
      //   });
      // }
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

  select(event, item): void {
    item.selected = !item.selected;
    this.treeService.select({ item });

    event.stopPropagation();
  }

  fileOver(event: any, item: any): void {
    item.hasAnotherDropZoneOver = event;
  }

}
