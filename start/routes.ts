import Route from "@ioc:Adonis/Core/Route";

Route.get("/logout", async (ctx) => {
  await ctx.auth.logout();
  return ctx.response.redirect().toRoute("home");
});
Route.get("/", "LoginPagesController.loginPage").as("home");
Route.post("/login", "LoginPagesController.login");
Route.post("/updateData", "AdminsController.updateData").middleware("auth");
Route.post("/register", "LoginPagesController.register");
Route.get("/admin", "AdminsController.adminRoute").middleware("auth");
Route.get("/link/:id", "LinkPagesController.link");
