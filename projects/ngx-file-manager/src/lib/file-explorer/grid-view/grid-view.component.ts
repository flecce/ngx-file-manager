import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FolderItem } from '../../models/folder-item.model';
import { FileItem } from '../../models/file-item.model';
import { IItem } from '../../models/item.model';

@Component({
  selector: 'grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {
  @Input() folders: FolderItem[];
  @Input() files: FileItem[];
  @Output() onFolderSelect: EventEmitter<IItem> = new EventEmitter<IItem>();
  @Output() onFileSelect: EventEmitter<IItem> = new EventEmitter<IItem>();

  constructor() { }

  ngOnInit() {
  }

  selectFolder(folder: FolderItem): void {
    this.onFolderSelect.emit(folder);
  }

  selectFile(file: FileItem): void {
    this.onFileSelect.emit(file);
  }

}
