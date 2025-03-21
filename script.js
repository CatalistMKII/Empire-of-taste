document.addEventListener("DOMContentLoaded", function () {
    const pages = {
        home: `<h2 class='display-4 animate__animated animate__fadeIn'>Традиційна кухня</h2>
               <p class='fs-5 animate__animated animate__fadeIn animate__delay-1s'>Вишукані страви з найкращих інгредієнтів</p>
               <button class='btn btn-danger btn-lg animate__animated animate__fadeIn animate__delay-2s' onclick='loadPage("booking")'>Замовити столик</button>`,
        menu: `<h1 class='text-danger animate__animated animate__fadeInDown mb-3'>Меню</h1>
               <p class='fs-5 text-muted'>У нас ви знайдете страви на будь-який смак – від класики європейської кухні до ароматних азіатських страв і традиційних українських смаколиків.</p>
               <button class='btn btn-danger btn-lg animate__animated animate__fadeIn animate__delay-1s' onclick='openMenuModal()'>Переглянути меню</button>`,
        about: `<h1 class='text-danger animate__animated animate__fadeInDown mb-3'>Про ресторан</h1>
                <p class='fs-5 text-muted'>Ми – ресторан, створений для тих, хто цінує смачну їжу, затишну атмосферу та щирий сервіс.</p>
                <p> Для нас головне – щоб ви почувалися комфортно, як у колі друзів, і могли насолодитися кожним моментом, проведеним у нашому закладі.</p>
                <p>Ми ретельно підбираємо інгредієнти, використовуючи тільки свіжі та якісні продукти.</p>
                <p> У нашому меню є як класичні улюблені страви, так і цікаві авторські варіації.</p>
                <p> Ми хочемо, щоб кожен гість знайшов щось для себе – будь то ситний обід, легка вечеря або десерт до ароматної кави.</p>
                <p>Наш ресторан – це не просто місце, де можна поїсти. Це простір для приємних зустрічей, дружніх розмов та гарного настрою. </p>
                <p>Заходьте до нас, і ми зробимо все, щоб вам захотілося повернутися ще не раз! =}</p>`,
        booking: `<h1 class='text-danger animate__animated animate__fadeInDown mb-3'>Бронювання</h1>
                  <p class='fs-5 text-muted'>Заповніть форму, щоб забронювати столик.</p>`
    };

    window.loadPage = function (page) {
        let content = document.getElementById("content");
        let videoSection = document.getElementById("videoSection");

        if (!content) {
            console.error("Помилка: не знайдено елемент #content");
            return;
        }

        if (videoSection) {
            videoSection.style.display = page === 'home' ? "block" : "none";
        }

        content.innerHTML = pages[page] || "<h1>Помилка</h1><p>Сторінку не знайдено.</p>";
        content.style.minHeight = "50vh";
        content.style.padding = "40px 20px";
        content.style.display = "flex";
        content.style.justifyContent = "center";
        content.style.alignItems = "center";
        content.style.textAlign = "center";
        content.style.flexDirection = "column";

        if (window.anime) {
            anime({
                targets: '#content',
                opacity: [0, 1],
                translateY: [-20, 0],
                duration: 500,
                easing: 'easeOutExpo'
            });
        }

        content.scrollIntoView({ behavior: 'smooth' });
    };

    window.bookTable = function () {
        let bookingModalEl = document.getElementById("bookingModal");
        if (bookingModalEl) {
            let bookingModal = new bootstrap.Modal(bookingModalEl);
            bookingModal.show();
        } else {
            console.error("Помилка: не знайдено модальне вікно бронювання.");
        }
    };

    window.openMenuModal = function () {
        let menuModalEl = document.getElementById("menuModal");
        if (menuModalEl) {
            let menuModal = new bootstrap.Modal(menuModalEl);
            menuModal.show();
        } else {
            console.error("Помилка: не знайдено модальне вікно меню.");
        }
    };

    let bookingForm = document.getElementById("bookingForm");
    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let name = document.getElementById("name").value;
            let phone = document.getElementById("phone").value;
            let guests = document.getElementById("guests").value;
            let date = document.getElementById("date").value;

            console.log(`Бронювання підтверджено:\nІм'я: ${name}\nТелефон: ${phone}\nГості: ${guests}\nДата: ${date}`);

            let bookingModal = bootstrap.Modal.getInstance(document.getElementById("bookingModal"));
            bookingModal.hide();
            bookingForm.reset();

            alert("Ваше бронювання підтверджено!");
        });
    } else {
        console.warn("Попередження: Форма бронювання не знайдена.");
    }

    loadPage('home');

    // Додаємо обробники подій для відображення інформації про страву
    document.querySelectorAll('.F').forEach(img => {
        img.addEventListener('click', function() {
            const infoId = this.id.replace('Img', 'Info');
            const infoBlock = document.getElementById(infoId);
            if (infoBlock) {
                infoBlock.style.display = 'block';
            }
        });
    });

    // Додаємо обробники подій для закриття інформаційних блоків
    document.querySelectorAll('.closebro').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const infoBlock = this.closest('.info-K');
            if (infoBlock) {
                infoBlock.style.display = 'none';
            }
        });
    });
});
