import {Controller,Get} from '@nestjs/common'
import { AuthorRepository } from '../repository/author.repository'
import { Author } from '../entity/author.domain'

@Controller('/api/v1/author')
export class AuthorController {
    constructor(private readonly authorRepository:AuthorRepository) {}

    @Get('/')
    async getAll(): Promise<Author[]> {
        return this.authorRepository.getAll()
    }
    

}