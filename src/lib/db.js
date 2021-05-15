export function pushObject(questionObject) {
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

export function storeData(data) {
  localStorage.setItem('questionCards', JSON.stringify(data))
}
