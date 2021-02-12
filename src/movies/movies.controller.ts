import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { runInThisContext } from 'node:vm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MoviesService } from './movies.service';
import { Movie, MovieDocument } from './schemas/movie.schemas';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}
    @Get()
    async findAll() : Promise<Movie[]>{
        return await this.moviesService.getAll()
    }

    @Post()
    async create(@Body() movieData: CreateMovieDto){
        await this.moviesService.create(movieData)
    }

    @Get('/:id')
    async findOne(@Param('id') movieId: string){
        return await this.moviesService.findOne(movieId)
    }

    @Delete('/:id')
    async delete(@Param('id') movieId: string){
        await this.moviesService.delete(movieId)
    }
}
