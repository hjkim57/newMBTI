
import {results, mbtis} from './data.js'

const mbti = new URLSearchParams(location.search).get('mbti');
console.log(mbti)

// 1. 가져온 mbti 유형의 번호를 출력
// ?mbti=isfp ===> 2인 것을 출력
let typeNum = mbtis[mbti]
console.log(typeNum)

// 2. 위의 results 중 1번 결과에 해당하는 자료를 출력
let result = results[typeNum]

// 3. 그 중 결과의 제목을 출력
console.log(mbtis[mbti])

// 4. querySelector로 변수 선언
// --- innerHTML로 넣기
const titleEl = document.querySelector('.page-title');
const characterEl = document.querySelector('.character');
const boxes = document.querySelectorAll('.box');
const jobs = document.querySelectorAll('.job');
const lectureUrl = document.querySelector('.lecture');
const lectureImage = document.querySelector('.lecture img');

// console.log(characterEl)

titleEl.innerHTML = result.title
characterEl.src = result.character
boxes.forEach(function(boxEl, index){
    boxEl.innerHTML = result.results[index]
});
jobs.forEach((jobEl, index) =>{
    jobEl.innerHTML = result.jobs[index]
});
lectureImage.src = result.lectureImg;

