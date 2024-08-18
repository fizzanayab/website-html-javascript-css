// Initialize Slick Slider
$(document).ready(function(){
    $('.slider-container').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
});

// Smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Lightbox initialization
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
});


$(document).ready(function(){
    $('.slider-container').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Modal Image Preview
    var galleryModal = document.getElementById('galleryModal');
    galleryModal.addEventListener('show.bs.modal', function (event) {
        var button = event.relatedTarget;
        var imageUrl = button.getAttribute('data-bs-image');
        var modalImage = document.getElementById('modalImage');
        modalImage.src = imageUrl;
    });
});



// Back to Top Button
const backToTopBtn = document.getElementById("backToTopBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

backToTopBtn.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading time
    setTimeout(function() {
        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }, 3000); // Adjust the loading time as needed
});



var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });


  $(document).ready(function(){
    $('.service-box').click(function(){
        // Find the next element after the clicked service box (the .service-info div)
        $(this).next('.service-info').slideToggle();
    });
});


new WOW().init();


// const swiper = new Swiper('.swiper', {
//     loop: true, 
//     slidesPerView: "auto",
//     centeredSlides: true,
//     observeParents: !0,
//     observer: !0
//   });
//   $(window).on('load', function() {
//     $('.preloader').fadeOut();
//     $('.content').fadeIn();
// });


$(document).ready(function(){
    $('.slider-container').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});







