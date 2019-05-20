import { Config } from './Config';
import { LogCategoryConfig } from 'LogCategoryConfig';
export declare class LogConfig extends Config {
    main: LogCategoryConfig;
    access: LogCategoryConfig;
    getName(): string;
    validate(): Promise<void>;
    protected validateCategory(categoryConfig: LogCategoryConfig, category: string): void;
}
