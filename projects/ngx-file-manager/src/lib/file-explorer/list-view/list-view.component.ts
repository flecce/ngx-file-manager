import { Component, OnInit, Input } from '@angular/core';
import { IFile } from '../../models/file.model';

@Component({
  selector: 'list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  @Input() files: IFile[];

  constructor() { }

  ngOnInit() {
  }

}
