/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно */
//29 номер использование функций

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

function start(){

    while (numberOfFilms === '', numberOfFilms === null, isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?')
    }
}
start();

function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        do{
            answerOfFilm = prompt('Один из последних просмотренных фильмов?')
            answerOfRate = prompt('На сколько оцените его?')
        }
        while (answerOfFilm === "" || answerOfFilm === null || answerOfFilm.length > 50) {
        }
    }
}
rememberMyFilms();

function detectPersonalLevel(){
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
}
detectPersonalLevel();



function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`)
    }

    // personalMovieDB.genres[0] = +prompt(`Ваш любимый жанр под номером`)
    // personalMovieDB.genres[1] = +prompt(`Ваш любимый жанр под номером`)
    // personalMovieDB.genres[2] = +prompt(`Ваш любимый жанр под номером`)

}
writeYourGenres();
function showMyDB(){
    if(personalMovieDB.private === false){
        console.log(personalMovieDB)
    }
}
showMyDB();

console.log(personalMovieDB.count) //проверка значений (строки местами не менять!)
//
personalMovieDB.movies[answerOfFilm] = answerOfRate
//
//  console.log(personalMovieDB) //проверка объекта для удобства
