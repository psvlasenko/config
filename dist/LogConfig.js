"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const Config_1 = require("./Config");
const LogCategoryConfig_1 = require("./LogCategoryConfig");
class LogConfig extends Config_1.Config {
    getName() {
        return 'log';
    }
    async validate() {
        await super.validate();
        this.validateCategory(this.main, 'main');
        this.validateCategory(this.access, 'access');
    }
    validateCategory(categoryConfig, category) {
        if ('file' === categoryConfig.type) {
            if (!categoryConfig.filename) {
                throw new Error(`Config ${this.getName()}: ${category} of type file must have filename set`);
            }
        }
    }
}
__decorate([
    class_validator_1.ValidateNested(),
    __metadata("design:type", LogCategoryConfig_1.LogCategoryConfig)
], LogConfig.prototype, "main", void 0);
__decorate([
    class_validator_1.ValidateNested(),
    __metadata("design:type", LogCategoryConfig_1.LogCategoryConfig)
], LogConfig.prototype, "access", void 0);
exports.LogConfig = LogConfig;
//# sourceMappingURL=LogConfig.js.map