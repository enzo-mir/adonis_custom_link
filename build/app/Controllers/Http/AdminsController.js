"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
const Datas_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Datas"));
const fs_1 = __importDefault(require("fs"));
class AdminsController {
    async adminRoute(ctx) {
        if (ctx.auth.isLoggedIn) {
            let getUserData = await Datas_1.default.query().where("id", ctx.auth.user.id);
            return ctx.inertia.render("Admin", {
                userInfo: { id: ctx.auth.user?.id, email: ctx.auth.user?.email },
                oldUrl: getUserData[0].image_url,
                oldText: getUserData[0].text,
            });
        }
        else {
            return ctx.inertia.render("UndefinedPage");
        }
    }
    async updateData(ctx) {
        const data = {
            text: ctx.request.only(["text"]).text,
            img: ctx.request.file("image"),
        };
        const nameFile = Date.now().toString();
        let imagesLinkData = await Datas_1.default.query().where("id", ctx.auth.user.id);
        const imagesLink = imagesLinkData[0].image_url?.replace("/images/", "");
        const filePath = Application_1.default.publicPath(`images/${data.img}`);
        try {
            if (filePath) {
                fs_1.default.unlink(Application_1.default.publicPath(`images/${imagesLink}`), (err) => {
                    if (err) {
                        return ctx.response.status(400).json({ err });
                    }
                });
            }
            data.img.move(Application_1.default.publicPath("images"), {
                name: nameFile,
            });
            const image_url = `/images/${nameFile}`;
            await Datas_1.default.query().where("id", "=", ctx.auth.user.id).update({
                id: ctx.auth.user.id,
                image_url: image_url,
                text: data.text,
            });
            let getUserData = await Datas_1.default.query().where("id", ctx.auth.user.id);
            return ctx.inertia.render("Admin", {
                userInfo: { id: ctx.auth.user?.id, email: ctx.auth.user?.email },
                oldUrl: getUserData[0].image_url,
                oldText: getUserData[0].text,
                succes: image_url,
            });
        }
        catch (error) {
            return ctx.inertia.render("Admin", {
                error: "Something went wrong !",
            });
        }
    }
}
exports.default = AdminsController;
//# sourceMappingURL=AdminsController.js.map