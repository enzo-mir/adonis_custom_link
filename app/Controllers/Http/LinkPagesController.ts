import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Datas from "App/Models/Datas";

export default class LinkPagesController {
  public async link(ctx: HttpContextContract) {
    let data: Datas[] = await Datas.query().where("id", ctx.params.id);
    

    return ctx.inertia.render("Link", {
      img: (data as unknown as Datas)[0].image_url,
      text: (data as unknown as Datas)[0].text,
    });
  }
}
