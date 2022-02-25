import { Paper } from "./Paper";
import { Review } from "./Review";
import { Notification } from "./Notification";

export interface User {
    userEmail: String
    firstName: String
    lastName: String
    passwordHash: String
    biografy: String
    balance: number
    userAddress: String
    confirmed: Boolean
    postedPapers: Paper[]
    writtenReviews: Review[]
    
    //these do not exist in the contract but probably should
    username: string
    degree: String
    profession: String
    notifications: Notification[]
}
