export interface IResponse<T> {
    success : boolean,
    message : string | null,
    data : T[] | null
}