import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type MovieDocument = Movie & Document

@Schema()
export class Movie {
    @Prop()
    title: string

    @Prop()
    director: string

    @Prop()
    Year: number

    @Prop([String])
    geners: string[]
}

export const MovieSchema = SchemaFactory.createForClass(Movie)