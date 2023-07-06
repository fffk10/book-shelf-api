import { Controller, Get } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Book } from '@/src/entity/books.entity'

@Controller('books')
export class BooksController {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  @Get()
  async findAll(): Promise<Book[]> {
    return this.bookRepository.find()
  }
}
