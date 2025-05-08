var btn = $('#button');

$(window).on('scroll', function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
}).on('click', '#button', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});


$(window).on('load', function() {
    // Preloader
    $('.loader').fadeOut();
    $('.loader-mask').delay(350).fadeOut('slow');
});


// wow js
new WOW().init();

// comingsoon page countdown js
(function() {
    if (document.getElementById("days") !== null) {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = '2024',
            dayMonth = "12/14/",
            birthday = dayMonth + yyyy;

        today = mm + "/" + dd + "/" + yyyy;
        if (today > birthday) {
            birthday = dayMonth + nextYear;
        }
        //end

        const countDown = new Date(birthday).getTime(),
            x = setInterval(function() {
                const now = new Date().getTime(),
                    distance = countDown - now;

                let days = Math.floor(distance / (day));
                let hours = Math.floor((distance % (day)) / (hour));
                let minutes = Math.floor((distance % (hour)) / (minute));
                let seconds = Math.floor((distance % (minute)) / second);

                document.getElementById("days").innerText = days,
                    document.getElementById("hours").innerText = hours,
                    document.getElementById("minutes").innerText = minutes,
                    document.getElementById("seconds").innerText = seconds;

                //do something later when date is reached
                if (distance < 0) {
                    clearInterval(x);
                    var items = document.querySelectorAll(".compaign_countdown");
                    for (var i = 0; i <= items.length; i++) {
                        if (typeof items[i] !== 'undefined') {
                            items[i].style.display = "none";
                        }
                    }
                }
                //seconds
            }, 0)
    }
}());
// Get the button
var backButton = $('#back-to-top-btn');

if (backButton.length) {
    $(window).on('scroll', function() {
        backButton.toggle($(this).scrollTop() > 20);
    });

    $(document).on('click', '#back-to-top-btn', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });
}


$(document).ready(function() {
    var owl = $('.rooms-and-suites-con .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })
})
$(document).ready(function() {
    var owl = $('.rooms-and-suites-con2 .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })
})
$(document).ready(function() {
    var owl = $('.testimonials-con .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })
})
$(document).ready(function() {
    var owl = $('.explore-gallery-photos-con .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        lazyLoad: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3,
                stagePadding: 30,
            }
        }
    })
})


$(document).ready(function() {
    var owl = $('.gallery-photos-carousel-con .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            }
        }
    })
})


// photo gallery script
$(document).on('click', '[data-target="#lightbox"]', function() {
    var $lightbox = $('#lightbox'),
        $img = $(this).find('img'),
        src = $img.attr('src'),
        alt = $img.attr('alt'),
        css = {
            'maxWidth': $(window).width() - 100,
            'maxHeight': $(window).height() - 100
        };
    $lightbox.find('img').attr('src', src).attr('alt', alt).css(css);
}).on('shown.bs.modal', '#lightbox', function() {
    var $img = $(this).find('img');
    $(this).find('.modal-dialog').css({
        'width': $img.width()
    });
    $(this).find('.close').removeClass('hidden');
});

// photo gallery script
if ($('#popupImage').length) {
    var images = [ /*...*/
            "assets/images/gallery-img1.jpg",
            "assets/images/gallery-img2.jpg",
            "assets/images/gallery-img3.jpg",
            "assets/images/gallery-img4.jpg",
            "assets/images/gallery-img5.jpg",
            "assets/images/gallery-img6.jpg",
            "assets/images/gallery-img7.jpg",
        ],
        currentIndex = 0;

    $(document).on('click', '#popupImage', function() {
        $(this).attr('src', images[currentIndex]);
        currentIndex = (currentIndex + 1) % images.length;
    });
}