"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Datas_1 = __importDefault(require("../../Models/Datas"));
class LinkPagesController {
    async link(ctx) {
        let data = await Datas_1.default.query().where("id", ctx.params.id);
        return ctx.inertia.render("Link", {
            img: data[0].image_url,
            text: data[0].text,
        });
    }
}
exports.default = LinkPagesController;
//# sourceMappingURL=LinkPagesController.js.map