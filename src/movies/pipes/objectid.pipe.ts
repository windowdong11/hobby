import { PipeTransform, Injectable, ArgumentMetadata, NotFoundException } from '@nestjs/common';

@Injectable()
export class ObjectIdPipe implements PipeTransform {
    transform(value: string, metadata: ArgumentMetadata) {
        if(!value.match(/^[0-9a-fA-F]{24}$/)){
            throw new NotFoundException(`Movie with ID : ${value} not found.`)
        }
        return value;
    }
}