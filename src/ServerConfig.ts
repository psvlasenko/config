import * as os from 'os';
import { Config } from './Config';
import { IsInt, IsNotEmpty, IsOptional, Max, Min, Matches } from 'class-validator';

export class ServerConfig extends Config {
    @IsNotEmpty()
    public host!: string;

    @IsInt()
    @IsNotEmpty()
    @Min(1024)
    @Max(65536)
    public port!: number;

    @IsOptional()
    @IsInt()
    @Min(2)
    @Max(os.cpus().length)
    public workers!: number;

    @IsNotEmpty()
    @Matches(/^(([a-z0-9]*)|(\.\/)|((\.\.\/)*))(\/*([a-z0-9]+\/)*)/)
    public controllers!: string;

    @IsNotEmpty()
    @Matches(/^(([a-z0-9]*)|(\.\/)|((\.\.\/)*))(\/*([a-z0-9]+\/)*)/)
    public public!: string;

    public async validate() {
        await super.validate();
        super.validateIpOrHostname(this.host, 'host');
    }

    public getName(): string {
        return 'server';
    }
}
