import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MoviesService } from './movies.service';
import { ObjectIdPipe } from './pipes/objectid.pipe';
import { Movie } from './schemas/movie.schemas';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}
    @Get()
    async findAll() : Promise<Movie[]>{
        return await this.moviesService.getAll()
    }

    @Post()
    async create(@Body() movieData: CreateMovieDto){
        return await this.moviesService.create(movieData)
    }

    @Get('/:id')
    async findOne(@Param('id', ObjectIdPipe) movieId: string){
        return await this.moviesService.findOne(movieId)
    }

    @Delete('/:id')
    async delete(@Param('id', ObjectIdPipe) movieId: string){
        return await this.moviesService.delete(movieId)
    }

    @Patch('/:id')
    async update(@Param('id', ObjectIdPipe) movieId : string, @Body() movieData : UpdateMovieDto){
        return this.moviesService.update(movieId, movieData)
    }
}
