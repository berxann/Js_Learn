//19 номер, работа с переменными и объектами
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?')

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

// const a = prompt('Один из последних просмотренных фильмов?')
// const b = prompt('Один из последних просмотренных фильмов?')
// const c = prompt('На сколько оцените его?')
// const d = prompt('На сколько оцените его?')


for (let i = 0; i < 2; i++){
    answerOfFilm = prompt('Один из последних просмотренных фильмов?')
}
for (let i = 0; i < 2; i++){
    answerOfRate = prompt('На сколько оцените его?')
}
personalMovieDB.movies[answerOfFilm] = answerOfRate

console.log(personalMovieDB)
