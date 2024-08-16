
// data.js 파일에서 const question = [] 만 가져오기

import {questions} from './data.js';
// console.log(questions[0].choices[0].value)

const progressValueEl = document.querySelector('.progress .value');
const numberEl = document.querySelector('.number');
const questionEl = document.querySelector('.question');
const choice1El = document.querySelector('.choice1');
const choice2El = document.querySelector('.choice2');

let currentNumber = 0;
let mbti = '';
let question = '';

function renderQuestion(){
    question = questions[currentNumber];
    numberEl.innerHTML = question.number;
    questionEl.innerHTML = question.question;
    choice1El.innerHTML = question.choices[0].text;
    choice2El.innerHTML = question.choices[1].text;
    progressValueEl.style.width = (currentNumber+1)*10 + '%';
}

renderQuestion();

choice1El.addEventListener('click', function(){
    nextQuestion(0)
});
// click 동작이 실행되면 function 작동. click 동작이 실행안되면 function 의미 없음.
choice2El.addEventListener('click', function(){
    nextQuestion(1)
});

function nextQuestion(choiceNumber){
    mbti = mbti + question.choices[choiceNumber].value;
    // console.log(question.choices[choiceNumber].value)
    // console.log(mbti);
    if(currentNumber === questions.length-1){
        location.href='../html/results.html?mbti=' + mbti;
    };
    currentNumber = currentNumber + 1;
    renderQuestion();
    
}





