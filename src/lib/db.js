export function pushObject(questionObject) {
  console.log(questionObject)
  let questionCards
  const storageQuestions = JSON.parse(localStorage.getItem('questionCards'))
  if (storageQuestions === null) {
    questionCards = []
  } else {
    questionCards = storageQuestions
  }

  questionCards.push(questionObject)
  localStorage.setItem('questionCards', JSON.stringify(questionCards))
}

export function getQuestion() {
  let questionCards
  const storageQuestions = JSON.parse(localStorage.getItem('questionCards'))
  if (storageQuestions === null) {
    questionCards = []
  } else {
    questionCards = storageQuestions
  }
  return questionCards
}
