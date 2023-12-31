import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from './module/author/author.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'rent-a-book-db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthorModule,
],


  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
