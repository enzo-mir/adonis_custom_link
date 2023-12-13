import Route from "@ioc:Adonis/Core/Route";
import Application from "@ioc:Adonis/Core/Application";
Route.get("/logout", async (ctx) => {
  await ctx.auth.logout();
  return ctx.response.redirect().toRoute("home");
});
Route.get("/admin", "AdminsController.adminRoute");
Route.get("/register", "LoginPagesController.loginPage").as("home");
Route.get("/", (ctx) => ctx.response.redirect().toRoute("home"));
Route.post("/login", "LoginPagesController.login");
Route.post("/updateData", "AdminsController.updateData").middleware("auth");
Route.post("/register", "LoginPagesController.register");
Route.get("/link/:id", "LinkPagesController.link");
Route.get("/image/:imgUrl", async (ctx) => {
  return ctx.response.download(
    Application.publicPath(`images/${ctx.params.imgUrl}`)
  );
});

Route.get("/:", ({ inertia }) => inertia.render("UndefinedPage"));
