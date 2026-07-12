const heroSlider = new Swiper(".heroSlider", {

    loop: true,

    effect: "fade",

    speed: 1200,

    autoplay: {

        delay: 4500,

        disableOnInteraction: false,

    },

    pagination: {

        el: ".swiper-pagination",

        clickable: true,

    }

});

const items = document.querySelectorAll(".timeline-item");

items.forEach(item=>{

    item.addEventListener("click",()=>{

        items.forEach(i=>i.classList.remove("active"));

        item.classList.add("active");

    });

});