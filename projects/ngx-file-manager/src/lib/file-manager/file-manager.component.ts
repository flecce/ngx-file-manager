import { Component, OnInit, Input } from '@angular/core';
import { IFile } from '../models/file.model';
import { IFolder } from '../models/folder.model';

@Component({
  selector: 'file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {
  @Input() uploadUrl: string;
  @Input() files: IFile[];
  @Input() folders: IFolder[];

  constructor() { }

  ngOnInit() {
  }

}
