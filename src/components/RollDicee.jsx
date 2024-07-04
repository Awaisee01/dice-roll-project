import styled from 'styled-components'
import ShowRules from './ShowRules';
import { useState } from 'react';
const RollDicee = ({ CurrentDice , rollDice , resetScore}) => {

    const [showRules ,  setShowRules] = useState()
 
      

  return (
    <Container>
    <div className='img'
    onClick={ rollDice }
    >
    <img src={CurrentDice} alt="wew" />
    </div>
    <p>Click on Dice to roll</p>
    <div className="btns">
    <Button onClick={resetScore}>Reset Score</Button>
    <OutLine onClick={() => setShowRules(!showRules)}>
          {showRules ? 'Hide Rules' : 'Show Rules'}
        </OutLine>
      </div>
      {/* Conditionally render ShowRules component based on showRules state */}
      {showRules && <ShowRules />}
    </Container>
  )
}

export default RollDicee


const Container = styled.div `
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 height: calc(auto - 219px);

 p{
    font-size: 18px;
    font-weight: 600;
    margin: 30px;
 }
 .btns{
    display: flex;
    flex-direction: column;
    gap: 30px;
 }
 @media (max-width : 768px) {
 }
 .img img{
    height: 200px;
    width: 200px;
 }
 p{
    font-size: 14px;
    font-weight: 600;
    margin: 10px;
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
    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.2s;
    }
`;
 const OutLine = styled(Button) `
 background-color: white;
 border: 1px solid black;
 color: black;
 &:hover{
        background-color: black;
        color: white;
        border: 1px solid black;
        transition: 0.2s;
    }
 `;







// import React, { useState } from 'react';
// import styled from 'styled-components';

// // Import dice images
// import dice1 from '../images/dice_1.png';
// import dice2 from '../images/dice_2.png';
// import dice3 from '../images/dice_3.png';
// import dice4 from '../images/dice_4.png';
// import dice5 from '../images/dice_5.png';
// import dice6 from '../images/dice_6.png';

// // Styled components for styling
// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   height: calc(100vh - 219px); /* Adjusted height calculation */

//   p {
//     font-size: 18px;
//     font-weight: 600;
//     margin: 30px;
//   }
// `;

// const Button = styled.button`
//   min-width: 220px;
//   background-color: black;
//   color: white;
//   border: none;
//   border-radius: 3px;
//   height: 45px;
//   font-size: 16px;
//   margin: 5px;
//   cursor: pointer;
  
//   &:hover {
//     background-color: white;
//     color: black;
//     border: 1px solid black;
//     transition: 0.2s;
//   }
// `;

// const RollDicee = () => {
//   const [currentDice, setCurrentDice] = useState(dice1);

//   // Function to generate random number between 1 and 6
//   const randomNumber = () => {
//     return Math.floor(Math.random() * 6) + 1;
//   };

//   // Event handler for rolling the dice
//   const rollDice = () => {
//     const randNumber = randomNumber(); // Generate random number between 1 and 6

//     // Set currentDice state based on the random number
//     switch (randNumber) {
//       case 1:
//         setCurrentDice(dice1);
//         break;
//       case 2:
//         setCurrentDice(dice2);
//         break;
//       case 3:
//         setCurrentDice(dice3);
//         break;
//       case 4:
//         setCurrentDice(dice4);
//         break;
//       case 5:
//         setCurrentDice(dice5);
//         break;
//       case 6:
//         setCurrentDice(dice6);
//         break;
//       default:
//         setCurrentDice(dice1); // Default to dice1 if randomNumber is out of range (should not happen)
//         break;
//     }
//     console.log(randNumber);
//   };

//   return (
//     <Container>
//       <div onClick={rollDice}>
//         <img src={currentDice} alt="Dice" />
//       </div>
//       <p>Click on Dice to roll</p>
//       <Button>Reset Score</Button>
//       <Button>Show Rules</Button>
//     </Container>
//   );
// };

// export default RollDicee;
