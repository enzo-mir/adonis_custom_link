import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import Datas from "App/Models/Datas";
import AuthValidator from "App/Validators/AuthValidator";

export default class LoginPagesController {
  public async loginPage(ctx: HttpContextContract) {
    return ctx.inertia.render("Login");
  }

  public async login(ctx: HttpContextContract) {
    const { email, password } = ctx.request.all();

    const logged = (await ctx.auth.attempt(email, password)) ? true : false;
    if (logged) {
      if (!(await Datas.query().where("id", ctx.auth.user!.id).select("*"))) {
        await Datas.create({
          id: ctx.auth.user!.id,
          image_url: null,
          text: "",
        });
      }
      return ctx.inertia.location("/admin");
    } else {
      return ctx.response.status(400).redirect().toPath("/");
    }
  }

  public async register(ctx: HttpContextContract) {
    try {
      const data = await ctx.request.validate(AuthValidator);
      const user = await User.create(data);
      await ctx.auth.login(user);

      return ctx.response.redirect("/");
    } catch (error) {
      console.log(error);
    }
  }
}
