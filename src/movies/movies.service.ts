import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie, MovieDocument } from './schemas/movie.schemas';

@Injectable()
export class MoviesService {
    constructor(@InjectModel(Movie.name) private movieModel: Model<MovieDocument>) {}

    async getAll() : Promise<Movie[]>{
        return this.movieModel.find().exec()
    }

    async create(movieData: CreateMovieDto) {
        this.movieModel.create(movieData)
    }
}
