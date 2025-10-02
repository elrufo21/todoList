export interface Task {
    id?:number
    title:string
    description?:string
    state:string
    registration_date: Date
    finalization_date?: Date
    userId:number
}