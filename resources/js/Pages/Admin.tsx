import Inertia, { InertiaLink } from "@inertiajs/inertia-react";
import React, { FormEvent } from "react";
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
  padding-block: 2em;

  & > form {
    display: flex;
    flex-direction: column;
    gap: 2em;
    & > img {
      max-height: 250px;
      border-radius: 5px;
    }
  }
`;

const Admin = ({ userInfo, oldUrl }) => {
  const { data, setData, post, errors } = Inertia.useForm({
    image: null,
    text: "",
  });

  const handlePostError = (error: Record<"image" | "text", string>) => {
    console.error("Erreur lors de la requête POST :", error);
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      post("/updateData", { data });
      handlePostError(errors);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChangeImg(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files![0];

    setData({
      ...data,
      [event.target.name]: file,
    });
  }

  return (
    <Wrapper>
      <h1>{userInfo.email}</h1>
      <form onSubmit={handleSubmit}>
        <img src={oldUrl} alt="" />
        <input type="file" name="image" id="" onChange={handleChangeImg} />
        <input
          type="text"
          name="text"
          onChange={(e) => {
            setData({
              ...data,
              [(e.target as HTMLInputElement).name]: (
                e.target as HTMLInputElement
              ).value,
            });
          }}
        />
        <input type="submit" value="envoyer" />
      </form>
      <InertiaLink
        href={`http://127.0.0.1:3333/link/${userInfo.id}`}
        target="_blank"
      >
        Custom link
      </InertiaLink>
    </Wrapper>
  );
};

export default Admin;
