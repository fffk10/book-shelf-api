import { MiddlewareConsumer, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AppDataSource } from './data-source'
import { BooksController } from '@/src/controller/books.controller'
import { Book } from '@/src/entity/books.entity'
import { CorsMiddleware } from '@/src/cors.middleware'

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    TypeOrmModule.forFeature([Book]),
  ],
  controllers: [AppController, BooksController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('*')
  }
}
