import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "../../Models/User";
import Datas from "../../Models/Datas";
import AuthValidator from "../../Validators/AuthValidator";

export default class LoginPagesController {
  public async loginPage(ctx: HttpContextContract) {
    return ctx.inertia.render("Login");
  }

  public async login(ctx: HttpContextContract) {
    const { email, password } = ctx.request.all();

    const logged = (await ctx.auth.attempt(email, password)) ? true : false;
    if (logged) {
      return ctx.inertia.location("/admin");
    } else {
      return ctx.response.status(400).redirect().toPath("/");
    }
  }

  public async register(ctx: HttpContextContract) {
    try {
      const data = await ctx.request.validate(AuthValidator);

      await User.create(data);
      await ctx.auth.attempt(data.email, data.password);
      await Datas.create({
        id: ctx.auth.user!.id,
        image_url: null,
        text: "",
      });
      return ctx.inertia.render("Login", {
        success: { message: "Compte créer !" },
      });
    } catch (error) {
      console.log(error);
      
      ctx.session.flash({ errors: error.messages });
      return ctx.response.redirect().back();
    }
  }
}
