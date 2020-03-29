import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TreeService {
    private selectSbj = new Subject<any>();
    public select$ = this.selectSbj.asObservable();

    select(e: any) {
        this.selectSbj.next({ folderId: e.item.id });
    }
}