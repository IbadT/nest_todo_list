import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-task.dto';
// import { UpdateTaskDto } from './dto/update-task.dto';
import * as fs from 'fs';
import { Todo } from '../interfaces/todo.interface';



@Injectable()
export class TaskService {

  constructor() {
    fs.readFile('./src/tasks.json', 'utf8', (err, data) => {
      this.todo_list = JSON.parse(data);
    });
  }

  todo_list: Todo[];

  findAll(): Todo[] {
    return this.todo_list;
  }


  findOne(id: number): Todo {
    this.findAll();
    const todo = this.todo_list.find(todo => todo.id === id);
    return todo;
  }


  create(dto: CreateTodoDto): Todo[] {
    const id = this.todo_list ? this.todo_list[this.todo_list.length-1].id+1 : 1;
    
    this.todo_list.push({id, title: dto.title, isCompleted: dto.isCompleted});
    fs.writeFile('./src/tasks.json', JSON.stringify(this.todo_list), (err) => {
      console.log('OK');
    })
    return this.todo_list
  }


  update(id: number, title: string): Todo {
    this.findAll();
    const todo = this.todo_list.find(todo => todo.id === id);
    
    const newTodo = { ...todo, title}
    const newTodoList = this.todo_list.map(todo => todo.id === id ? newTodo : todo);
    fs.writeFile('./src/tasks.json', JSON.stringify(newTodoList), err => {
      console.log('OK');
    });
    return newTodo;
  }


  remove(id: number): number {
    this.findAll();
    const todos = this.todo_list.filter(todo => todo.id !== id);
    this.todo_list = todos;
    fs.writeFile('./src/tasks.json', JSON.stringify(todos), err => {
      console.log('OK');
    });
    return id;
  }
  
}
