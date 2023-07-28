import { Module } from "@nestjs/common";
import { AuthorController } from "./controller/author.controller";
import { AuthorRepository } from "./repository/author.repository";
import {TypeOrmModule} from '@nestjs/typeorm'
import { AuthorEntity } from "./entity/author.entity";

@Module( {
    imports:[TypeOrmModule.forFeature([AuthorEntity])],
    controllers:[AuthorController],
    providers:[AuthorRepository]
})
export class AuthorModule {}