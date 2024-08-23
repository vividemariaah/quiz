const questions =
[
    {
        question: "",
        options: "",
        answer: "",
    },
    {  
        question: "",
        options: "",
        answer: "",
    },
    {  
        question: "",
        options: "",
        answer: "",
    },
];
 
let currentQuestionIndex = 0;
let score = 0;
 
function showModal(){
 
    const modal = document.getElementById('modal');
 
    const questionElement = document.getElementById('modal-question');
    const optionsElement = document.getElementById('modal-options');
    const nextButton = document.getElementById('next-question');
    const feedbackElement = document.getElementById('feedback');
 
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
 
    question.options.forEach(option => {
        const label = document.createElement('label');
        label.classList.add('option');  
 
        const input = document.createElement('input');  
        input.type = 'radio';  
        input.name = 'option';
        input.value = option;
 
        label.appendChild(input);
        label.appendChild(document.createTextNode(option));  
        optionsElement.appendChild(label);
    });
 
    feedbackElement.textContent = '';
    feedbackElement.classList.remove('correct', 'incorrect');
    modal.style.display = 'block';
 
    nextButton.onclick = () => {
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (selectedOption) {
            if (selectedOption.value === question.answer) {
                feedbackElement.textContent = 'Resposta correta!';
                feedbackElement.classList.add('correct');
                score++;
               
            } else {
                feedbackElement.textContent = 'Resposta incorreta. A resposta correta é: ' + question.answer;
                feedbackElement.classList.add('incorrect');
            }
 
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                setTimeout(showModal, 2000); // Exibe a próxima pergunta após 2 segundos
            } else {
                document.getElementById('result').textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
                document.getElementById('result').classList.add(score === questions.length ? 'correct' : 'incorrect');
                modal.style.display = 'none';
                document.getElementById('start').style.display = 'block';
            }
        }
    };
}
 
document.getElementById('event').addEventListener('click', () => {
    document.getElementById('start').style.display = 'none';
    showModal();
});
 
document.getElementById('close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});
 
window.onclick = (event) => {  
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
};