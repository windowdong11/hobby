import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesController } from './movies/movies.controller';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest-movie'), MoviesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
