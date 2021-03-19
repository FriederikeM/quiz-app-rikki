// Create dark-mode

function myFunction() {
  let profile = document.querySelector('.profile')
  profile.classList.toggle('dark-mode')
  let header = document.querySelector('.grid-head')
  header.classList.toggle('dark-mode-header')
  let logoutButton = document.querySelector('.profile__log-out__button')
  logoutButton.classList.toggle('dark-mode-button')
}
