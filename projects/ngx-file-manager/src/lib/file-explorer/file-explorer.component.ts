import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Item } from '../models/item.model';
import { FolderItem } from '../models/folder-item.model';
import { FileItem } from '../models/file-item.model';
import { ItemType } from '../enums/item-type.enum';

@Component({
  selector: 'file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.css']
})
export class FileExplorerComponent implements OnInit, OnChanges {
  @Input() items: Item[];
  @Input() uploadUrl: string;

  folders: FolderItem[];
  files: FileItem[];

  viewType: string = 'grid';
  uploader: FileUploader;
  hasAnotherDropZoneOver: boolean;

  constructor() {
    this.uploader = new FileUploader({
      url: this.uploadUrl,
      autoUpload: true,
      disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
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
      //}
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.folders = this.items ? this.items.filter(item => item.itemType === ItemType.Folder) as FolderItem[] : [];
    this.files = this.items ? this.items.filter(item => item.itemType === ItemType.File) as FileItem[] : [];

    console.log('fodlers', this.folders);
    console.log('files', this.files);
  }

  ngOnInit() {
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

}
