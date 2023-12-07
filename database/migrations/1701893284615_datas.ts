import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Datas extends BaseSchema {
  protected tableName = "datas";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid("id").references("id").inTable("users");
      table.string("image_url").unique().nullable();
      table.string("text").nullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
