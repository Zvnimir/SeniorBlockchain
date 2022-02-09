import { Paper } from "./Paper";
import { User } from "./User";

export interface Review {
    id: number
    paper: Paper
    poster: User
    replys: Review[]
    fatherReview: Review | null
}