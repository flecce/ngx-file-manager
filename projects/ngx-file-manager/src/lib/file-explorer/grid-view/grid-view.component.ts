import { Component, OnInit, Input } from '@angular/core';
import { FolderItem } from '../../models/folder-item.model';
import { FileItem } from '../../models/file-item.model';

@Component({
  selector: 'grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {
  @Input() folders: FolderItem[];
  @Input() files: FileItem[];

  constructor() { }

  ngOnInit() {
  }

}
