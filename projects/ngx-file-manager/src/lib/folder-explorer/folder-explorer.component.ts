import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { TreeService } from './tree.service';
import { FolderItem } from '../models/folder-item.model';

@Component({
  selector: 'folder-explorer',
  templateUrl: './folder-explorer.component.html',
  styleUrls: ['./folder-explorer.component.css']
})
export class FolderExplorerComponent implements OnInit {
  @Input() folders: FolderItem[];
  @Input() uploadUrl: string;
  @Output() onFolderSelect: EventEmitter<string> = new EventEmitter<string>();

  uploader: FileUploader;
  hasAnotherDropZoneOver: boolean;

  constructor(private treeService: TreeService) {
    treeService.select$.subscribe(folderId => {
      this.onFolderSelect.emit(folderId);
    });
  }

  ngOnInit() {
    this.initUploader();
  }

  fileOver(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  private initUploader(): void {
    this.uploader = new FileUploader({
      url: this.uploadUrl,
      autoUpload: true
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
}
