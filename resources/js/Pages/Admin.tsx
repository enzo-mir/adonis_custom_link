import { useForm } from "@inertiajs/inertia-react";
import React, { FormEvent } from "react";


const Admin = ({ userInfo }) => {
  const { data, setData, post } = useForm({
    image: null,
    text: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    post("/updateData", { data });
  }

  function handleChangeImg(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files![0];
    
    setData({
      ...data,
      [event.target.name]: file,
    });
  }

  return (
    <>
      <h1>{userInfo.email}</h1>
      <form onSubmit={handleSubmit}>
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
      <a href={`http://127.0.0.1:3333/link/${userInfo.id}`} target="_blank">Link</a>
    </>
  );
};

export default Admin;
