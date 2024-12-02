import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './game/game.entity';
import { GamesController } from './games/games.controller';
import { GamesService } from './games/games.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT, // Konvertera till number
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Game],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false }, // SSL
      }),
    TypeOrmModule.forFeature([Game]),
  ],
  controllers: [GamesController],
  providers: [GamesService],
})
export class AppModule { }
