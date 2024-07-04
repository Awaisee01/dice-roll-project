import styled from "styled-components";

const ScoreCounter = ({ score }) => {
  return (
    <>
      <Container>
        <h1>{score}</h1>
        <h3 className="mb-3">Total Score</h3>
      </Container>
    </>
  );
};

export default ScoreCounter;

const Container = styled.div`
  padding: 20px;
  text-align: center;
  min-width: 200px;
  h1 {
    font-size: 100px;
    line-height: 90px;
  }
  h3 {
    white-space: nowrap;
  }
  @media (max-width: 768px) {
    h1 {
    font-size: 70px;
    line-height: 50px;
  }
  }
 
`;
