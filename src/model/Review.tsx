import { Paper } from "./Paper";
import { User } from "./User";

export interface Review {
    reviewId: number
    authorHash: User
    paperReviwed: number
    reviewContent: number
    
    //these do not exist in the contract but probably should
    replys: Review[]
    fatherReview: Review | null
}