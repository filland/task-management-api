import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "task-management",
      // the following two params seems to need to be set to false if i want to 
      // create tables using plain sql (meaning do not want to use generation of entities by TypeORM)
      autoLoadEntities: true,
      synchronize: true
    }),
    AuthModule
  ],
  providers: [],
})
export class AppModule { }
