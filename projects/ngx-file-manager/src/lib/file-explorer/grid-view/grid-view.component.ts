import { Component, OnInit, Input } from '@angular/core';
import { IFile } from '../../models/file.model';
import { IFolder } from '../../models/folder.model';

@Component({
  selector: 'grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {
  @Input() files: IFile[];
  @Input() folders: IFolder[];

  constructor() { }

  ngOnInit() {
  }

}
