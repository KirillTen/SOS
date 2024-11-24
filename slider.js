const slides = document.querySelector(".header__slides");
const totalSlides = document.querySelectorAll(".header__slide").length;
let currentIndex = 0;

function moveToNextSlide() {
  currentIndex++;
  if (currentIndex >= totalSlides) {
    currentIndex = 0; // Возврат в начало
  }
  slides.style.transform = "translateX(-" + currentIndex * 100 + "%)";
}

setInterval(moveToNextSlide, 5000); // Изменение слайда каждые 3 секунды

//scroll sections
const sections = document.querySelectorAll(".section-scroll");
let currentSection = 0;

function scrollToSection(index) {
  if (index < 0 || index >= sections.length) return;
  currentSection = index;
  sections[currentSection].scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    scrollToSection(currentSection + 1);
  } else {
    scrollToSection(currentSection - 1);
  }
});


//social-slider

  let currentIndex2 = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const scrollThumb = document.getElementById('scrollThumb');

    function updateCarousel() {
        const angle = currentIndex2 * -120; // Угол поворота
        document.querySelector('.carousel-inner').style.transform = `rotateY(${angle}deg)`;
        updateScrollThumb();
    }

    function updateScrollThumb() {
        const position = (currentIndex2 / totalItems) * 100; // Процентное соотношение
        scrollThumb.style.left = `${position}%`;
    }

    function rotateCarousel() {
        currentIndex2 = (currentIndex2 + 1) % totalItems; // Циклический переход
        updateCarousel();
    }

    function showPrev() {
        currentIndex2 = (currentIndex2 - 1 + totalItems) % totalItems; // Циклический переход назад
        updateCarousel();
    }

    function showNext() {
        rotateCarousel();
    }

    document.getElementById('prev').addEventListener('click', showPrev);
    document.getElementById('next').addEventListener('click', showNext);

    setInterval(rotateCarousel, 30000); // Смена слайдов каждые 3 секунды

    updateCarousel(); // Инициализация

  // details

  // Получаем все элементы details
const details = document.querySelectorAll(".header__menu");

// Проходимся по каждому элементу
details.forEach(item => {

  // На каждый элемент вешаем слушатель события клика
  item.addEventListener('click', (e) => {

    // Сбрасываем стандартное действие при клике
    e.preventDefault();
    
    // Находим открытый элемент
    const openItem = document.querySelector(".header__menu[open]");
    
    // Если есть открытый элемент удаляем ему атрибут open
    if (openItem) openItem.open = false;

    // Если открытый элемент не является тем, на который мы нажали, то нажатому элементу добавляем атрибут open
    if (openItem !== item) item.open = true 
  })
})

