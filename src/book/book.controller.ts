import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async addBook(@Body() body: { title: string; author: string; year: number }) {
    return this.bookService.addBook(body.title, body.author, body.year);
  }

  @Get()
  async getAllBooks() {
    return this.bookService.getAllBooks();
  }

  @Get(':id')
  async getBookById(@Param('id') id: number) {
    return this.bookService.getBookById(id);
  }

  @Put(':id')
  async updateBook(
    @Param('id') id: number,
    @Body() body: { title: string; author: string; year: number }
  ) {
    return this.bookService.updateBook(id, body.title, body.author, body.year);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: number) {
    return this.bookService.deleteBook(id);
  }
}
