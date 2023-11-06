import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTodoDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Todo } from '../interfaces/todo.interface';
import { ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger';


@ApiTags('Tasts')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  // @Get, @Post ... - это декораторы, которые принимают путь 
  @Get()
  findAll(): Todo[] {
    return this.taskService.findAll();
  }


  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  // @ApiBody({
  //   type: CreateTodoDto,
  //   description: 'Add todo'
  // })
  @Post('add')
  @UsePipes(new ValidationPipe()) // - для добавления валидации
  create(@Body() dto: CreateTodoDto) { // с помощью декоратора вытаскиваем все, что приходит в body
    return this.taskService.create(dto);
  }


  @Get('todo/:id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);
  }

  @Patch('edit-title/:id')
  update(@Param('id') id: string, @Body() dto: UpdateTaskDto): Todo {
    const { title } = dto;
    return this.taskService.update(+id, title);
  }


  @Delete('delete/:id')
  remove(@Param('id') id: string): number {
    return this.taskService.remove(+id);
  }
};
