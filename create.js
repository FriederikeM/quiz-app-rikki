import { pushSection } from './src/lib/db.js'

const form = document.querySelector('form')

form.addEventListener('submit', event => {
  event.preventDefault()
  // turn input inside the tag text area into an array

  const questionInput = form['question'].value
  const answerInput = form['answer'].value
  const tagsInput = form['tags']
  const tagsInputArray = tagsStringToArray(tagsInput.value)

  const input = {
    question: questionInput,
    answer: answerInput,
    tags: tagsInputArray,
  }

  pushSection(input)

  console.log(input)
  form.reset()
  alert('Question created! 🎉')
})

function tagsStringToArray(tagsString) {
  const itemsArray = tagsString.split(',')

  return itemsArray
}

// Log form input

// const form = document.querySelector('.form')
// const inputData = []

// form.addEventListener('submit', event => {
//   event.preventDefault()
//   const newCreation = {
//     questionInput: form['question'].value,
//     answerInput: form['answer'].value,
//     tagsInput: form['tags'].value,
//   }
//   inputData.push(newCreation)
//   console.log(inputData)
//   form.reset()
// })
