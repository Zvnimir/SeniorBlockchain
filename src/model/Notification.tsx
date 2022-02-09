import { User } from "./User";

export interface Notification {
    id: number
    message: string
    user: User
    leadsTo: string
}