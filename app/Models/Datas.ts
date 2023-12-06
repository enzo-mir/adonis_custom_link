import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Datas extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @column()
  public image_url: string | null;

  @column()
  public text: string | null;
}
