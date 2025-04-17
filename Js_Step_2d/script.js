"use strict"

let QuestNumOfFilms;
let LastFilm;
let RateFilm;
let YourFavoriteGenres;
let ArrGenres = [];

const PersonalMovieDB = {
    count: QuestNumOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
}

function start(){
    QuestNumOfFilms = +prompt('Сколько фильмов вы уже посмотрели? ');
        while (QuestNumOfFilms === '' || QuestNumOfFilms == null || isNaN(QuestNumOfFilms) || QuestNumOfFilms >= 100) {
            console.log('NumberOfFilms: error')
            QuestNumOfFilms = +prompt('Сколько фильмов вы уже посмотрели? ');
        }
    console.log('NumOfFilms: done');
}
start();

function LastWatchedFilmsAndRate() {
    LastFilm = prompt('Один из последних просмотренных фильмов? ');
        while(LastFilm == '' || LastFilm == null){
            console.log('LastFilm: error');
            LastFilm = +prompt('Один из последних просмотренных фильмов? ');
        }
    console.log('LastFilm: done')
}
LastWatchedFilmsAndRate();

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
    return(console.log('Ваши жанры: ', ArrGenres))
}
WriteYourGenres();

function TypeOfUser() {

    if (QuestNumOfFilms <= 5 ){
        console.log('Вы новичок')
    }
    else if(QuestNumOfFilms <= 10){
        console.log('Вы мидл')
    }
    else if(QuestNumOfFilms <= 20){
        console.log('Вы адулт')
    }
    else if(QuestNumOfFilms => 30){
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

//простейшая программа для общения с пользователем через prompt и выводом откладки в консоль