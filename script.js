document.addEventListener("DOMContentLoaded", function () {
    const pages = {
        home: `<h2 class='display-4 animate__animated animate__fadeIn'>Традиційна кухня</h2>
               <p class='fs-5 animate__animated animate__fadeIn animate__delay-1s'>Вишукані страви з найкращих інгредієнтів</p>
               <button class='btn btn-danger btn-lg animate__animated animate__fadeIn animate__delay-2s' onclick='loadPage("booking")'>Замовити столик</button>` ,
        menu: `<h1 class='text-danger animate__animated animate__fadeInDown mb-3'>Меню</h1>
               <p class='fs-5 text-muted'>У нас ви знайдете страви на будь-який смак – від класики європейської кухні до ароматних азіатських страв і традиційних українських смаколиків.</p>
                <p>Європейська кухня:
                любите вишуканий смак та ніжні текстури? Спробуйте наш рататуй, стейк томагавк чи ніжне ризото – кожна страва готується з якісних інгредієнтів і з любов’ю до деталей.</p>
                <p>Азіатська кухня:
                для тих, хто любить яскраві смаки та пряні нотки. У нас є гострий і насичений Том Ян, ніжні дімсами та суші й роли, які завжди свіжі та смачні.</p>
               <p>Українська кухня:
                якщо хочеться чогось рідного та затишного – тут вам до нас! Запашний борщ зі сметаною, домашні вареники з різними начинками та соковиті голубці, як у бабусі.</p>
                <p>Заходьте до нас і обирайте, що до душі!</p>` ,
        about: `<h1 class='text-danger animate__animated animate__fadeInDown mb-3'>Про ресторан</h1>
                <p class='fs-5 text-muted'>Історія нашого закладу почалася з великої пристрасті до кулінарії.</p>
                <p class='sus'>Ми – ресторан, створений для тих, хто цінує смачну їжу, затишну атмосферу та щирий сервіс. Для нас головне – щоб ви почувалися комфортно, як у колі друзів, і могли насолодитися кожним моментом, проведеним у нашому закладі.
                Ми ретельно підбираємо інгредієнти, використовуючи тільки свіжі та якісні продукти. У нашому меню є як класичні улюблені страви, так і цікаві авторські варіації. Ми хочемо, щоб кожен гість знайшов щось для себе – будь то ситний обід, легка вечеря або десерт до ароматної кави.
                Наш ресторан – це не просто місце, де можна поїсти. Це простір для приємних зустрічей, дружніх розмов та гарного настрою. Заходьте до нас, і ми зробимо все, щоб вам захотілося повернутися ще не раз! =}</p>` ,
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

        if (page === 'home') {
            videoSection.style.display = "block";
        } else {
            videoSection.style.display = "none";
        }

        content.innerHTML = pages[page] || "<h1>Помилка</h1><p>Сторінку не знайдено.</p>";
        content.style.minHeight = "50vh";
        content.style.padding = "40px 20px";
        content.style.display = "flex";
        content.style.justifyContent = "center";
        content.style.alignItems = "center";
        content.style.textAlign = "center";
        content.style.flexDirection = "column";

        anime({
            targets: '#content',
            opacity: [0, 1],
            translateY: [-20, 0],
            duration: 500,
            easing: 'easeOutExpo'
        });

        content.scrollIntoView({ behavior: 'smooth' });
    };

    window.bookTable = function () {
        let bookingModal = new bootstrap.Modal(document.getElementById("bookingModal"));
        bookingModal.show();
    };

    document.getElementById("bookingForm").addEventListener("submit", function (event) {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let guests = document.getElementById("guests").value;
        let date = document.getElementById("date").value;

        console.log(`Бронювання підтверджено:\nІм'я: ${name}\nТелефон: ${phone}\nГості: ${guests}\nДата: ${date}`);

        let bookingModal = bootstrap.Modal.getInstance(document.getElementById("bookingModal"));
        bookingModal.hide();
        document.getElementById("bookingForm").reset();

        alert("Ваше бронювання підтверджено!");
    });

    loadPage('home'); // Завантаження головної сторінки при запуску

    // Фіксуємо footer внизу сторінки
    document.querySelector("footer").style.position = "fixed";
    document.querySelector("footer").style.bottom = "0";
    document.querySelector("footer").style.width = "100%";
});
