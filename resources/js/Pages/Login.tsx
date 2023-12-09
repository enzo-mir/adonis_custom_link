import { useForm } from "@inertiajs/inertia-react";
import React, { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  width: clamp(500px, 50vw, 700px);
  background-color: #fff;
  aspect-ratio: 10 / 7;
  border-radius: 5px;
  box-shadow: 0 5px 20px 0px rgb(122, 122, 122);

  & a:hover {
    cursor: pointer;
  }

  & > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    width: 50%;
    max-width: 500px;

    & > * {
      width: 100%;
      border-radius: 3px;
      border: 1px solid black;
    }
    & > input {
      padding: 1em;
    }
    & > button {
      padding: 1em;
      background-color: hsl(0, 0%, 98%);
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

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
    <Wrapper>
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
    </Wrapper>
  );
};

export default Login;
