import { schema, CustomMessages, rules } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AuthValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string([rules.email(), rules.trim()]),
    password: schema.string([rules.minLength(5)]),
  });

  public messages: CustomMessages = {
    email: "email invalid",
    password: "password must be further than 8 char",
  };
}
