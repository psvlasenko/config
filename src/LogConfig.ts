import { ValidateNested } from 'class-validator';
import { Config } from './Config';
import { LogCategoryConfig } from './LogCategoryConfig';

export class LogConfig extends Config {
    @ValidateNested()
    public main!: LogCategoryConfig;
    @ValidateNested()
    public access!: LogCategoryConfig;

    public getName() {
        return 'log';
    }

    public async validate() {
        await super.validate();
        this.validateCategory(this.main, 'main');
        this.validateCategory(this.access, 'access');
    }

    protected validateCategory(categoryConfig: LogCategoryConfig, category: string) {
        if ('file' === categoryConfig.type) {
            if (!categoryConfig.filename) {
                throw new Error(`Config ${this.getName()}: ${category} of type file must have filename set`);
            }
        }
    }
}
