import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { KnexModule } from './knex/knex.module';

@Module({
  imports: [KnexModule, BookModule],
})
export class AppModule {}
