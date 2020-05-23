const form = document.querySelector('.form');
const rightAnswers = ['B', 'C', 'A'];
const results = document.querySelector('.results');
const result = results.querySelector('H2 > span');
const resultMessage = results.querySelector('h3');

form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    let increment = 100 / rightAnswers.length;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value];
    userAnswers.forEach((answer, index) => {
        if(answer === rightAnswers[index]){
            score += increment;
        }
    });
    scrollTo(0, 0);
    form.setAttribute('style', 'display:none');
    results.removeAttribute('style');

    let output = 0;
    const timer = setInterval(() =>{
        result.innerText = `${output}%`;

        if(output >= 70){
            result.setAttribute('style', 'color: navy');
        }
        if(output === Math.round(score)){
            if(Math.round(score) >=70){
                resultMessage.innerText = `Congrats ${form.studentName.value.substr(0, form.studentName.value.indexOf(' '))} for passing your test!`;
            }else {
                resultMessage.innerText = "Nice job, keep practicing!"
            }
            clearInterval(timer);
        }else {
            output++;
        }
    }, 10);



});
