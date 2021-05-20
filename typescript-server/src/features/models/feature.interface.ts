export interface DefaultFeature{
    name:string,
    description:string
}

export interface Feature extends DefaultFeature{
    id:number;
}