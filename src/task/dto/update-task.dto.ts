import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-task.dto';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto extends PartialType(CreateTodoDto) {

    @ApiProperty({
        example: 'new todo title',
        default: "default todo title"
    })
    @IsString()
    title?: string;
}
