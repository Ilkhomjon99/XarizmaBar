document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
  
      // Скрываем или показываем ответ
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  
      // Меняем состояние стрелки
      button.classList.toggle('active');
    });
  });
 



let burgerMenu = document.getElementById('Burger'); // Получаем элемент "бургер"
let mobileMenu = document.querySelector('.mobile-menu'); // Получаем мобильное меню
let closeButton = document.getElementById('close'); // Получаем кнопку закрытия
let header = document.querySelector('.header'); // Получаем элемент header

// Обработчик клика по кнопке "бургер"
burgerMenu.addEventListener('click', openMobileMenu);

// Функция для открытия мобильного меню
function openMobileMenu() {
  mobileMenu.classList.add('show'); // Добавляем класс 'show', чтобы меню появилось
  header.classList.add('hidden'); // Скрываем header
}

// Обработчик клика по кнопке закрытия для скрытия мобильного меню
closeButton.addEventListener('click', closeMobileMenu);

// Функция для закрытия мобильного меню
function closeMobileMenu() {
  mobileMenu.classList.remove('show'); // Убираем класс 'show', чтобы скрыть меню
  header.classList.remove('hidden'); // Показываем header
}
























