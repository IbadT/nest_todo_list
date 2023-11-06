import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  };

  getNumber(): number {
    const array = [1,2,3,4,5];
    return Math.floor(Math.random() * array.length);
  };
}
