import { useState } from "react"
import styled from "styled-components"

const ShowRules = () => {

  return (
    <>
      <Contanier>
        <div>
            <h1>How to play dice game</h1>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then  2 point will be dedcuted </p>

        </div>

      </Contanier>
    </>
  )
}

export default ShowRules

const Contanier = styled.div `
background-color: #FBF1F1;
padding: 10px;
line-height: 20px;
margin: 20px;

h1{
    padding: 10px 0px 0px 30px ;
    font-weight: 800;

}
@media (max-width : 1024px) {
    width: 80%;
}
@media (max-width : 768px) {

    h1{
        padding: 0px;
    padding-left: 6px ;

}
}
@media (max-width : 425px) {

h1{

font-weight: 800;
font-size: 20px;

}
}

`;