import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public folders: any[];
  public files: any[];

  constructor() {
    this.folders = [
      {
        id: '9e25f3c5-8f69-45b4-9838-b37af0b92371',
        name: '/',
        parent: null,
        readonly: false,
        created: new Date(),
        modified: new Date()
      },
      {
        id: '3752b342-efb9-443f-bcfe-eaef762ea425',
        name: 'home',
        parent: '9e25f3c5-8f69-45b4-9838-b37af0b92371',
        readonly: false,
        created: new Date(),
        modified: new Date()
      },
      {
        id: '1786ad1b-1abc-4f95-9bd0-6c00b6d7e739',
        name: 'media',
        parent: '3752b342-efb9-443f-bcfe-eaef762ea425',
        readonly: false,
        created: new Date(),
        modified: new Date()
      },
      {
        id: '82a73934-30c3-4818-84bd-1804c4526e40',
        name: 'tmp',
        parent: '3752b342-efb9-443f-bcfe-eaef762ea425',
        readonly: false,
        created: new Date(),
        modified: new Date()
      },
      {
        id: '82cb4c27-fba9-4651-bbcf-0c24c344f97e',
        name: 'bin',
        parent: '82a73934-30c3-4818-84bd-1804c4526e40',
        readonly: false,
        created: new Date(),
        modified: new Date()
      },
      {
        id: '12827268-360d-4f36-89d6-a0718f01e32a',
        name: 'sys',
        parent: '9e25f3c5-8f69-45b4-9838-b37af0b92371',
        readonly: false,
        created: new Date(),
        modified: new Date()
      },
      {
        id: '59b3bb7c-75a3-4447-b9f2-5458e9526d89',
        name: 'test',
        parent: '9e25f3c5-8f69-45b4-9838-b37af0b92371',
        readonly: false,
        created: new Date(),
        modified: new Date()
      },
      {
        id: '6e0757f0-0487-417b-b817-a17258cf685a',
        name: 'bin',
        parent: '9e25f3c5-8f69-45b4-9838-b37af0b92371',
        readonly: false,
        created: new Date(),
        modified: new Date()
      },
      {
        id: 'b3a484f6-9fa7-4134-8ae8-06a09aff14a1',
        name: 'user',
        parent: '9e25f3c5-8f69-45b4-9838-b37af0b92371',
        readonly: false,
        created: new Date(),
        modified: new Date()
      },
      {
        id: 'cb55a70c-fe0f-4f78-a7db-6b1175ef6b7f',
        name: 'flecce',
        parent: 'b3a484f6-9fa7-4134-8ae8-06a09aff14a1',
        readonly: false,
        created: new Date(),
        modified: new Date()
      },
      {
        id: 'd1524384-08b0-435c-b08c-898b056fa380',
        name: 'snardin',
        parent: 'b3a484f6-9fa7-4134-8ae8-06a09aff14a1',
        readonly: false,
        created: new Date(),
        modified: new Date()
      }
    ];

    this.files = [
      {
        id: 'c3490600-004e-4c06-b53f-86d2f9ec9c6a',
        name: 'typescript.pdf',
        folderId: '1786ad1b-1abc-4f95-9bd0-6c00b6d7e739',
        size: 100,
        readonly: false,
        format: 'pdf',
        created: new Date(),
        modified: new Date()
      },
      {
        id: 'c3490600-004e-4c06-b53f-86d2f9ec9c6a',
        name: 'typescript.pdf',
        folderId: '1786ad1b-1abc-4f95-9bd0-6c00b6d7e739',
        size: 100,
        readonly: false,
        format: 'pdf',
        created: new Date(),
        modified: new Date()
      },
      {
        id: 'c3490600-004e-4c06-b53f-86d2f9ec9c6a',
        name: 'typescript.pdf',
        folderId: '1786ad1b-1abc-4f95-9bd0-6c00b6d7e739',
        size: 100,
        readonly: false,
        format: 'pdf',
        created: new Date(),
        modified: new Date()
      },
      {
        id: 'c3490600-004e-4c06-b53f-86d2f9ec9c6a',
        name: 'typescript.pdf',
        folderId: '1786ad1b-1abc-4f95-9bd0-6c00b6d7e739',
        size: 100,
        readonly: false,
        format: 'pdf',
        created: new Date(),
        modified: new Date()
      },
      {
        id: 'c3490600-004e-4c06-b53f-86d2f9ec9c6a',
        name: 'typescript.pdf',
        folderId: '1786ad1b-1abc-4f95-9bd0-6c00b6d7e739',
        size: 100,
        readonly: false,
        format: 'pdf',
        created: new Date(),
        modified: new Date()
      },
      {
        id: 'c3490600-004e-4c06-b53f-86d2f9ec9c6a',
        name: 'typescript.pdf',
        folderId: '1786ad1b-1abc-4f95-9bd0-6c00b6d7e739',
        size: 100,
        readonly: false,
        format: 'pdf',
        created: new Date(),
        modified: new Date()
      },
      {
        id: 'c3490600-004e-4c06-b53f-86d2f9ec9c6a',
        name: 'typescript.pdf',
        folderId: '1786ad1b-1abc-4f95-9bd0-6c00b6d7e739',
        size: 100,
        readonly: false,
        format: 'pdf',
        created: new Date(),
        modified: new Date()
      }
    ];
  }
}
