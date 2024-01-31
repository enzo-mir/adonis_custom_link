"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
Route_1.default.get("/logout", async (ctx) => {
    await ctx.auth.logout();
    return ctx.response.redirect().toRoute("home");
});
Route_1.default.get("/admin", "AdminsController.adminRoute");
Route_1.default.get("/register", "LoginPagesController.loginPage").as("home");
Route_1.default.get("/", (ctx) => ctx.response.redirect().toPath("/register"));
Route_1.default.post("/login", "LoginPagesController.login");
Route_1.default.post("/updateData", "AdminsController.updateData").middleware("auth");
Route_1.default.post("/register", "LoginPagesController.register");
Route_1.default.get("/link/:id", "LinkPagesController.link");
Route_1.default.get("/image/:imgUrl", async (ctx) => {
    return ctx.response.download(Application_1.default.publicPath(`images/${ctx.params.imgUrl}`));
});
Route_1.default.get("/:", ({ inertia }) => inertia.render("UndefinedPage"));
//# sourceMappingURL=routes.js.map