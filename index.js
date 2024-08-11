$(document).ready(function() {

    // 1. Изменение цвета при наведении на элементы меню
    $(".section-one li a").hover(
        function() {
            $(this).css("color", "#FFFFFF"); 
        }, 
        function() {
            $(this).css("color", "#8D91A3"); 
        }
    );

    // 2. Действие на кнопку "Buy It Now"
    $(".buy-button").click(function() {
        alert("Thank you for your purchase!"); 
    });

    // 3. Анимация увеличения звезд 
    $(".star-rating .star").hover(
        function() {
            $(this).css({
                "transform": "scale(1.2)", 
                "transition": "transform 0.1s ease-in-out" 
            });
        },
        function() {
            $(this).css("transform", "scale(1)");  
        }
    );

    // 4. Показ и скрытие описания игры при клике 
    $(".text-1").click(function() {
        $(".text-3").toggle(500); 
    });

    // 5. Плавный скролл к секции с информацией при клике на ссылки в меню
    $(".section-one li a").click(function(e) {
        e.preventDefault(); 
        var target = $(this).attr("href"); 
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000); 
    });

    // 6. Анимация для Score
    function animateScore(score) {
        let $scoreText = $(".score-text");
        let currentScore = 0;

        let scoreInterval = setInterval(function() {
            if (currentScore < score) {
                currentScore += 0.1;
                $scoreText.text(currentScore.toFixed(1));
            } else {
                clearInterval(scoreInterval);
                $scoreText.text(score.toFixed(1)); 
            }
        }, 20); 

        $(".score-container").css({
            'transform': 'rotate(360deg)',
            'transition': 'transform 1s' 
        });
    }

    /
    animateScore(8.7);

    // 7. Анимация появления звездочек
    function animateStars() {
        $(".star").each(function(index) {
            $(this).delay(index * 100).fadeIn(200); 
        });
    }

    $(".star").hide();
    animateStars();

    // 8. Эффект при наведении на звезды 
    $(".star").hover(
        function() {
            $(this).css({
                "transform": "scale(1.2)", 
                "transition": "transform 0.1s ease-in-out" 
            });
        },
        function() {
            $(this).css("transform", "scale(1)");  
        }
    );

    // 9. Эффект при наведении на score
    $(".score-container").hover(
        function() {
            $(this).find(".score").css({
                "transform": "scale(1.2)",  
                "transition": "transform 0.3s ease-in-out",
                "box-shadow": "0 0 10px 2px rgba(0, 255, 200, 0.8)" 
            });
        },
        function() {
            $(this).find(".score").css({
                "transform": "scale(1)",  
                "box-shadow": "none"  
            });
        }
    );

});
