import { dataBase } from "./dataBase.js";

export var bibleVerse = {
  book: dataBase.sortVerse()[1],
  chapter: dataBase.sortVerse()[2],
  verse: dataBase.sortVerse()[3],
  paragraph: dataBase.sortVerse()[0],
}