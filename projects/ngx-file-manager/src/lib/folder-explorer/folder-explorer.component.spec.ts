import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderExplorerComponent } from './folder-explorer.component';
import { TreeComponent } from './tree/tree.component';

describe('FileExplorerComponent', () => {
  let component: FolderExplorerComponent;
  let fixture: ComponentFixture<FolderExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FolderExplorerComponent, TreeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
