import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString, IsInt, IsBoolean, IsOptional, Min, Max, Length } from 'class-validator';

@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    @Length(1, 255, { message: 'Title must be between 1 and 255 characters long.' })
    title: string;

    @Column()
    @IsInt()
    @Min(1900, { message: 'Release year must be after 1900.' })
    @Max(new Date().getFullYear(), { message: `Release year can't be in the future.` })
    releaseYear: number;

    @Column()
    @IsString()
    startedPlaying: string; // 'YYYY-MM-DD'

    @Column()
    @IsBoolean()
    isCompleted: boolean;

    @Column()
    @IsString()
    platform: string;

    @Column()
    @IsInt()
    @Min(1)
    @Max(10)
    rating: number;
}
