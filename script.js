document.addEventListener("DOMContentLoaded", function () {
    const pages = {
        home: `<h2 class='display-4 animate__animated animate__fadeIn'>Традиційна кухня</h2>
               <p class='fs-5 animate__animated animate__fadeIn animate__delay-1s'>Вишукані страви з найкращих інгредієнтів</p>
               <button class='btn btn-danger btn-lg animate__animated animate__fadeIn animate__delay-2s' onclick='loadPage("booking")'>Замовити столик</button>` ,
        menu: `<h1 class='text-danger animate__animated animate__fadeInDown mb-3'>Меню</h1>
               <p class='fs-5 text-muted'>Наші страви приготовані зі свіжих інгредієнтів.</p>` ,
        about: `<h1 class='text-danger animate__animated animate__fadeInDown mb-3'>Про ресторан</h1>
                <p class='fs-5 text-muted'>Історія нашого закладу почалася з великої пристрасті до кулінарії.</p>` ,
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
