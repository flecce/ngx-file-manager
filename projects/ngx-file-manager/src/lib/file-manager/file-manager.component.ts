import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../models/item.model';
import { FolderItem } from '../models/folder-item.model';

@Component({
  selector: 'file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {
  @Input() uploadUrl: string;
  @Input() folders: FolderItem[];
  @Input() items: Item[];
  @Output() onFolderSelect: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  selectFolder(folderId: string): void {
    this.onFolderSelect.emit(folderId);
  }

}
