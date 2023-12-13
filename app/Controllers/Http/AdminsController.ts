import Application from "@ioc:Adonis/Core/Application";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Datas from "App/Models/Datas";
import fs from "fs";

export default class AdminsController {
  public async adminRoute(ctx: HttpContextContract) {
    if (ctx.auth.isLoggedIn) {
      let getUserData: Datas[] = await Datas.query().where(
        "id",
        ctx.auth.user!.id
      );

      return ctx.inertia.render("Admin", {
        userInfo: { id: ctx.auth.user?.id, email: ctx.auth.user?.email },
        oldUrl: getUserData[0].image_url,
        oldText: getUserData[0].text,
      });
    } else {
      return ctx.inertia.render("UndefinedPage");
    }
  }

  public async updateData(ctx: HttpContextContract) {
    const data = {
      text: ctx.request.only(["text"]).text,
      img: ctx.request.file("image"),
    };
    const nameFile = Date.now().toString();

    let imagesLinkData: Datas[] = await Datas.query().where(
      "id",
      ctx.auth.user!.id
    );
    const imagesLink = imagesLinkData[0].image_url?.replace("/images/", "");
    const filePath = Application.publicPath(`images/${data.img}`);

    try {
      if (filePath) {
        fs.unlink(Application.publicPath(`images/${imagesLink}`), (err) => {
          if (err) {
            return ctx.response.status(400).json({ err });
          }
        });
      }
      data.img!.move(Application.publicPath("images"), {
        name: nameFile,
      });

      const image_url = `/images/${nameFile}`;

      await Datas.query().where("id", "=", ctx.auth.user!.id).update({
        id: ctx.auth.user!.id,
        image_url: image_url,
        text: data.text,
      });
      return ctx.response.status(200).json({ img: image_url });
    } catch (error) {
      return ctx.response.status(400).json({ error });
    }
  }
}
