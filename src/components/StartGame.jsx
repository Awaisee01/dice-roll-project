import styled from "styled-components";
import dice from "../images/dicess.png";
const StartGame = ({ toggle }) => {
  return (
    <>
      <Container>
        <div className="img">
          <img src={dice} alt="" />
        </div>
        <div className="box">
          <h1>DICE GAME</h1>
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </Container>
    </>
  );
};

export default StartGame;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 1180px;
  margin: 0 auto;
  h1 {
    font-size: 90px;
    white-space: nowrap;
  }
  .box {
    display: flex;
    flex-direction: column;
    align-items: end;
    box-sizing: border-box;
  }

  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;

    .img {
      width: 100%;
      margin-left: 50px;
      justify-content: center;
      align-items: center;
    }
    .img img {
      max-width: 100%;
      height: auto;
    }
    .box {
      width: 100%;
      margin-right: 50px;
      line-height: 80px;
    }
    h1 {
      font-size: 80px;
      white-space: nowrap;
    }
  }
  @media (max-width: 786px) {
    flex-direction: column;

    .img {
      width: 60%;
    }
    .box {
      width: 100%;
    }
    h1 {
      font-size: 60px;
    }
  }
  @media (max-width: 425px) {
    h1 {
      font-size: 40px;
    }
    .img {
      width: 80%;
    }
  }
`;
const Button = styled.button`
  min-width: 220px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 3px;
  height: 45px;
  font-size: 16px;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.2s;
  }
  @media (max-width: 425px) {
    min-width: 150px;
    height: 40px;
    font-size: 14px;
  }
`;
