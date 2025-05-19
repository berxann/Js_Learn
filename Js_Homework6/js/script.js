/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;        //выполнено
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки   //выполнено

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// Возьмите свой код из предыдущей практики
//48 урок, использование событий на странице
'use strict';

document.addEventListener('DOMContentLoaded', ()=> {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    }

    const advImg = document.querySelectorAll('.promo__adv img'),
        getMovieName = document.querySelector('.promo__genre'),
        getBg = document.querySelector('.promo__bg'),
        genresList = document.querySelector('.promo__interactive-list'),
        submitBtn = document.querySelector('.promo__interactive .add button'),
        inputUser = document.querySelector('.promo__interactive .add input[type="text"]'),
        checkBox = document.querySelector('.yes').previousElementSibling,
        basket = document.querySelectorAll('.delete')
    let cutUserValue;

    const removeAdv = (removeAdvItem) => {
        removeAdvItem.forEach(item => {
            item.remove()
        })
    }
    removeAdv(advImg);

    const changeMovieName = (movieName) => {
    movieName.textContent = 'Драма'
    }
    changeMovieName(getMovieName)
    
    const changeBg = (bg) => {
        bg.style.backgroundImage = 'url(img/bg.jpg)'
    }
    changeBg(getBg)
    
    function detectInputLength() {
        if (inputUser.value.length > 21) {
            cutUserValue = `${inputUser.value.slice(0, 21)}...`
            movieDB.movies.push(cutUserValue)  //добавляем введеное значение
            // console.log(`${cutUserValue}...`)
        } else {
            movieDB.movies.push(inputUser.value) //добавляем введеное значение
        }
    }
    
    function ifCheckBoxTrue() {
        if (checkBox.checked === true) {
            console.log('Добавляем любимый фильм')
        } else {
            console.log('Не добавляем в избранное')
        }
    }
    
    function movieListAndNumbering() {
        genresList.innerHTML = '';
        movieDB.movies.forEach((item, i) => { //добавляем нумерацию, и добавляем динамический код на сайт  
            genresList.innerHTML += `<li class="promo__interactive-item" >${i + 1} ${item}  
                <div class="delete"></div>  
                </li>`
        })
       
    }  
    function deleteListItems(){
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1)
            })

        })
        console.log(movieDB.movies)
    }
    
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(inputUser.value)
        
        ifCheckBoxTrue(); //проверяем чекбокс
        detectInputLength(); //проверяем длину строки
        movieDB.movies.sort(); //сортируем уже с введеным значением
        movieListAndNumbering(); //добавляем на страницу с добавленным значением
        deleteListItems(); //для работы корзины
        inputUser.value = inputUser.value = '' //очищаем поле
    })
    
// Убрать вызов функции из нее самой, вызывать отдельно
    movieListAndNumbering(); //надо работать с этим
    deleteListItems(); //чтобы работала и с начальным списком
})
        
