import { Config } from './Config';
export declare class PostgresConfig extends Config {
    type: 'postgres';
    host: string;
    database: string;
    username: string;
    password: string;
    entities: string[];
    migrations: string[];
    validate(): Promise<void>;
    getName(): string;
}
