import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFolder } from '../models/folder.model';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'folder-explorer',
  templateUrl: './folder-explorer.component.html',
  styleUrls: ['./folder-explorer.component.css']
})
export class FolderExplorerComponent implements OnInit {
  @Input() folders: IFolder[];
  @Input() uploadUrl: string;

  uploader: FileUploader;
  hasAnotherDropZoneOver: boolean;

  constructor() {
  }

  ngOnInit() {
    this.initUploader();
  }

  fileOver(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  onFileDrop(e: any) {
    this.uploader.uploadAll();
  }

  onFileSelected(e: any) {
    console.log(e);
    //item.upload()
  }

  private initUploader(): void {
    this.uploader = new FileUploader({
      url: this.uploadUrl,
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
