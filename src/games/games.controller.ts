import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { GamesService } from './games.service';
import { Game } from '../game/game.entity';

@Controller('games')
export class GamesController {
    constructor(private readonly gamesService: GamesService) { }

    // Hämta alla spel
    @Get()
    findAll(): Promise<Game[]> {
        return this.gamesService.findAll();
    }

    // Hämta ett spel med specifikt id
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Game> {
        return this.gamesService.findOne(id);
    }

    // Skapa ett nytt spel
    @Post()
    create(@Body() game: Game): Promise<Game> {
        return this.gamesService.create(game);
    }

    // Uppdatera ett spel
    @Put(':id')
    update(@Param('id') id: number, @Body() game: Game): Promise<Game> {
        return this.gamesService.update(id, game);
    }

    // Ta bort ett spel
    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.gamesService.remove(id);
    }
}
