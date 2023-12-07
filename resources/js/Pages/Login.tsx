import { useForm } from "@inertiajs/inertia-react";
import React, { ChangeEvent, FormEvent, useState } from "react";

const Login = () => {
  const [displayForm, setDisplayForm] = useState("register");

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
      {displayForm === "register" ? (
        <>
          <h1>Register</h1>
          <form onSubmit={handleSubmitRegister}>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="email"
            />
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              placeholder="password"
            />
            <button type="submit">Envoyer</button>
          </form>
        </>
      ) : (
        <>
          <h1>Login</h1>
          <form onSubmit={handleSubmitLogin}>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="email"
            />
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              placeholder="password"
            />
            <button type="submit">Envoyer</button>
          </form>
        </>
      )}
      <a
        onClick={() => {
          setDisplayForm(displayForm === "register" ? "login" : "register");
        }}
      >
        Go to {displayForm === "register" ? "login" : "register"} form
      </a>
    </>
  );
};

export default Login;
