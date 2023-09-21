$(document).ready(function () {
    $('.hover-trigger').hover(
        function () {
            // Show the popup when hovering
            $(this).next('.popup-content').fadeIn(200);
        },
        function () {
            // Hide the popup when the mouse leaves
            $(this).next('.popup-content').fadeOut(200);
        }
    );
});