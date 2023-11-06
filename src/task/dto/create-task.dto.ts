// npm i --save class-validator class-transformer  -> для указания и описания этой модели
import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsString } from "class-validator"

export class CreateTodoDto {
    // описываем данные, которые будем принимать (поле name является строкой)
    
    @ApiProperty({
        example: 'example title',
        required: true
    })
    @IsString()
    title: string

    
    @ApiProperty({
        example: false,
        required: false
    })
    @IsBoolean()
    isCompleted: boolean

};
