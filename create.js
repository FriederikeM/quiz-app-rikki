import { pushObject } from './src/lib/db.js'
import { getQuestion } from './src/lib/db.js'

const form = document.querySelector('form')

form.addEventListener('submit', event => {
  event.preventDefault()

  const questionInput = form['question'].value
  const answerInput = form['answer'].value
  const tagsInput = form['tags']
  const tagsInputArray = tagsStringToArray(tagsInput.value)

  const data = getQuestion()
  const input = {
    id: data.length + 1,
    question: questionInput,
    answer: answerInput,
    tags: tagsInputArray,
    isBookmarked: false,
  }
  pushObject(input)

  form.reset()
  alert('Question created! 🎉')
})

// turn input inside the tag text area into an array

function tagsStringToArray(tagsString) {
  const itemsArray = tagsString.split(',')

  return itemsArray
}
