
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max){
  return Math.round(Math.random() * (max-min) + min);
};

function randomHole(holes){
  const i = Math.floor(Math.random() * holes.length);
  const hole = holes[i];

  if(hole === lastHole ){
    console.log('ahahahah same one' );
    return randomHole(holes);
  }

  lastHole = hole;
  return hole;
};

function pop(){
  const time = randomTime(400, 1000);
  const hole = randomHole(holes);
  console.log(time, hole);

  hole.classList.add('up');

  setTimeout(() =>{
    hole.classList.remove('up');
    if(!timeUp) pop();
  }, time)
};

function startGame(){
  scoreBoard.textContent = 0;
  score = 0;
  timeUp = false;
  pop();

  setTimeout(() => timeUp = true, 10000);
};

function bonk(e){
  if(!e.isTrusted) return;
  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
};

moles.forEach(mole => mole.addEventListener('click', bonk));
