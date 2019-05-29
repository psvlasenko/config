"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
class Config {
    async validate() {
        const errors = await class_validator_1.validate(this);
        if (errors.length) {
            throw new Error(`Validation failed for config ${this.getName()}, errors: ${JSON.stringify(errors)}`);
        }
    }
    getDefaults() {
        return {};
    }
    validateIpOrHostname(value, propertyName) {
        const validator = new class_validator_1.Validator;
        if (!(validator.isIP(value) || validator.isFQDN(value, { require_tld: false }))) {
            throw new Error(`Config ${this.getName()}: ${propertyName} must be IP or hostname`);
        }
    }
}
exports.Config = Config;
//# sourceMappingURL=Config.js.map