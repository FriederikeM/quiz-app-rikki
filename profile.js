// Create dark-mode

const { doc } = require('prettier')

function myFunction() {
  let profile = document.querySelector('.profile')
  profile.classList.toggle('dark-mode')
  let header = document.querySelector('.grid-head')
  header.classList.toggle('dark-mode-header')
  let logoutButton = document.querySelector('.profile__log-out__button')
  logoutButton.classList.toggle('dark-mode-button')
  let name = document.querySelector('.profile__personal__name')
  name.classList.toggle('dark-mode-name')
  let aboutMe = document.querySelector('.profile__about__title')
  aboutMe.classList.toggle('dark-mode-about')
  let toggleButton = document.querySelector('.toggle-button')
  toggleButton.classList.toggle('dark-mode-toggle-button')
  let headline = document.querySelector('h1')
  headline.classList.toggle('dark-mode-headline')
}
