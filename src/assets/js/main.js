"use strict";
/* -------------------------------------
 Google Analytics
 change UA-XXXXX-X to be your site's ID.
 -------------------------------------- */
(function (b, o, i, l, e, r) {
    b.GoogleAnalyticsObject = l;
    b[l] || (b[l] =
            function () {
                (b[l].q = b[l].q || []).push(arguments)
            });
    b[l].l = +new Date;
    e = o.createElement(i);
    r = o.getElementsByTagName(i)[0];
    e.src = '//www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e, r)
}(window, document, 'script', 'ga'));
ga('create', 'UA-XXXXX-X', 'auto');
ga('send', 'pageview');
/* -------------------------------------
 CUSTOM FUNCTION WRITE HERE
 -------------------------------------- */
$(document).ready(function (e) {
    /* -------------------------------------
     POST SLIDER
     -------------------------------------- */
    $("#tg-post-slider").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
        pagination: false,
        autoPlay: true
    });
    /* -------------------------------------
     HOME SLIDER
     -------------------------------------- */
    $("#home-slider").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        pagination: false,
        autoPlay: true
    });
    /* -------------------------------------
     POST SLIDER
     -------------------------------------- */
    $("#categories-slider").owlCarousel({
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [991, 2],
        itemsTablet: [639, 1],
        navigation: false,
        pagination: false,
        autoPlay: false
    });
    /* -------------------------------------
     NEWS SLIDER
     -------------------------------------- */
    $("#news-slider").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        pagination: false,
        autoPlay: true
    });
    /* -------------------------------------
     MASNORY GALLERY
     -------------------------------------- */
    $(window).load(function () {
        $('#filter-masonry').isotope({
            itemSelector: '.masonry-grid',
            masonry: {columnWidth: 2}
        });
    });
    /* -------------------------------------
     Google Map
     -------------------------------------- */
    $("#map").gmap3({
        marker: {address: "Haltern am See, Weseler Str. 151"},
        map: {options: {zoom: 16}}
    });
    /* -------------------------------------
     OPEN CLOSE
     -------------------------------------- */
    $(".sliding").hide();
    $(".show_hide").show();
    $('.show_hide').on('click', function () {
        $(".sliding").slideToggle();
    });
    /* -------------------------------------
     STICKY SIDEBAR
     -------------------------------------- */
    $('#sidebar').theiaStickySidebar({
        additionalMarginTop: 30
    });
});