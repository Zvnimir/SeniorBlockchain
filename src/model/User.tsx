import { Paper } from "./Paper";
import { Review } from "./Review";
import { Notification } from "./Notification";

export interface User {
    email: String //c
    firstName: String
    lastName: String
    passwordHash: String
    biography: String //c
    balance: number
    userAddress: String
    confirmed: Boolean
    postedPapers: Paper[] 
    writtenReviews: Review[]
    degree: String //c
    profession: String //c
    // notifications: Notification[]
}
