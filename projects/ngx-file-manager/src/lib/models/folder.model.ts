export interface IFolder {
    id: string;
    name: string;
    parent: string;
    readonly: boolean;
    created: Date;
    modified: Date;
}