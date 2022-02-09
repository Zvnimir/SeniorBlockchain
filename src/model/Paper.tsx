import { Review } from "./Review";
import { User } from "./User";

export interface Paper {
    title: string
    domain: string
    description: string
    uploader: User
    reviews: Review[]
}