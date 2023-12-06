import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "users";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid("id").defaultTo(this.db.rawQuery("uuid()").knexQuery).primary();
      table.string("email", 255).notNullable().unique();
      table.string("password", 180).notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
