import Inertia, { InertiaLink } from "@inertiajs/inertia-react";
import { FormEvent } from "react";
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
    & img {
      max-height: 250px;
      border-radius: 5px;
    }

    & > input[type="file"] {
    }
  }
`;

const Admin = ({ userInfo, oldUrl, oldText }) => {
  const { data, setData, post, errors } = Inertia.useForm({
    image: oldUrl || null,
    fileUrl: "",
    text: oldText || "",
  });

  const handlePostError = (error: Record<"image" | "text", string>) => {
    console.error("Erreur lors de la requête POST :", error);
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      post("/updateData", { data });
    } catch (error) {
      handlePostError(errors);
    }
  }

  function handleChangeImg(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files![0];

    setData({
      ...data,
      fileUrl: URL.createObjectURL(file),
      [event.target.name]: file,
    });
  }

  return (
    <Wrapper>
      <h1>{userInfo.email}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">
          <img src={data.fileUrl.length ? data.fileUrl : oldUrl} alt="" />
        </label>
        <input
          type="file"
          name="image"
          id="image"
          onChange={handleChangeImg}
          hidden
        />
        <input
          type="text"
          name="text"
          value={data.text}
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
      <InertiaLink href="logout" target="_blank">
        Logout
      </InertiaLink>
      <InertiaLink href={`/link/${userInfo.id}`} target="_blank">
        Custom link
      </InertiaLink>
    </Wrapper>
  );
};

export default Admin;
