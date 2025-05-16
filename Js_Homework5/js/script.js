/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта) //выполнено

2) Изменить жанр фильма, поменять "комедия" на "драма" //выполнено коряво(хорошо выполнено с небольшой помощью)

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. //выполнено
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла. //выполнено на половину + копирование готового кода
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */
//43 урок, работа с элементами на странице
'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
}

// const adv = document.getElementsByClassName('promo__adv');   //плохой вариант, не надо удалять сразу весь блок, а лишь элементы в блоке родителя
// adv[0].remove();

const advImg = document.querySelectorAll('.promo__adv img'), //хороший вариант
    changeName = document.querySelector('.promo__genre'),
    changeBg = document.querySelector('.promo__bg'),
    genresList = document.querySelector('.promo__interactive-list')

//1)
advImg.forEach(item => {  //хороший вариант первого номера
    item.remove()
})

//2)
// changeName.innerHTML = '<p>Драма</p> ' //плохой вариант, не надо создавать лишний тэг в блоке div в html
changeName.textContent = 'Драма' //хороший вариант, самый лучший

//3)
changeBg.style.backgroundImage = 'url(img/bg.jpg)'  //хороший, и наверно единственный вариант через Js

//4, 5)
genresList.innerHTML = '' //сначала очищаем родителя
movieDB.movies.sort(); //сортируем фильмы по алфавиту
movieDB.movies.forEach((item, i) => { //добавляем нумерацию, и добавляем динамический код на сайт
    genresList.innerHTML += `<li class="promo__interactive-item">${i + 1} ${item} 
                <div class="delete"></div>
            </li>`
})
