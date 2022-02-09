import { Paper } from "./Paper";
import { Review } from "./Review";
import { Notification } from "./Notification";

export interface User {
    username: string
    password: String
    verified: Boolean
    email: String
    firstName: String
    lastName: String
    degree: String
    profession: String
    dateOfBirth: Date
    //identification: Id
    balance: number
    papers: Paper[]
    reviews: Review[]
    notifications: Notification[]
}
