document.addEventListener("DOMContentLoaded", function () {
    const pages = {
        home: `<h2 class='display-4 animate__animated animate__fadeIn'>Традиційна кухня</h2>
               <p class='fs-5 animate__animated animate__fadeIn animate__delay-1s'>Вишукані страви з найкращих інгредієнтів</p>
               <button class='btn btn-danger btn-lg animate__animated animate__fadeIn animate__delay-2s' onclick='loadPage("booking")'>Замовити столик</button>`,
        menu: `<h1 class='text-danger animate__animated animate__fadeInDown mb-3'>Меню</h1>
               <p class='fs-5 text-muted'>У нас ви знайдете страви на будь-який смак – від класики європейської кухні до ароматних азіатських страв і традиційних українських смаколиків.</p>
               <button class='btn btn-danger btn-lg animate__animated animate__fadeIn animate__delay-1s' onclick='openMenuModal()'>Переглянути меню</button>`,
        about: `<h1 class='text-danger animate__animated animate__fadeInDown mb-3'>Про ресторан</h1>
                <p class='fs-5 text-muted'>Історія нашого закладу почалася з великої пристрасті до кулінарії.</p>`,
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
});


const img = document.getElementById('ratatouilleImg');
const infoK = document.getElementById('infoK');
const closeBro = document.getElementById('closeBro');

img.addEventListener('click', () => {
    infoK.style.display = 'block';
});

closeBro.addEventListener('click', () => {
    infoK.style.display = 'none';
});

document.addEventListener('click', (e) => {
    if (!infoK.contains(e.target) && e.target !== img) {
        infoK.style.display = 'none';
    }
});

// Открытие окон по клику на картинку
document.querySelectorAll('.info-img').forEach(img => {
    img.addEventListener('click', () => {
        const targetId = img.getAttribute('data-target');
        document.getElementById(targetId).style.display = 'block';
    });
});

// Закрытие окон по клику на кнопку закрытия
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        document.getElementById(targetId).style.display = 'none';
    });
});

// Закрытие окна при клике вне его
document.addEventListener('click', (e) => {
    document.querySelectorAll('.info-box').forEach(box => {
        const img = document.querySelector(info-img[data-target=="${box.id}"]);
        if (!box.contains(e.target) && e.target !== img) {
            box.style.display = 'none';
        }
    });
});
