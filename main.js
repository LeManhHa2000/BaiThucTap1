
$(".user-icon").click(function(){
    $(".user-list").toggleClass("d-none");
})

//Nav move
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $(".header-top").addClass("d-none");
        }
        else{
            $(".header-top").removeClass("d-none");
        }
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,

    },
    autoplay: {
        delay: 3000,
    },
  });

$(".select-list").children(".nav-item").click(function(){
    $(".nav-item.active").removeClass("active");
    $(this).addClass("active");
})