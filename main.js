//console.log("bağlandı")

const quizData = [
    {
        question:'Who is the founder of Twitter?',
        a:'Bill Gates',
        b:'Elon Musk',
        c:'Tim Cook',
        d:'Mark Juckerberg',
        e:'Jack Dorsey',
        corrent: 'e',
    },
    {
        question:'Which programming language is commonly used for developing mobile applications?',
        a:'Python',
        b:'Java',
        c:'C#',
        d:'Ruby',
        e:'PHP',
        corrent: 'b',
    },
    {
        question:'Which iconic animation studio is known for producing films like "Toy Story," "Finding Nemo," and "Up"?',
        a:'DreamWorks Animation',
        b:'Illumination Entertainment',
        c:'Studio Ghibli',
        d:'Pixar Animation Studios',
        e:'Blue Sky Studios',
        corrent: 'd',
    },
    {
        question:'Which 1994 film features a young lion prince named Simba, who must reclaim his throne from his uncle Scar?',
        a:'Madagascar',
        b:'The Lion King',
        c:'Finding Nemo',
        d:'Shrek',
        e:'Ice Age',
        corrent: 'b',
    },
    {
        question:'Which Italian dish is made from thinly sliced raw meat or fish, typically served as an appetizer?',
        a:'Sushi',
        b:'Tacos',
        c:'Hamburger',
        d:'Pizza',
        e:'Carpaccio',
        corrent: 'e',
    },

]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
//console.log(questionEl)
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz]

  deselectedAnswers()

  questionEl.innerText = currentQuizData.question
  a_text.innerText =currentQuizData.a
  b_text.innerText =currentQuizData.b
  c_text.innerText =currentQuizData.c
  d_text.innerText =currentQuizData.d
  e_text.innerText =currentQuizData.e
 
}

function deselectedAnswers(){
    answerEls.forEach(answerEl => answerEl.checked =false)

}

function getSelected(){
    let answer

    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener("click", ()=>{
    const answer = getSelected()

    //console.log(answer)

    if(answer){
        if(answer ===quizData[currentQuiz].corrent) {
            score ++
        }
        currentQuiz++

        if(currentQuiz<quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML=`
            <h2> Test Completed, your score is ${score * 20} 🤩 </h2>
            <button class="submit" onClick="location.reload()"> Try Again. </button>
            `
        }
    }
})




