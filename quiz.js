import { data } from './src/lib/db.js'
import createCard from './src/lib/card.js'

const content = document.querySelector('.grid-content')

for (let i = 0; i < data.length; i++) {
  const cardSection = createCard(data[i])
  content.append(cardSection)
}

// Show Answer

let answerButton = document.querySelectorAll('.question-card__show-answer')
let answerText = document.querySelectorAll('.answer-text')

for (let i = 0; i < answerButton.length; i++) {
  answerButton[i].addEventListener('click', () => {
    const added = answerText[i].classList.toggle('answer-text')
    if (added) {
      answerText[i].style.display = 'none'
    } else {
      answerText[i].style.display = 'block'
    }
  })
}

// Change bookmark

const bookmark = document.querySelectorAll('.question-card__bookmark')

for (let i = 0; i < bookmark.length; i++) {
  bookmark[i].addEventListener('click', () => {
    if (bookmark[i].classList.contains('far')) {
      bookmark[i].classList.remove('far', 'fa-bookmark')
      bookmark[i].classList.add('fas', 'fa-bookmark')
    } else {
      bookmark[i].classList.remove('fas', 'fa-bookmark')
      bookmark[i].classList.add('far', 'fa-bookmark')
    }
  })
}
