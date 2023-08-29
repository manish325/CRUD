export interface IAction<T> {
    action : 'edit' | 'delete',
    entity : T
}