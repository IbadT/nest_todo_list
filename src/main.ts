import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {

  // const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api'); // добавления префикса к пути http://localhost:3000 --> http://localhost:3000/api
  // await app.listen(3000);

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Your API Title')
    .setDescription('Your API description')
    .setVersion('1.0')
    .addServer('http://localhost:3000/', 'Local environment')
    .addServer('https://staging.yourapi.com/', 'Staging')
    .addServer('https://production.yourapi.com/', 'Production')
    .addTag('Your API Tag')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(3000);

}
bootstrap();
