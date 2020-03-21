import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgxFilesizeModule } from 'ngx-filesize';
import { FileUploadModule } from 'ng2-file-upload';
import { AlertModule } from 'ngx-bootstrap/alert';

import { FolderExplorerComponent } from './folder-explorer/folder-explorer.component';
import { TreeComponent } from './folder-explorer/tree/tree.component';
import { FileExplorerComponent } from './file-explorer/file-explorer.component';
import { GridViewComponent } from './file-explorer/grid-view/grid-view.component';
import { ListViewComponent } from './file-explorer/list-view/list-view.component';
import { FileManagerComponent } from './file-manager/file-manager.component';

@NgModule({
  declarations: [
    FileManagerComponent,
    FolderExplorerComponent,
    TreeComponent,
    FileExplorerComponent,
    GridViewComponent,
    ListViewComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AlertModule,
    NgxFilesizeModule,
    FileUploadModule
  ],
  exports: [
    FileManagerComponent,
    FolderExplorerComponent,
    TreeComponent,
    FileExplorerComponent
  ],
  providers: [
  ]
})
export class NgxFileManagerModule {
}
