// import styled from "styled-components"
// import ScoreCounter from "./ScoreCounter"
// import Selector from "./Selector"
// import RollDicee from "./RollDicee"
// import { useState } from "react"
// import dice1 from '../images/dice_1.png'
// import dice2 from '../images/dice_2.png'
// import dice3 from '../images/dice_3.png'
// import dice4     from '../images/dice_4.png'
// import dice5 from '../images/dice_5.png'
// import dice6 from '../images/dice_6.png'

// const GamePage = () => {
//     const [ score , setScore] = useState(0)
//     const [selectNumber , setselectNumber] = useState()
//     const [CurrentDice , setCurrentDice] = useState(dice1)

//     const randomNumber = (min, max) =>  {
//         return Math.floor((Math.random() * (max - min) + min));
//       }

//       const rollDice = () =>{
//         const randNumber = randomNumber (1,7);
//         setCurrentDice ((pre) => randNumber)
//         switch (randNumber) {
//             case 1:
//               setCurrentDice(dice1);
//               break;
//             case 2:
//               setCurrentDice(dice2);
//               break;
//             case 3:
//               setCurrentDice(dice3);
//               break;
//             case 4:
//               setCurrentDice(dice4);
//               break;
//             case 5:
//               setCurrentDice(dice5);
//               break;
//             case 6:
//               setCurrentDice(dice6);
//               break;
//             default:
//               setCurrentDice(); // Default to dice1 if randomNumber is out of range (should not happen)
//               break;
//           }
//           console.log(randNumber);

//       }
//       if (selectNumber== randomNumber){
//         setScore ((pre) => pre + randomNumber )
//     }
//     else{
//         setScore ((pre) => pre - 2 )

//     }
//   return (
//     <>
//       <Container>
//       <ScoreCounter
//       score = {score}
//       />
//       <Selector
//       selectNumber = {selectNumber}
//       setselectNumber = {setselectNumber}
//       />
//       </Container>
//       <RollDicee
//       CurrentDice = {CurrentDice}
//       rollDice = {rollDice}

//       />
//     </>
//   )
// }

// export default GamePage
//  const Container = styled.div`
//  display: flex;
//  justify-content: space-between;
//  `;

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import ScoreCounter from './ScoreCounter';
// import Selector from './Selector';
// import RollDicee from './RollDicee';
// import dice1 from '../images/dice_1.png';
// import dice2 from '../images/dice_2.png';
// import dice3 from '../images/dice_3.png';
// import dice4 from '../images/dice_4.png';
// import dice5 from '../images/dice_5.png';
// import dice6 from '../images/dice_6.png';

// const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const GamePage = () => {
//   const [score, setScore] = useState(0);
//   const [selectNumber, setSelectNumber] = useState(null); // Initialize with null or default value

//   const [currentDice, setCurrentDice] = useState(dice1);

//   // Function to generate random number between 1 and 6
//   const randomNumber = () => {
//     return Math.floor(Math.random() * 6) + 1;
//   };

//   // Function to handle rolling the dice
//   const rollDice = () => {
//     const randNumber = randomNumber();

//     // Update current dice image based on the random number
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

//     // Check if selected number matches the random number
//     if (selectNumber === randNumber) {
//       setScore(prevScore => prevScore + randNumber);
//     } else {
//       setScore(prevScore => prevScore - 2);
//     }
//   };

//   return (
//     <>
//       <Container>
//         <ScoreCounter score={score} />
//         <Selector selectNumber={selectNumber} setSelectNumber={setSelectNumber} />
//       </Container>
//       <RollDicee CurrentDice={currentDice} rollDice={rollDice} />
//     </>
//   );
// };

// export default GamePage;

import React, { useState } from "react";
import styled from "styled-components";
import ScoreCounter from "./ScoreCounter";
import Selector from "./Selector";
import RollDicee from "./RollDicee";

// Import dice images
import dice1 from "../images/dice_1.png";
import dice2 from "../images/dice_2.png";
import dice3 from "../images/dice_3.png";
import dice4 from "../images/dice_4.png";
import dice5 from "../images/dice_5.png";
import dice6 from "../images/dice_6.png";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width : 768px) {
    flex-direction: column;
    height: 250px;
  }
  @media (max-width : 425px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const GamePage = () => {
  const [score, setScore] = useState(0);
  const [selectNumber, setSelectNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(dice1);
    const [error , setError] = useState()

  const randomNumber = () => {
      return Math.floor(Math.random() * 6) + 1;
    };
    
    const rollDice = () => {
      if(!selectNumber){
        setError("Please select a number")
    return;
} 
      setError("");
    const randNumber = randomNumber();

    switch (randNumber) {
      case 1:
        setCurrentDice(dice1);
        break;
      case 2:
        setCurrentDice(dice2);
        break;
      case 3:
        setCurrentDice(dice3);
        break;
      case 4:
        setCurrentDice(dice4);
        break;
      case 5:
        setCurrentDice(dice5);
        break;
      case 6:
        setCurrentDice(dice6);
        break;
      default:
        setCurrentDice(dice1);
        break;
    }

    if (selectNumber !== null && selectNumber === randNumber) {
      setScore((prevScore) => prevScore + randNumber);
    } else {
      setScore((prevScore) => prevScore - 2);
    }
    setSelectNumber(undefined);


    console.log(
      `Random Number: ${randNumber}, Selected Number: ${selectNumber}, Score: ${score}`
    );
  };
  const  resetScore = () =>{
    setScore(0);
  };
  return (
    <div className="flex">
      <Container>
        <ScoreCounter score={score} />
        <Selector
        error = {error}
          selectNumber={selectNumber}
          setSelectNumber={setSelectNumber}
        />
      </Container>

      <RollDicee CurrentDice={currentDice} rollDice={rollDice} 
      resetScore = {resetScore}
      />
    </div>
  );
};

export default GamePage;


