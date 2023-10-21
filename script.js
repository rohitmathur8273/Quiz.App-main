const question_arr = [{
    number: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    option: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language",
    ],
},

{
    number: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    option: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet",
    ],
},

{
    number: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    option: [
        "Hypertext Preprocessor",
        "HyperText Programming",
        "HyperText Preprogramming",
        "HomeText Preprocessor",
    ],
},

{
    number: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    option: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language",
    ],
},

{
    number: 5,
    question: "What does XML stand for?",
    answer: "Extensible Markup Language",
    option: [
        "Extensible Markup Language",
        "Executable Multiple Language",
        "Extra Multi-Program Language",
        "Examine Multiple Language",
    ],
},
];

const _startBtn = document.getElementById("start_btn");
const _startBox = document.querySelector(".start_box");
const _ruleBox = document.querySelector(".rule_box");
const _exitBtn = document.getElementById("exit_btn");
const _continueBtn = document.getElementById("continue_btn");
const _questionBox = document.querySelector(".question_box");
const _questionBodyBox = document.querySelector('.question_body_box');
const _nextBtn = document.getElementById("next_btn");
let _question = document.querySelector(".question");
let _quesCount = document.querySelector(".que_count");
let _time = document.querySelector(".time");
const _optSection = document.querySelector(".option_section");
const _scoreBox = document.querySelector('.score_box');
const _correctVal = document.querySelector('.correctVal');
const _incorrectVal = document.querySelector('.incorrectVal');
const _NotAttempVal = document.querySelector('.notAttempVal');
const _playBtn = document.getElementById('play_btn');
let _ranger = document.querySelector('.ranger');
const _scoreBodyHeading = document.querySelector('.score_body_heading');
const _box = document.querySelector('.box');


let rangerWidth = 100 / question_arr.length
_correctVal.innerHTML = Number.parseInt(0);
_incorrectVal.innerHTML = Number.parseInt(0);
_NotAttempVal.innerHTML = Number.parseInt(5);
_scoreBodyHeading.innerHTML = '😡😡😡 <br> <h3>Not Played</h3>'
let quesNum = 0;
let corrValue = 0;
let incorrValue = 0;
let myTimer;

// --------start-btn---------------- 
const startGame = () => {
_startBox.style.display = "none";
_ruleBox.style.display = "block";

};

// --------exit-btn----------------
const exitGame = () => {
_ruleBox.style.display = "none";
_startBox.style.display = "block";
};

// --------timer-section----------------
const timer = (_timeVal) => {
_time.innerHTML = _timeVal;
myTimer = setInterval(() => {
    _timeVal--;
    _time.innerHTML = _timeVal;
    if (_timeVal == 0) {
        nextQues();
    }
}, 1000);
};

// --------continues-btn----------------
const continueQues = () => {
_ruleBox.style.display = "none";
_questionBox.style.display = "block";
_questionFunc();
rangeFunc();
};

// --------Next-btn----------------
const nextQues = () => {
_ranger.style.width = 20 %
    clearInterval(myTimer)
if (quesNum < question_arr.length - 1) {
    quesNum++
    rangerWidth += 20;
    rangeFunc();
    _questionFunc();
} else {
    _questionBox.style.display = 'none'
    _scoreBox.style.display = 'flex'
}
}


// --------question-Js----------------
const _questionFunc = () => {
_nextBtn.style.display = 'none';
let _quesSection = document.querySelector('.question_section');
_quesSection.innerHTML = '<h2 class="question">' + question_arr[quesNum].question + '</h2>'
_optSection.innerHTML = '<p class="option">' + question_arr[quesNum].option[0] + '</p>' +
    '<p class="option">' + question_arr[quesNum].option[1] + '</p>' +
    '<p class="option">' + question_arr[quesNum].option[2] + '</p>' +
    '<p class="option">' + question_arr[quesNum].option[3] + '</p>'
_quesCount.innerHTML = question_arr[quesNum].number;
timer(15);

let _option = _optSection.querySelectorAll('.option');
for (let i = 0; i < _option.length; i++) {
    _option[i].setAttribute('onclick', 'select(this)')
}
}



// --------correct/incorrect----------------
const select = (selectedOpt) => {
_nextBtn.style.display = 'block';
clearInterval(myTimer);
let userAns = selectedOpt.textContent;
let corrAns = question_arr[quesNum].answer;
let allOpt = _optSection.children.length;
if (userAns == corrAns) {
    selectedOpt.classList.add("correct");
    selectedOpt.style.border = "none";
    corrValue++;
    _correctVal.innerHTML = corrValue;
} else {
    selectedOpt.classList.add("incorrect");
    selectedOpt.style.border = "none";
    incorrValue++;
    _incorrectVal.innerHTML = incorrValue;

    // if answer is wrong automatically select write answer 
    for (let i = 0; i < allOpt; i++) {
        if (_optSection.children[i].textContent == corrAns) {
            _optSection.children[i].setAttribute('class', 'option correct')
        }
    }
}


// once option select disabled all options 
for (let i = 0; i < allOpt; i++) {
    _optSection.children[i].classList.add('disabled');
}

emojiFunc();
notAttemp();
};



// emoji function 
const emojiFunc = () => {
if (corrValue == 5) {
    _scoreBodyHeading.innerHTML = '😀😀😀 <br> <h3>Excellent </h3>'
} else if (corrValue == 4) {
    _scoreBodyHeading.innerHTML = '😀😀 <br> <h3>Very Good </h3>'
} else if (corrValue == 3) {
    _scoreBodyHeading.innerHTML = '😀 <br> <h3>Good </h3>'
} else if (corrValue == 2) {
    _scoreBodyHeading.innerHTML = '☹️☹️ <br> <h3>Average </h3>'
} else {
    _scoreBodyHeading.innerHTML = '☹️☹️☹️ <br> <h3>Bad </h3>'
}
}


// Not Attemped function 
const notAttemp = () => {
let _notAttemped = (5 - (corrValue + incorrValue))
_NotAttempVal.innerHTML = _notAttemped
}


// ranger function 
const rangeFunc = () => {
_ranger.style.width = `${rangerWidth}%`
}

// play again function 
const playAgain = () => {
_correctVal.innerHTML = 0;
_incorrectVal.innerHTML = 0;
_NotAttempVal.innerHTML = 5;
_startBox.style.display = 'block';
_scoreBox.style.display = 'none';
rangerWidth = 100 / question_arr.length
quesNum = 0;
corrValue = 0;
incorrValue = 0;
}



_startBox.addEventListener('click', startGame);
_exitBtn.addEventListener('click', exitGame);
_nextBtn.addEventListener('click', nextQues);
_continueBtn.addEventListener('click', continueQues);
_playBtn.addEventListener('click', playAgain);