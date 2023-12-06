import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Datas from "App/Models/Datas";

export default class AdminsController {
  public async adminRoute(ctx: HttpContextContract) {
    if (ctx.auth.isLoggedIn) {
      return ctx.inertia.render("Admin", {
        userInfo: { id: ctx.auth.user?.id, email: ctx.auth.user?.email },
      });
    }
    return ctx.inertia.render("Undefined");
  }

  public async updateData(ctx: HttpContextContract) {
    const { img, text } = ctx.request.all();
    try {
      await Datas.query().where("id", "=", ctx.auth.user!.id).update({
        image_url: img,
        text,
      });
      return ctx.response.status(200);
    } catch (error) {}
  }
}
