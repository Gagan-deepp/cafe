console.log("Success")


// ======================================= Nav Bar =============================================

const navIcon = document.getElementById('navBar'),
      nav = document.getElementById('nav'),
      closeBar = document.getElementById('closeBar'),
      translate = document.querySelectorAll(".translate"),
      img = document.querySelector('.container .about_img '),
      secondImg = document.querySelector('.second .about_img ')

let about = document.getElementById('about')
const navLink = document.querySelectorAll('.nav-link')

// ======================================== uniVersal ================================ 

let about_Height = about.offsetHeight;
console.log(about_Height)

// ============================== for navBar =======================================

navIcon.onclick = () => {
  nav.style.top = '0rem';
  // closeBar.classList.add('.close_bar_active')
  console.log('success')
}

closeBar.onclick = () => {
  nav.style.top = '-100rem'
}

navLink.forEach(ele => {
  console.log('clicked')

  ele.onclick = () =>{
  nav.style.top = '-100rem'
  }
})



window.addEventListener('scroll',()=>{
  let scroll = window.pageYOffset;
  // console.log(scroll)
  
  let aboutY = about.getBoundingClientRect();
  // console.log(aboutY.top)

  translate.forEach(element =>{
    let speed = element.dataset.speed;
    element.style.transform = `translateY(-${scroll * speed}px)`
  })

  img.style.transform = `translateY(${scroll/(about_Height + aboutY.top) * -18 }rem)`
  secondImg.style.transform = `translateY(${scroll/(about_Height + aboutY.top) * -8 +5 }rem)`

})































// ================================================= Review Slider ============================================
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

