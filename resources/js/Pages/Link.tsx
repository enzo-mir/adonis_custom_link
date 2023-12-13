import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  gap: 2em;
  width: clamp(500px, 50vw, 700px);
  background-color: #fff;
  aspect-ratio: 10 / 7;
  border-radius: 5px;
  box-shadow: 0 5px 20px 0px rgb(122, 122, 122);

  & > img {
    max-width: 100%;
  }
`;

function Link({ img, text }) {
  return (
    <Wrapper>
      {img ? <img src={img} alt="" /> : <p>no image</p>}
      {text ? <p>{text}</p> : <p>no text</p>}
    </Wrapper>
  );
}

export default Link;
