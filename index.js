console.log("Success")


let cart = document.getElementById('shopping_cart');

let list = document.getElementById('list_items')


cart.onclick = () => {
    console.log('implemented')
    list.classList.toggle('active')
}



var swiper = new Swiper(".reviews_swiper", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    breakpoints: {
        640: {
          slidesPerView: 0,
        },
        768: {
          slidesPerView: 2,
        },
    },
    loop : true,
    grabCursor: true,
  });

