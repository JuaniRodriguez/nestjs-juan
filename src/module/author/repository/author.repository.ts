import {Injectable} from "@nestjs/common";
import {DataSource,Repository} from 'typeorm';
import { AuthorEntity } from "../entity/author.entity";
import { Author } from "../entity/author.domain";
import { fromDbToAuthor } from "../mapper/author.mapper";

@Injectable()
export class AuthorRepository {
    private readonly repository: Repository<AuthorEntity>;

    constructor(private readonly datasource:DataSource) {
        this.repository=this.datasource.getRepository(AuthorEntity)
    }

    async getAll():Promise<Author[]> {
        const authors=await this.repository.find();
        return authors.map((author)=>fromDbToAuthor(author))
    }

}