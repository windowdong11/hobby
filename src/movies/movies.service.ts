import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie, MovieDocument } from './schemas/movie.schemas';

@Injectable()
export class MoviesService {
    constructor(@InjectModel(Movie.name) private movieModel: Model<MovieDocument>) {}

    async getAll() : Promise<Movie[]>{
        return this.movieModel.find().exec()
    }

    async create(movieData: CreateMovieDto) {
        return this.movieModel.create(movieData)
    }

    async findOne(movieId : string) : Promise<Movie> {
        return this.movieModel.findById(movieId).exec()
    }

    async delete(movieId : string) {
        return this.movieModel.findByIdAndDelete(movieId).exec()
    }

    async update(movieId : string, movieData : UpdateMovieDto) {
        return this.movieModel.updateOne({_id : movieId}, movieData).exec()
    }
}
