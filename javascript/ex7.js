// $(document).ready(function () {
//     $(".slider").slick({
//         variableWidth: true,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         dots: true,
//         mobileFirst: true,
//         responsive: [
//             {
//                 breakpoint: 560,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     });
// });

$(document).ready(function(){
    $('.my-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 300,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});
