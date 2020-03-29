import { ItemType } from '../enums/item-type.enum';

export interface IItem {
    id: string;
    name: string;
    readonly: boolean;
    created: Date;
    modified: Date;
    readonly itemType: ItemType;
}

export abstract class Item implements IItem {
    id: string;
    name: string;
    readonly: boolean;
    created: Date;
    modified: Date;
    readonly itemType: ItemType;

    protected isFolder(): boolean {
        return this.itemType === ItemType.Folder;
    }

    protected isFile(): boolean {
        return this.itemType === ItemType.File;
    }
}