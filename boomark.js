import { getQuestion } from './src/lib/db.js'
import createCard from './src/lib/card.js'

const content = document.querySelector('.grid-content')

const data = getQuestion()

const filteredData = data.filter(card => {
  return card.isBookmarked === true
})

filteredData.forEach(card => {
  const cardSection = createCard(card, card.id - 1)
  content.append(cardSection)
})
