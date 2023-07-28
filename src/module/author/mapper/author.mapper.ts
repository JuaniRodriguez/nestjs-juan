import { AuthorEntity } from "../entity/author.entity";
import { Author } from "../entity/author.domain";

export const fromDbToAuthor=(authorEntity:AuthorEntity): Author=> {
    const author=new Author()

    author.id=authorEntity.id;
    author.firstName=authorEntity.firstName;
    author.lastName=authorEntity.lastName;
    author.createdAt=authorEntity.createdAt as unknown as string;
    author.updatedAt=authorEntity.updatedAt as unknown as string;
    author.deletedAt=authorEntity.deletedAt as unknown as string

    return author;
}