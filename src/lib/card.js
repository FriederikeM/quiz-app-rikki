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

  if (card.isBookmarked) {
    bookmark.classList.remove('far')
    bookmark.classList.add('fas')
  } else {
    bookmark.classList.remove('fas')
    bookmark.classList.add('far')
  }

  const headlineWrapper = document.createElement('div')
  headlineWrapper.classList.add('question-card__title')
  cardSection.append(headlineWrapper)

  const h3Title = document.createElement('h3')
  h3Title.textContent = 'Question'
  headlineWrapper.append(h3Title)

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

  const tagWrapper = document.createElement('div')
  tagWrapper.classList.add('question-card__tags')
  cardSection.append(tagWrapper)

  for (let i = 0; i < card.tags.length; i++) {
    const tags = document.createElement('div')
    tags.classList.add('question-card__tags-item')
    tags.textContent = card.tags[i]
    tagWrapper.append(tags)
  }
  return cardSection
}

// {
/* <article class="question-card">
          <i
            class="far fa-bookmark question-card__bookmark question-card__bookmark--toggled"
          ></i>
          <div class="question-card__title">
            <h3>Question:</h3>
          </div>
          <div class="box-main">
            <p class="question-card__question">What is love?</p>
          </div>
          <div class="question-card__show-answer">
            <button>SHOW ANSWER</button>
            <div class="answer-text">This ist the first answer</div>
          </div>
          <div class="question-card__tags">
            <span class="question-card__tags-item">#Baby</span>
            <span class="question-card__tags-item">#don't</span>
            <span class="question-card__tags-item">#hurt</span>
            <span class="question-card__tags-item">#me</span>
          </div>
        </article> */
// }
