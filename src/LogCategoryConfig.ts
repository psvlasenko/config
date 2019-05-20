import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export enum LogType {
    file = 'file',
    dateFile = 'dateFile',
    console = 'console',
}

export class LogCategoryConfig {
    @IsNotEmpty()
    @IsString()
    @IsEnum(LogType)
    public type!: LogType;

    @IsOptional()
    @IsString()
    public filename!: string;

    @IsString()
    @IsNotEmpty()
    public level!: string;
}
