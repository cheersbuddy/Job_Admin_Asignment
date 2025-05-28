
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobModule } from './job/job.module';
import { Job } from './job/job.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('POSTGRES_HOST'),
        port: parseInt(config.get('POSTGRES_PORT', '5432'), 10),
        username: config.get('POSTGRES_USER'),
        password: config.get('POSTGRES_PASSWORD'),
        database: config.get('POSTGRES_DB'),
        entities: [Job],
        synchronize: false, 
        migrations: [__dirname + '/migrations/*.ts'],
        migrationsRun: true, 
        autoLoadEntities: true,


      }),
      inject: [ConfigService],
    }),
    JobModule,
  ],
})
export class AppModule {}
