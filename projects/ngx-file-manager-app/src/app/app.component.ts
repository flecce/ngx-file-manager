import { Component } from '@angular/core';
import { FolderItem } from 'projects/ngx-file-manager/src/lib/models/folder-item.model';
import { FileItem } from 'projects/ngx-file-manager/src/lib/models/file-item.model';
import { IItem } from 'projects/ngx-file-manager/src/lib/models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public folders: FolderItem[];
  public files: FileItem[];
  public selectedItems: IItem[];

  constructor() {
    this.folders = [
      this.createFolder('9e25f3c5-8f69-45b4-9838-b37af0b92371', '/', null),
      this.createFolder('3752b342-efb9-443f-bcfe-eaef762ea425', 'home', '9e25f3c5-8f69-45b4-9838-b37af0b92371'),
      this.createFolder('1786ad1b-1abc-4f95-9bd0-6c00b6d7e739', 'media', '9e25f3c5-8f69-45b4-9838-b37af0b92371'),
      this.createFolder('1786ad1b-1abc-4f95-9bd0-6c00b6d7e740', 'images', '1786ad1b-1abc-4f95-9bd0-6c00b6d7e739')
    ];

    this.files = [
      this.createFile('c3490600-004e-4c06-b53f-86d2f9ec9c6a', 'file1.pdf', '1786ad1b-1abc-4f95-9bd0-6c00b6d7e739'),
      this.createFile('c3490600-004e-4c06-b53f-86d2f9ec9c6b', 'file2.pdf', '1786ad1b-1abc-4f95-9bd0-6c00b6d7e739'),
      this.createFile('c3490600-004e-4c06-b53f-86d2f9ec9c6c', 'file3.pdf', '1786ad1b-1abc-4f95-9bd0-6c00b6d7e739'),
      this.createFile('c3490600-004e-4c06-b53f-86d2f9ec9c6d', 'file4.pdf', '1786ad1b-1abc-4f95-9bd0-6c00b6d7e739'),
      this.createFile('c3490600-004e-4c06-b53f-86d2f9ec9c6e', 'file5.pdf', '1786ad1b-1abc-4f95-9bd0-6c00b6d7e739'),
      this.createFile('c3490600-004e-4c06-b53f-86d2f9ec9c6f', 'file6.pdf', '1786ad1b-1abc-4f95-9bd0-6c00b6d7e739'),
      this.createFile('c3490600-004e-4c06-b53f-86d2f9ec9c6g', 'file7.pdf', '1786ad1b-1abc-4f95-9bd0-6c00b6d7e739')
    ];
  }

  private createFolder(id: string, name: string, parent: string): FolderItem {
    let folder = new FolderItem();
    folder.id = id;
    folder.name = name;
    folder.parent = parent;
    folder.readonly = false;
    folder.created = new Date();
    folder.modified = new Date();

    return folder;
  }

  private createFile(id: string, name: string, folderId: string): FileItem {
    let file = new FileItem();
    file.id = id;
    file.name = name;
    file.folderId = folderId;
    file.size = 100;
    file.readonly = false;
    file.extension = '';
    file.created = new Date();
    file.modified = new Date();

    return file;
  }

  onFolderSelect(e: any): void {
    this.selectedItems = this.files.filter(file => file.folderId === e.folderId) as IItem[];
    this.selectedItems = this.selectedItems.concat(this.folders.filter(folder => folder.parent === e.folderId) as IItem[]);
  }
}
