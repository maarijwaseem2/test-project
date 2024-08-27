import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { KnexModule } from '../knex/knex.module'; 

@Module({
  imports: [KnexModule],
  controllers: [BookController],
  providers: [BookService],
  exports: [BookService],
})
export class BookModule {}
