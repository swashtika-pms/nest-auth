import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://127.0.0.1:27017",{
      dbName:"dev"
    }),
    UsersModule,
    ProductsModule

  ],
  

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
