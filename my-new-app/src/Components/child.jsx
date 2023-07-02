import React from "react";
import { useState } from "react";




function Child () { 

const [finalresult, setFinalresult] = useState(false)
const [score, setScore] = useState(0)
const [wrong, setWrong] = useState(0)
const [selectedoption, setSelectedoption]= useState(null)
const [currentquestion, setCurrentquestion] = useState(0)

const questions = [
  // {
  //   text: "What is the capital of Lagos?",
  //   options: [
  //     { id: 0, text: "Shomolu", isCorrect: false },
  //     { id: 1, text: "Abeokuta", isCorrect: false },
  //     { id: 2, text: "Ikeja", isCorrect: true },
  //     { id: 3, text: "Ibadan", isCorrect: false },
  //   ],
  // },
  // {
  //   text: "When did Nigeria receive independence ?",
  //   options: [
  //     { id: 0, text: "1967", isCorrect: false },
  //     { id: 1, text: "1988", isCorrect: false },
  //     { id: 2, text: "1960", isCorrect: true },
  //     { id: 3, text: "1990", isCorrect: false },
  //   ],
  // },
  // {
  //   text: "Who is Nigeria's first president",
  //   options: [
  //     { id: 0, text: "Nnamdi aziqwe", isCorrect: true },
  //     { id: 1, text: "Tafawa Balewa", isCorrect: false },
  //     { id: 2, text: "Obasonjo", isCorrect: false },
  //     { id: 3, text: "Goodluck Jonathan", isCorrect: false },
  //   ],
  // },
  // {
  //   text: "When did corona virus happen?",
  //   options: [
  //     { id: 0, text: "2000", isCorrect: false },
  //     { id: 1, text: "2018", isCorrect: false },
  //     { id: 2, text: "2004", isCorrect: false },
  //     { id: 3, text: "2020", isCorrect: true },
  //   ],
  // },
  // {
  //   text: "Who is Nigeria's biggest Artist?",
  //   options: [
  //     { id: 0, text: "Burna boy", isCorrect: false },
  //     { id: 1, text: "Wizkid", isCorrect: true },
  //     { id: 2, text: "Fela", isCorrect: true },
  //     { id: 3, text: "Wasiu Ayinde", isCorrect: false },
  //   ],
  // },
  // {
  //   text: "what continent is Madagascar located ",
  //   options: [
  //     { id: 0, text: "Asia", isCorrect: false },
  //     { id: 1, text: "North America", isCorrect: false },
  //     { id: 2, text: "Africa", isCorrect: true },
  //     { id: 3, text: "Australia", isCorrect: false },
  //   ],
  // },
  // {
  //   text: "What is minimum hours of sleep we should get  daily ?",
  //   options: [
  //     { id: 0, text: "9-10hrs", isCorrect: false },
  //     { id: 1, text: "6-8hrs", isCorrect: true },
  //     { id: 2, text: "10-12hrs", isCorrect: false },
  //     { id: 3, text: "3-4hrs", isCorrect: false },
  //   ],
  // },
  {
    text: "What is the name of the first Nigeria yoruba president ?",
    options: [
      { id: 0, text: "Bola Tinubu", notCorrect: false },
      { id: 1, text: "Emefele", notCorrect: false },
      { id: 2, text: "O.Obasonjo", isCorrect: true },
      { id: 3, text: "Shonola Habeeb", notCorrect: false },
    ],
  },
  {
    text: "How many weeks makes a year ?",
    options: [
      { id: 0, text: "37", notCorrect: false },
      { id: 1, text: "72", notCorrect: false },
      { id: 2, text: "68", notCorrect: false },
      { id: 3, text: "52", isCorrect: true },
    ],
  },
  {
    text: "How many continents do we have in the world?",
    options: [
      { id: 0, text: "7", isCorrect: true},
      { id: 1, text: "6",  notCorrect: false },
      { id: 2, text: "8",  notCorrect: false },
      { id: 3, text: "5",  notCorrect: false },
    ],
  },
  {
    text: "What is the most deadly virus  ?",
    options: [
      { id: 0, text: "Ebola ", isCorrect: true },
      { id: 1, text: "Chlymedia",  notCorrect: false },
      { id: 2, text: "Corona",  notCorrect: false  },
      { id: 3, text: "Typhoid",  notCorrect: false },
    ],
  },
  {
    text: "Who is the world richest BLACK woman?",
    options: [
      { id: 0, text: "Oprah winfrey", isCorrect: true},
      { id: 1, text: "Azeezat Oshoala",  notCorrect: false },
      { id: 2, text: "Madison beer",  notCorrect: false },
      { id: 3, text: "Aisha Dangote", notCorrect: false },
    ],
  },
  
  
];


const optionClicked =  (isCorrect ) => {
  const currentquestionObj=questions[currentquestion];
 if (isCorrect === currentquestionObj.isCorrect)  {
  setWrong(wrong + 1); 
  setSelectedoption('wrong');
}
  else { 
  setScore(score + 1); 
  setSelectedoption('correct')
}



 if (currentquestion + 1 < questions.length){ 
  setTimeout(()=> { 
    setCurrentquestion(currentquestion + 1);
   setSelectedoption(null);
  } ,1000)  

 }
else {
  setFinalresult(true)
}


} 

const restartGame = () => {
  setCurrentquestion(0)
  setFinalresult(false)
  setScore (0)
  setWrong(0)
}



return (
<div>
  <h2>Malik's quiz</h2>


  <h2> <span className="correct"> Correctscore : {score} </span > <span className="wronganwsers"> Wrongscore : {wrong} </span>  </h2> 

{finalresult ? ( 

<div className="final-result">
<h1>Final result</h1>
<h2> {score} out of {questions.length} correct <br /> <span >{wrong} out of {questions.length} wrong </span> <br />
    <span> You scored :  ({(score/questions.length * 100)} %) </span>  </h2>
<button className="Log-button" onClick={() => restartGame () }>Restart game</button>
</div>
)
: 

   ( 
<div className="question-card"> 
<h2>question {currentquestion + 1} out of {questions.length}</h2>

<h3 > {questions[currentquestion].text} </h3>
  <ul >
   {questions[currentquestion].options.map((option) => {
    return(
      
      <li onClick={() => optionClicked (option.isCorrect) } key={option.id} className="onclick"

      style={{backgroundColor:selectedoption==='correct' ? 'green' : selectedoption==='wrong'? 'red' : 
     
      'inherit', color: 'white' }} > {option.text}</li>


  
    )
  
   })}
  </ul>


 
  </div>

) }


</div>
 )

};



export default Child;  

