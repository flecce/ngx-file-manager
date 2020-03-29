import { Item } from './item.model';
import { ItemType } from '../enums/item-type.enum';

export class FileItem extends Item {
    /**
     * Item type.
     */
    readonly itemType = ItemType.File;

    /**
     * Size in bytes.
     */
    size: number;

    /**
     * Lower case file extension.
     */
    extension: string;

    /**
     * MIME type.
     */
    type: string;

    /**
     * Folder id.
     */
    folderId: string;
}