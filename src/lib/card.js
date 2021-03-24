export default function createCard(card) {
  const cardSection = document.createElement('section')
  cardSection.classList.add('question-card')

  const bookmark = document.createElement('i')
  bookmark.classList.add(
    'far',
    'fa-bookmark',
    'question-card__bookmark',
    'question-card__bookmark--toggled'
  )
  cardSection.append(bookmark)

  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('far')
    bookmark.classList.toggle('fas')
  })

  const flexWrapper = document.createElement('div')
  flexWrapper.classList.add('question-card__title')
  cardSection.append(flexWrapper)

  const h3Title = document.createElement('h3')
  h3Title.textContent = 'Question'
  flexWrapper.append(h3Title)

  const questionWrapper = document.createElement('div')
  questionWrapper.classList.add('box-main')
  cardSection.append(questionWrapper)

  const question = document.createElement('p')
  question.classList.add('question-card__question')
  question.textContent = card.question
  questionWrapper.append(question)

  const answerWrapper = document.createElement('div')
  answerWrapper.classList.add('question-card__show-answer')
  cardSection.append(answerWrapper)

  const answerButton = document.createElement('button')
  answerButton.textContent = 'Show Answer'
  answerWrapper.append(answerButton)

  const answer = document.createElement('p')
  answer.classList.add('answer-text')
  answer.textContent = card.answer
  answerWrapper.append(answer)

  answerButton.addEventListener('click', () => {
    answer.classList.toggle('answer-text')
    if (answerButton.textContent === 'Show Answer') {
      answerButton.textContent = 'Hide Answer'
    } else {
      answerButton.textContent = 'Show Answer'
    }
  })

  const tagWrapper = document.createElement('div')
  tagWrapper.classList.add('question-card__tags')
  cardSection.append(tagWrapper)

  for (let i = 0; i < card.tags.length; i++) {
    const tags = document.createElement('li')
    tags.classList.add('question-card__tags-item')
    tags.textContent = card.tags[i]
    tagWrapper.append(tags)
  }
  return cardSection
}
