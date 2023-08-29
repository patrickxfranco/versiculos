import { bibleVerse } from "./verse.js";

// SCREEN 1
let screen1 = document.querySelector('.screen1')
let screen1Button = document.querySelector('#button-hold')

// SCREEN 2
let screen2 = document.querySelector('.screen2')
let book = document.querySelector('.verse-wrapper h2')
let chapter = document.querySelector('.chapter')
let verse = document.querySelector('.verse')
let paragraph = document.querySelector('.verse-wrapper p span')
let scr2Button = document.querySelector('.screen2 button')

screen1Button.addEventListener('click', () => {
  book.innerText = bibleVerse.book
  chapter.innerText = bibleVerse.chapter
  verse.innerText = bibleVerse.verse
  paragraph.innerText = bibleVerse.paragraph
  toggleScreen()
})

scr2Button.addEventListener('click', () => {
  location.reload()
})

function toggleScreen() {
  screen1.classList.toggle('hidden')
  screen2.classList.toggle('hidden')
}