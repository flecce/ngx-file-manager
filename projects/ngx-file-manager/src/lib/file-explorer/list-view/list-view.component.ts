import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../models/item.model';
import { ItemType } from '../../enums/item-type.enum';
import { FolderItem } from '../../models/folder-item.model';
import { FileItem } from '../../models/file-item.model';

@Component({
  selector: 'list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  @Input() folders: FolderItem[];
  @Input() files: FileItem[];

  constructor() { }

  ngOnInit() {
  }

}
