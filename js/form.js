function calPer() {
    var a1 = document.querySelector('input[name="q1"]:checked').value;
    var a2 = document.querySelector('input[name="q2"]:checked').value;
    var a3 = document.querySelector('input[name="q3"]:checked').value;
    var a4 = document.querySelector('input[name="q4"]:checked').value;
    var a5 = document.querySelector('input[name="q5"]:checked').value;
    var a6 = document.querySelector('input[name="q6"]:checked').value;
    var a7 = document.querySelector('input[name="q7"]:checked').value;
    var a8 = document.querySelector('input[name="q8"]:checked').value;
    var a9 = document.querySelector('input[name="q9"]:checked').value;
    var a10 = document.querySelector('input[name="q10"]:checked').value;
    let x = a2 + a4 + a6 +  a8 + a10;
    let y = a1 + a3 + a5 + a7+ a9;

    let i = "Your results indicate that you are more of an introvert. What exactly does this mean? <br>Introverts tend to enjoy solitude and spending quiet time alone. They expend energy in social situations and prefer not to be the center of attention.In general, people might describe you as quiet. You probably prefer to spend time alone or with a small group of close friends and family. You may dislike busy social events such as parties and often feel drained after spending a lot of time around people you do not know well.";

    let e = "Your results indicate that you are more of an extrovert. What exactly does this mean? <br>Extroverts tend to be quite outgoing and talkative. They enjoy spending time with other people, and feel energized in social situations. Oftentimes, extroverts like being the focus of attention.As an extrovert, people probably describe you as friendly and outgoing. You love meeting new people and have no problem making new friends. Spending time with others leaves you feeling energized and inspired.";

    if(x>y){
        document.getElementById('result').innerHTML= i;
    }
    else{
        document.getElementById('result').innerHTML= e;

    }
    
}