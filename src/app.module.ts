import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';

@Module({
  imports: [TaskModule], // для добавления импорта --> npx nest g resource "folder_name" --no-spec
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
