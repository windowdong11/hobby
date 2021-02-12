import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MoviesService } from './movies.service';
import { Movie, MovieDocument } from './schemas/movie.schemas';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}
    @Get()
    async findAll() {
        return await this.moviesService.getAll()
    }

    @Post()
    async create(@Body() movieData: CreateMovieDto){
        await this.moviesService.create(movieData)
    }
}
