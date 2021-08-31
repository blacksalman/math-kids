const options1 = document.getElementById("option1");
const options2 = document.getElementById("option2");
const options3 = document.getElementById("option3");
const audio = document.getElementById("myAudio");
var answer = 0;

function generate_equation(){
    var num1 = Math.floor(Math.random() * 13);
    var num2 = Math.floor(Math.random() * 13);
    var dummyAnswer1 = Math.floor(Math.random() * 13);
    var dummyAnswer2 = Math.floor(Math.random() * 13);
    var allAnswers = [];
    var switchAnswers = [];

    answer = num1 * num2;

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    allAnswers = [answer, dummyAnswer1, dummyAnswer2];

    for(i = allAnswers.length;i--;){
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)),1)[0]);
    }

    options1.innerHTML = switchAnswers[0];
    options2.innerHTML = switchAnswers[1];
    options3.innerHTML = switchAnswers[2];

}

options1.addEventListener("click", function(){
    if(options1.innerHTML == answer){
        generate_equation();
    }
    else{
        audio.onplay();
    }
});

options2.addEventListener("click", function(){
    if(options2.innerHTML == answer){
        generate_equation();
    }
    else{
        audio.onplay();
    }
});

options3.addEventListener("click", function(){
    if(options3.innerHTML == answer){
        generate_equation();
    }
    else{
        audio.onplay();
    }
});

generate_equation();