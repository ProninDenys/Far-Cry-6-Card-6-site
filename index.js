// Ожидание загрузки документа
$(document).ready(function () {
    // Функция для перехода по ссылкам
    function navigateTo(url) {
      window.open(url, "_blank"); // Открывает ссылку в новой вкладке
    }
  
    // Обработчик кликов для кнопки INFORMATION
    $('li.active a').click(function (e) {
      e.preventDefault(); // Отключаем стандартное поведение
      navigateTo("https://www.ubisoft.com/en-gb/game/far-cry/far-cry-6");
    });
  
    // Обработчик кликов для кнопки RATINGS INFO
    $('li:nth-child(2) a').click(function (e) {
      e.preventDefault(); // Отключаем стандартное поведение
      navigateTo("https://www.ubisoft.com/en-gb/game/far-cry/far-cry-6");
    });
  
    // Обработчик кликов для кнопки WHERE TO BUY
    $('li:nth-child(3) a').click(function (e) {
      e.preventDefault(); // Отключаем стандартное поведение
      navigateTo("https://www.ubisoft.com/en-gb/game/far-cry/far-cry-6");
    });
  
    // Обработчик клика для кнопки BUY IT NOW
    $('.buy-button').click(function (e) {
      e.preventDefault(); // Отключаем стандартное поведение
      navigateTo("https://www.ubisoft.com/en-gb/game/far-cry/far-cry-6");
    });
  });
  