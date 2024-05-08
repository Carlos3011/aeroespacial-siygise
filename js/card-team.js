$("#customers-teams").owlCarousel({
    loop: false,
    center: true,
    items: 4,
    margin: 0,
    autoplay: false,
    dots: true,
    nav: true,
    autoplayTimeout: 4500,
    checkVisibility: true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1170: {
            items: 4,
        },
        1280: {
            items: 4,
        },
    },
});