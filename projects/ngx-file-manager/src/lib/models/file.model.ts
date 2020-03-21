export interface IFile {
    id: string;
    name: string;
    size: number;
    format: string;
    folderId: string;
    readonly: boolean;
    created: Date;
    modified: Date;
}