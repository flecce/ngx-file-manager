import { Item } from './item.model';
import { ItemType } from '../enums/item-type.enum';

export class FolderItem extends Item {
    /**
     * Item type.
     */
    readonly itemType = ItemType.Folder;

    /**
     * Folder parent id.
     */
    parent: string;
}