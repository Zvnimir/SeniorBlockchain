import { Review } from "./Review";
import { User } from "./User";

export interface Paper {
    authorHash: number
    title: string
    category: string
    paperAbstract: string
    minuteRead: number
    authorAddress: string
    paperReviews: Review[]
}

