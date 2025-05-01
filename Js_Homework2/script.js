//24 номер, работа циклами и условиями
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?')
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

for(let i = 0; i < 2; i++){
    do{
        answerOfFilm = prompt('Один из последних просмотренных фильмов?')
        answerOfRate = prompt('На сколько оцените его?')
    }
    while (answerOfFilm === "" || answerOfFilm === null || answerOfFilm.length > 50) {
    }
}

if (personalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов")
}
else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классический зритель")

}
else if (personalMovieDB.count >= 30){
    console.log("Вы киноман")

}
else {
    console.log("Произошла ошибка")

}
console.log(personalMovieDB.count) //проверка значений

personalMovieDB.movies[answerOfFilm] = answerOfRate

console.log(personalMovieDB) //проверка объекта для удобства
