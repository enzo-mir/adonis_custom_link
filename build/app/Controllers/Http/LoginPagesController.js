"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../../Models/User"));
const Datas_1 = __importDefault(require("../../Models/Datas"));
const AuthValidator_1 = __importDefault(require("../../Validators/AuthValidator"));
class LoginPagesController {
    async loginPage(ctx) {
        return ctx.inertia.render("Login");
    }
    async login(ctx) {
        const { email, password } = ctx.request.all();
        const logged = (await ctx.auth.attempt(email, password)) ? true : false;
        if (logged) {
            return ctx.inertia.location("/admin");
        }
        else {
            return ctx.response.status(400).redirect().toPath("/");
        }
    }
    async register(ctx) {
        try {
            const data = await ctx.request.validate(AuthValidator_1.default);
            await User_1.default.create(data);
            await ctx.auth.attempt(data.email, data.password);
            await Datas_1.default.create({
                id: ctx.auth.user.id,
                image_url: null,
                text: "",
            });
            return ctx.inertia.render("Login", {
                success: { message: "Compte créer !" },
            });
        }
        catch (error) {
            console.log(error);
            ctx.session.flash({ errors: error.messages });
            return ctx.response.redirect().back();
        }
    }
}
exports.default = LoginPagesController;
//# sourceMappingURL=LoginPagesController.js.map