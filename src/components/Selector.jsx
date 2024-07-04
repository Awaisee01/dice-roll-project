import styled from "styled-components";

const Selector = ({ selectNumber, setSelectNumber, error }) => {
  const arr = [1, 2, 3, 4, 5, 6];

  console.log(selectNumber);
  return (
    <>
      <Data>
        <p> {error} </p>
        {arr.map((val, i) => (
          <Box
            isSelected={val == selectNumber}
            onClick={() => setSelectNumber(val)}
          >
            {val}
          </Box>
        ))}
        <h1>Select Number</h1>
      </Data>
    </>
  );
};

export default Selector;




const Box = styled.div`
  margin: 5px;
  min-width: 70px;
  min-height: 70px;
  border: 1px solid black;
  display: grid;
  place-content: center;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};

  @media (max-width: 768px) {
    min-width: 50px;
    min-height: 50px;


}
@media (max-width: 320px) {
    min-width: 35px;
        min-height: 35px;
    
}

`;
const Data = styled.div`
  display: flex;
  padding: 40px;
  position: relative;

  p {
    position: absolute;
    top: 10px;
    right: 45px;
    font-size: 25px;
    color: red;
  }
  h1 {
    position: absolute;
    bottom: 0;
    right: 45px;
    font-size: 25px;
    color: black;
  }
  @media (max-width: 768px) {
    width: 550px;
    justify-content: end;
    p {
    font-size: 15px;
  }
  h1 {
    font-size: 18px;
    margin-bottom: 20px;
  }
}
@media (max-width: 425px) {
    width: 345px;
}
@media (max-width: 375px) {
    width: 200px;
    justify-content: center;

}
`;
