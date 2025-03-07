const header = document.querySelector('header');
window.addEventListener('scroll', () => {

    header.classList.toggle('sticky', this.window.scrollY > 80);

} );

// menu icons

let menu = document.querySelector('#menu-icons');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {

    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
} 

//  solucion 

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');

}

document.addEventListener("DOMContentLoaded", function () {
    // 🔎 Buscador
    const searchContainer = document.getElementById("search-container");
    const searchIcon = document.getElementById("search-icon");
    const closeSearch = document.getElementById("close-search");

    searchIcon.addEventListener("click", function () {
        searchContainer.classList.add("active");
        searchContainer.style.opacity = "1";
        searchContainer.style.visibility = "visible";
        document.body.classList.add("no-scroll"); // ❌ Deshabilita el scroll
    });

    closeSearch.addEventListener("click", function () {
        searchContainer.classList.remove("active");
        searchContainer.style.opacity = "0";
        searchContainer.style.visibility = "hidden";
        document.body.classList.remove("no-scroll"); // ✅ Reactiva el scroll
    });

    searchContainer.addEventListener("click", function (event) {
        if (!event.target.closest(".search-box")) {
            searchContainer.classList.remove("active");
            searchContainer.style.opacity = "0";
            searchContainer.style.visibility = "hidden";
            document.body.classList.remove("no-scroll"); // ✅ Reactiva el scroll
        }
    });

    // 🛒 Carrito
    const cartSidebar = document.getElementById("cart-sidebar");
    const cartOverlay = document.getElementById("cart-overlay"); // Fondo desenfocado
    const cartIcon = document.getElementById("cart-icon");
    const closeCart = document.getElementById("close-cart");

    if (cartIcon) {
        cartIcon.addEventListener("click", function (event) {
            event.preventDefault();
            cartSidebar.classList.add("active");
            cartOverlay.classList.add("active");
            document.body.classList.add("no-scroll"); // ❌ Deshabilita el scroll
        });
    }

    if (closeCart) {
        closeCart.addEventListener("click", function () {
            cartSidebar.classList.remove("active");
            cartOverlay.classList.remove("active");
            document.body.classList.remove("no-scroll"); // ✅ Reactiva el scroll
        });
    }

    if (cartOverlay) {
        cartOverlay.addEventListener("click", function () {
            cartSidebar.classList.remove("active");
            cartOverlay.classList.remove("active");
            document.body.classList.remove("no-scroll"); // ✅ Reactiva el scroll
        });
    }
});



// scrollreveal

const sr = ScrollReveal(
    {
        origin: 'top',
        distance: '85px',
        duration: '2500',
        reset: false
    }
);

sr.reveal('.home-text', {delay:300});
sr.reveal('.home-img', {delay:400});
sr.reveal('.container', {delay:300});

sr.reveal('.about-icons', {});
sr.reveal('.about-text', {delay:300});

sr.reveal('.middle-text', {});
sr.reveal('.row-btn, .shop-content', {delay:400});

sr.reveal('.suscripcion', {delay:300});

sr.reveal('.contact-container', {delay:300});






// scrool 1

document.addEventListener("scroll", function () {
    const scrollBtn = document.querySelector(".scroll-1");
    if (window.scrollY > 100) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

