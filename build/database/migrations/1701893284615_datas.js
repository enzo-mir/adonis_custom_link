"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Datas extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = "datas";
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid("id").references("id").inTable("users");
            table.string("image_url").unique().nullable();
            table.string("text").nullable();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Datas;
//# sourceMappingURL=1701893284615_datas.js.map