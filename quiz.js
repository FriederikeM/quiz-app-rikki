import { data } from './src/lib/db.js'
import createCard from './src/lib/card.js'

const content = document.querySelector('.grid-content')

for (let i = 0; i < data.length; i++) {
  const cardSection = createCard(data[i])
  content.append(cardSection)
}
