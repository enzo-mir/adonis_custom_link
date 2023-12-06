import { useForm } from "@inertiajs/inertia-react";
import React, { ChangeEvent, FormEvent } from "react";

const Login = () => {
  const { data, setData, post } = useForm({
    email: "",
    password: "",
  });

  function handleChange(e: ChangeEvent) {
    setData((values) => ({
      ...values,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    }));
  }

  const handleSubmitLogin = async (event: FormEvent) => {
    event.preventDefault();

    try {
      post("/login", { data });
    } catch (error) {
      console.error("Erreur lors de l'envoi de la requête :", error);
    }
  };

  const handleSubmitRegister = async (event: FormEvent) => {
    event.preventDefault();

    try {
      post("/register", { data });
    } catch (error) {
      console.error("Erreur lors de l'envoi de la requête :", error);
    }
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmitLogin}>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <button type="submit">Envoyer</button>
      </form>
      <h1>Register</h1>
      <form onSubmit={handleSubmitRegister}>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <button type="submit">Envoyer</button>
      </form>
    </>
  );
};

export default Login;
