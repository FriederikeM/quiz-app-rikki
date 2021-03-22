// Log form input

const form = document.querySelector('.form')
const inputData = []

form.addEventListener('submit', event => {
  event.preventDefault()
  const newCreation = {
    questionInput: form['question'].value,
    answerInput: form['answer'].value,
    tagsInput: form['tags'].value,
  }
  inputData.push(newCreation)
  console.log(inputData)
  form.reset()
})
