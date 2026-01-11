const quiz = [
    {
        q:"Kerala was formed in which year?",
        options:["1947","1956","1961","1970"],
        answer:1
    },
    {
        q:"First Chief Minister of Kerala?",
        options:["EMS Namboodiripad","AK Antony","VS Achuthanandan","K Karunakaran"],
        answer:0
    },
    {
        q:"Kerala State animal?",
        options:["Elephant","Tiger","Lion","Deer"],
        answer:0
    }
];

let index = 0;
let score = 0;

function loadQuestion(){
    document.getElementById("nextBtn").style.display="none";
    document.getElementById("score").innerHTML="";

    let q = quiz[index];
    document.getElementById("qNumber").innerHTML = "Question " + (index+1) + " of " + quiz.length;
    document.getElementById("question").innerHTML = q.q;

    let optionsHTML="";
    q.options.forEach((opt,i)=>{
        optionsHTML += `<button class="option" onclick="checkAnswer(${i})">${opt}</button>`;
    });
    document.getElementById("options").innerHTML = optionsHTML;
}

function checkAnswer(i){
    if(i === quiz[index].answer){
        score++;
    }
    document.getElementById("nextBtn").style.display="block";
}

function nextQuestion(){
    index++;
    if(index < quiz.length){
        loadQuestion();
    }else{
        document.getElementById("question").innerHTML = "Quiz Completed!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("qNumber").innerHTML = "";
        document.getElementById("nextBtn").style.display="none";
        document.getElementById("score").innerHTML = "Your Score: " + score + " / " + quiz.length;
    }
}

function goHome(){
    index = 0;
    score = 0;
    loadQuestion();
}

function goBack(){
    if(index > 0){
        index--;
        loadQuestion();
    }
}

loadQuestion();
