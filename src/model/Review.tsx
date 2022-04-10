import { Paper } from "./Paper";
import { User } from "./User";

export interface Review {
    reviewId: number
    authorHash: string
    paperReviwed: number
    content: number
    likes: number
    dislikes: number
}