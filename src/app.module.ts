import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './client/entities/client.entity';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    ClientModule, 
    UsersModule,
    
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'postgres',
      entities: [
        Client,
        User
      ],
      synchronize: true,
    }),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
