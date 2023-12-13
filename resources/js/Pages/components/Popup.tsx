import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  display: grid;
  place-items: center;
  left: 50%;
  transform: translateX(-50%);
  top: 5%;
  width: clamp(350px, 35vw, 500px);
  background-color: #fff;
  aspect-ratio: 2 / 1;
  border-radius: 5px;
  box-shadow: 0 5px 20px 0px rgb(122, 122, 122);
  z-index: 50;
`;

const Popup = ({
  message,
  setDisplay,
}: {
  message: string;
  setDisplay(v: boolean): void;
}) => {
  return (
    <Wrapper>
      <p>{message}</p>
      <button onClick={() => setDisplay(false)}>Close</button>
    </Wrapper>
  );
};

export default Popup;
