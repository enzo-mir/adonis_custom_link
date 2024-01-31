"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class AuthValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            email: Validator_1.schema.string([Validator_1.rules.email(), Validator_1.rules.trim()]),
            password: Validator_1.schema.string([Validator_1.rules.minLength(5)]),
        });
        this.messages = {
            email: "email invalid",
            password: "password must be further than 8 char",
        };
    }
}
exports.default = AuthValidator;
//# sourceMappingURL=AuthValidator.js.map