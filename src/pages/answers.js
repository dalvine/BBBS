const buttonOpenAnswer = document.querySelector('.answers__toggle-modal-state-button')
const answerBox = document.querySelector('.answers__question-full-answer')



const openedAnswerBox = () => {
  answerBox.classList.add('answers__question-full-answer_visible')
  buttonOpenAnswer.classList.add('answers__toggle-modal-state-button_opened')
  buttonOpenAnswer.removeEventListener('click' , openedAnswerBox)
  buttonOpenAnswer.addEventListener('click' , closedAnswerBox)
}

const closedAnswerBox = () => {
  answerBox.classList.remove('answers__question-full-answer_visible')
  buttonOpenAnswer.classList.remove('answers__toggle-modal-state-button_opened')
  buttonOpenAnswer.removeEventListener('click' , closedAnswerBox)
  buttonOpenAnswer.addEventListener('click' , openedAnswerBox)
}




buttonOpenAnswer.addEventListener('click' , openedAnswerBox)