"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = require("./Config");
const class_validator_1 = require("class-validator");
class ServicesConfig extends Config_1.Config {
    async validate() {
        await super.validate();
        const validator = new class_validator_1.Validator;
        for (const service in this) {
            if ('function' === typeof service) {
                continue;
            }
            if (!validator.isURL(this[service])) {
                throw new Error(`Config ${this.getName()}: ${service} value must be URL`);
            }
        }
    }
    getName() {
        return 'services';
    }
}
exports.ServicesConfig = ServicesConfig;
//# sourceMappingURL=ServicesConfig.js.map