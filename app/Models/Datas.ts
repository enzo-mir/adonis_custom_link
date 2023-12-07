import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Datas extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @column()
  public image_url: null | string;

  @column()
  public text: string;
}
