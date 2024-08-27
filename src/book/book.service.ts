import { Injectable } from '@nestjs/common';
import * as Knex from 'knex'; 
import { KnexService } from '../knex/knex.service';

@Injectable()
export class BookService {
  constructor(private readonly knexService: KnexService) {}

  private get knex(): Knex.Knex {
    return this.knexService.getKnex();
  }

  async addBook(title: string, author: string, year: number) {
    return this.knex('books').insert({ title, author, year });
  }

  async getAllBooks() {
    return this.knex('books').select('*');
  }

  async getBookById(id: number) {
    return this.knex('books').where({ id }).first();
  }

  async updateBook(id: number, title: string, author: string, year: number) {
    return this.knex('books').where({ id }).update({ title, author, year });
  }

  async deleteBook(id: number) {
    return this.knex('books').where({ id }).del();
  }
}
