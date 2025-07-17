/*Hum Menu */
const navmenu = document.querySelector('.nav__menu');
const navlinks = document.querySelector('.nav__links');

navmenu.addEventListener('click', () => {
    navlinks.classList.toggle('open');
});

document.querySelectorAll('.nav__links a').forEach(link => {
    link.addEventListener('click', () => {
        navlinks.classList.remove('open');
    });
});


/*Scroll */
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
})

/*Dark Mode */
const body = document.body;
const toggle = document.getElementById('toggle__mode');
const icon = toggle.querySelector('i');
const current = localStorage.getItem('theme');

if (current === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.replace('bi-brightness-low-fill', 'bi-moon-fill');
}

toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        icon.classList.replace('bi-brightness-low-fill', 'bi-moon-fill');
    } else {
        localStorage.setItem('theme', 'light');
        icon.classList.replace('bi-moon-fill', 'bi-brightness-low-fill');
    }
});


/*Slides */
const slides = document.querySelectorAll('.home__right img');
const images = document.querySelectorAll('.images img');

function slide(index) {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    images.forEach(image => {
        image.classList.remove('active');
    });

    slides[index].classList.add('active');
    images[index].classList.add('active');
}


/*Filter */
const filterButtons = document.querySelectorAll('.filter__btn button');
const productCards = document.querySelectorAll('.filter__cards');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;

        productCards.forEach(card => {
            const cardCategory = card.dataset.name;

            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

/*Accordion */
document.querySelectorAll('.question__header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement.parentElement;
        const icon = header.querySelector('.question__icon');

        item.classList.toggle('active');

        if (item.classList.contains('active')) {
            icon.style.transform = 'rotate(45deg)';
        } else {
            icon.style.transform = 'rotate(0deg)';
        }
    });
});

/* Load */
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.remove();
        }, 500); 
    }, 1200); 
});

/* Scrool */
const scrollRevealOption = {
    origin: 'bottom',
    distance: '200px',
    duration: 2200,
}

ScrollReveal().reveal('.home__left', {
    ...scrollRevealOption,
    origin: 'left',
});

ScrollReveal().reveal('.home__right', {
    ...scrollRevealOption,
    origin: 'top',
});
ScrollReveal().reveal('.images', {
    ...scrollRevealOption,
    origin: 'bottom',
});

ScrollReveal().reveal('.head__content h1', {
    ...scrollRevealOption,
});
ScrollReveal().reveal('.head__content p', {
    ...scrollRevealOption,
    delay: 400,
});
ScrollReveal().reveal('.category__card', {
    ...scrollRevealOption,
    interval: 100
});

ScrollReveal().reveal('.pro__cards', {
    ...scrollRevealOption,
    delay: 600,
    interval: 100
});

ScrollReveal().reveal('.filter__btn', {
    ...scrollRevealOption,
});

ScrollReveal().reveal('.filter__cards', {
    ...scrollRevealOption,
    delay: 700,
    interval: 100
});

ScrollReveal().reveal('.question__item', {
    ...scrollRevealOption,
    interval: 100
});

ScrollReveal().reveal('.footer__coulmn', {
    ...scrollRevealOption,
    interval: 100
});

ScrollReveal().reveal('.copyright', {
    ...scrollRevealOption,
    delay: 300
});

