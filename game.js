const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progress.Text');
const scoreText = document.querySelector('#score');
const progressBarrFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = []

let questions = [
    {
        question: "Which one of these HTML Drag and Drop API events signifies the drag event is over?",
        choice1: 'dragdone',
        choice2: 'dragend',
        choice3: 'dragstop',
        choice4: 'dragqueen',
        answer: 2,
    },
    {   question: "What is the correct HTML for making a radio button?",
        choice1: '<radioHead>',
        choice2: 'type=radio>',
        choice3: '<radio>',
        choice4: '<input type="radio">',
        answer: 4,
    },
    {   question: "Which tool is best suited for creating a responsive footer?",
        choice1: 'flexbox',
        choice2: 'appleSauce',
        choice3: 'CSS Grid',
        choice4: 'flexgrid',
        answer: 1,

    },
    {   question: "What do the values in 'transition: color 1s' mean?",
        choice1: 'The color will transition in 1 second',
        choice2: 'Apply to color to the transition',
        choice3: 'The color will diapear in 1 second',
        choice4: 'Apply the transition to the color property that lasts one second',
        answer: 4,
    },
    {   question: "What is the CSS property that sets the size of the whitespace outside the borders of the content?",
        choice1: 'Margin',
        choice2: 'border',
        choice3: 'frame',
        choice4: 'padding',
        answer: 1,
    },
    {   question: "Which one of these is not a coding language?",
        choice1: 'dragdone',
        choice2: 'Python',
        choice3: 'Toggle',
        choice4: 'Ruby',
        answer: 3,
    }
]


