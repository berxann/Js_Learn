"use strict"

let CountOfFilms,
    LastFilm,
    RateFilm,
    YourFavoriteGenres,
    ArrGenres = [];

const PersonalMovieDB = {
    count: CountOfFilms,
    movies: {},
    actors: {},
    genres: ArrGenres,
    privat: true,

}

function start(){
    CountOfFilms = +prompt('Сколько фильмов вы уже посмотрели? ');
    while (CountOfFilms === '' || CountOfFilms == null || isNaN(CountOfFilms) || CountOfFilms >= 500) {
        console.log('NumberOfFilms: error')
        CountOfFilms = +prompt('Сколько фильмов вы уже посмотрели? ');
    }
    console.log('NumOfFilms: done');
}
start();

function LastWatchedFilms() {
    LastFilm = prompt('Один из последних просмотренных фильмов? ');
    while(LastFilm == '' || LastFilm == null){
        console.log('LastFilm: error');
        LastFilm = +prompt('Один из последних просмотренных фильмов? ');
    }
    console.log('LastFilm: done')
}
LastWatchedFilms();

function RateOfFilm() {
    RateFilm = +prompt('Насколько оцените его от 1 до 10?')
    while (RateFilm == '' || RateFilm == null || RateFilm < 0 || RateFilm > 11 || isNaN(RateFilm)) {
        console.log('Rate: error')
        RateFilm = +prompt('Насколько оцените его от 1 до 10?')
    }
    console.log('Rate: done');
}
RateOfFilm();

function WriteYourGenres() {
    YourFavoriteGenres = prompt('Ваши три любимых жанра через запятую? ')
    while(YourFavoriteGenres == '' || YourFavoriteGenres == null){
        console.log('LastFilm: error');
        YourFavoriteGenres = +prompt('Ваши три любимых жанра через запятую? ');
    }
    console.log('FavoriteGenres: done');
    ArrGenres = [YourFavoriteGenres.split(',')]

    ArrGenres.forEach(function (value, index) {
        console.log(`${value} жанр: ${index}`)
    })

    console.log('Ваши жанры: ', ArrGenres)
}
WriteYourGenres();

function TypeOfUser() {

    if (CountOfFilms <= 5 ){
        console.log('Вы новичок')
    }
    else if(CountOfFilms <= 10){
        console.log('Вы мидл')
    }
    else if(CountOfFilms <= 20){
        console.log('Вы адулт')
    }
    else if(CountOfFilms => 30){
        console.log('Вы киноман')
    }
}
TypeOfUser();

function showMyDB() {
    if(!PersonalMovieDB["privat"]){
        console.log(PersonalMovieDB)
    }
}
showMyDB();

