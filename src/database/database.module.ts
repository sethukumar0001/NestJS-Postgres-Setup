import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('TYPEORM_HOST'),
        port: configService.get('TYPEORM_PORT'),
        username: configService.get('TYPEORM_USERNAME'),
        password: configService.get('TYPEORM_PASSWORD'),
        database: configService.get('TYPEORM_DATABASE'),
        entities: [configService.get('TYPEORM_ENTITIES')],
        synchronize: configService.get('TYPEORM_SYNCHRONIZE'),
        migrations: [configService.get('TYPEORM_MIGRATIONS')],
        migrationsRun: configService.get('TYPEORM_MIGRATIONS_RUN'),
        logging: configService.get('TYPEORM_LOGGING'),
      }),
    }),
  ],
})
export class DatabaseModule {}
